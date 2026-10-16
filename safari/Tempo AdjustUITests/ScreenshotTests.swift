//
//  ScreenshotTests.swift
//  Tempo AdjustUITests
//
//  Drives Safari in the simulator with the real extension and saves the
//  page captures used by the App Store screenshots (safari/store-screenshots/).
//
//  The extension must already be enabled and allowed on bandcamp.com
//  (Settings > Apps > Safari > Extensions > Tempo Adjust). Run with:
//
//    TEST_RUNNER_SCREENSHOT_DIR=/abs/dir xcodebuild test \
//      -project 'safari/Tempo Adjust.xcodeproj' -scheme 'Tempo Adjust' \
//      -destination 'id=<simulator udid>' \
//      -only-testing:'Tempo AdjustUITests/ScreenshotTests'
//

import XCTest

final class ScreenshotTests: XCTestCase {
    private let safari = XCUIApplication(bundleIdentifier: "com.apple.mobilesafari")
    private let albumURL = URL(string: "https://illegalafterstracks.bandcamp.com/album/illegal-afters-04")!
    private let releaseURL = URL(string: "https://www.discogs.com/release/15571627-Sketch-Artist-illegal-afters-01")!
    private var outputDirectory: URL!

    private var web: XCUIElement { safari.webViews.firstMatch }

    override func setUpWithError() throws {
        continueAfterFailure = false
        let path = ProcessInfo.processInfo.environment["SCREENSHOT_DIR"]
            ?? NSTemporaryDirectory().appending("tempo-adjust-screenshots")
        outputDirectory = URL(fileURLWithPath: path)
        try FileManager.default.createDirectory(at: outputDirectory, withIntermediateDirectories: true)
    }

    // MARK: - Helpers

    private func save(_ name: String) throws {
        let png = XCUIScreen.main.screenshot().pngRepresentation
        try png.write(to: outputDirectory.appendingPathComponent("\(name).png"))
    }

    private func element(labelled label: String) -> XCUIElement {
        web.descendants(matching: .any).matching(NSPredicate(format: "label == %@", label)).firstMatch
    }

    private func waitUntilGone(_ element: XCUIElement, timeout: TimeInterval) {
        let gone = XCTNSPredicateExpectation(predicate: NSPredicate(format: "exists == false"), object: element)
        XCTAssertEqual(XCTWaiter().wait(for: [gone], timeout: timeout), .completed, "\(element) never went away")
    }

    // Safari shows a "◀ Settings" breadcrumb in the status bar when the
    // last foreground app was Settings (where the extension gets enabled),
    // so go home first and launch from a clean slate.
    private func launchSafari() {
        XCUIDevice.shared.press(.home)
        safari.launch()
    }

    private func openAlbum() {
        launchSafari()
        XCUIDevice.shared.system.open(albumURL)
        let play = web.buttons["Play"].firstMatch
        XCTAssertTrue(play.waitForExistence(timeout: 60), "Album page never loaded")
        let accept = web.buttons.matching(NSPredicate(format: "label BEGINSWITH[c] 'Accept'")).firstMatch
        if accept.exists {
            accept.tap()
        }
    }

    // Scrolls the page with a slow drag so the pitch fader lands at the
    // given screen y. Slow and held so Safari doesn't add inertia, and
    // started at the page's left margin so nothing under the finger reacts.
    private func scroll(faderTo targetY: CGFloat) {
        let fader = web.sliders["Pitch adjust"]
        XCTAssertTrue(fader.waitForExistence(timeout: 20), "Tempo panel never appeared")
        // Within 2pt: the targets leave only a few points between the
        // status bar and the nearest page content.
        var remaining = fader.frame.midY - targetY
        var attempts = 0
        while abs(remaining) > 2, attempts < 6 {
            let startY: CGFloat = remaining > 0 ? 700 : 150
            let endY = startY - remaining
            let start = web.coordinate(withNormalizedOffset: .zero).withOffset(CGVector(dx: 20, dy: startY))
            let end = web.coordinate(withNormalizedOffset: .zero).withOffset(CGVector(dx: 20, dy: endY))
            start.press(forDuration: 0.15, thenDragTo: end, withVelocity: .slow, thenHoldForDuration: 0.4)
            Thread.sleep(forTimeInterval: 0.5)
            remaining = fader.frame.midY - targetY
            attempts += 1
        }
    }

    // Taps the fader track at a position across its width (0 = min, 1 = max).
    private func setFader(_ normalized: CGFloat) {
        let fader = web.sliders["Pitch adjust"]
        fader.coordinate(withNormalizedOffset: CGVector(dx: normalized, dy: 0.5)).tap()
        Thread.sleep(forTimeInterval: 0.6)
    }

    // The extension remembers BPMs it has detected, so on a repeat run the
    // button may never appear; the readout is already there.
    private func detectBpm() {
        let detect = web.buttons["Detect BPM"]
        guard detect.waitForExistence(timeout: 8) else { return }
        detect.tap()
        waitUntilGone(detect, timeout: 180)
        waitUntilGone(web.progressIndicators["Detecting BPM"], timeout: 180)
        Thread.sleep(forTimeInterval: 0.5)
    }

    // Discogs pins an ad banner to the bottom of the viewport. Its close
    // control is an unlabelled 25pt square just past the banner's right edge.
    // Sometimes a full-width "seedtag" creative sits on top of it, with a
    // link covering the whole banner area and its own unlabelled 19pt close
    // square inside its top-right corner; tapping the banner's close through
    // it follows the ad, so that one has to go first.
    private func dismissAd() {
        let creative = web.descendants(matching: .other).matching(NSPredicate(format: "label == 'seedtag_creative'")).firstMatch
        if creative.waitForExistence(timeout: 3) {
            let frame = creative.frame
            safari.coordinate(withNormalizedOffset: .zero)
                .withOffset(CGVector(dx: frame.maxX - 11, dy: frame.minY + 11))
                .tap()
            Thread.sleep(forTimeInterval: 0.8)
        }
        let ad = web.descendants(matching: .other).matching(NSPredicate(format: "label == 'ad'")).firstMatch
        guard ad.waitForExistence(timeout: 5) else { return }
        let frame = ad.frame
        safari.coordinate(withNormalizedOffset: .zero)
            .withOffset(CGVector(dx: frame.maxX + 26, dy: frame.minY + 10))
            .tap()
        Thread.sleep(forTimeInterval: 0.8)
    }

    // Safari draws the page under the status bar, so each target scrolls
    // just far enough that only white page sits behind the clock: the hero
    // puts Bandcamp's nav bar above the screen with the album art starting
    // under the status bar, and the player view puts the art's bottom edge
    // above the screen with the caption just under the status bar.
    private let heroFaderY: CGFloat = 593    // whole album art above the panel
    private let playerFaderY: CGFloat = 266  // player and tracklist

    // MARK: - Tests

    @MainActor
    func testBandcampCaptures() throws {
        openAlbum()
        web.buttons["Play"].firstMatch.tap()

        // Playing track: BPM, fader at +3.2% on the ±10 range.
        scroll(faderTo: heroFaderY)
        try save("bc-fresh")
        detectBpm()
        scroll(faderTo: heroFaderY)
        try save("bc-bpm-detected")
        setFader(0.66)
        scroll(faderTo: heroFaderY)
        try save("bc-hero")

        // ±16 range, pulled down to −8%.
        scroll(faderTo: playerFaderY)
        element(labelled: "±16").tap()
        setFader(0.25)
        scroll(faderTo: playerFaderY)
        try save("bc-wide-down")

        // Master tempo on.
        element(labelled: "Master Tempo").tap()
        Thread.sleep(forTimeInterval: 0.5)
        try save("bc-master-tempo")

        // Tap BPM screen, with a value tapped in so the readout and the
        // steppers are live. The button's label starts with "TAP" and ends
        // with its source line, which changes as you tap.
        element(labelled: "BPM options").tap()
        let tapBpm = element(labelled: "Tap BPM")
        XCTAssertTrue(tapBpm.waitForExistence(timeout: 5))
        tapBpm.tap()
        let tap = web.buttons.matching(NSPredicate(format: "label BEGINSWITH 'TAP'")).firstMatch
        XCTAssertTrue(tap.waitForExistence(timeout: 5), "Tap screen never appeared")
        // XCTest waits for the page to idle around every tap, so even
        // back-to-back taps land around 60 BPM and anything slower risks
        // the 2 s reset. Tap as fast as it allows, then double the result
        // so the capture shows a dance tempo and a stepper in use.
        let tapCenter = tap.coordinate(withNormalizedOffset: CGVector(dx: 0.5, dy: 0.5))
        for _ in 0..<8 {
            tapCenter.tap()
        }
        element(labelled: "Double BPM").tap()
        Thread.sleep(forTimeInterval: 0.5)
        try save("bc-tap")
        element(labelled: "Cancel").tap()

        // Neutral again, then analyze the first three tracks so the
        // tracklist shows their BPMs.
        element(labelled: "Reset").tap()
        element(labelled: "±10").tap()
        element(labelled: "Master Tempo").tap()
        for title in ["Silver Oxide", "u can have whatever u want", "Titrating"] {
            scroll(faderTo: playerFaderY)
            web.staticTexts[title].firstMatch.tap()
            Thread.sleep(forTimeInterval: 1.5)
            scroll(faderTo: playerFaderY)
            detectBpm()
        }
        scroll(faderTo: playerFaderY)
        try save("bc-album-bpms")

        // Switch to a track that has not been analyzed, so the panel shows
        // the Detect BPM button above a tracklist that already has tempos.
        web.staticTexts["Turboprop Patterns"].firstMatch.tap()
        Thread.sleep(forTimeInterval: 1.5)
        scroll(faderTo: playerFaderY)
        XCTAssertTrue(web.buttons["Detect BPM"].waitForExistence(timeout: 8), "Detect BPM button never appeared")
        try save("bc-detect")
    }

    // Discogs: the panel mounts under the video player once a video is
    // opened, so play the first one.
    @MainActor
    func testDiscogsCaptures() throws {
        launchSafari()
        XCUIDevice.shared.system.open(releaseURL)
        let play = web.buttons["Play"].firstMatch
        XCTAssertTrue(play.waitForExistence(timeout: 60), "Release page never loaded")
        let accept = web.buttons.matching(NSPredicate(format: "label BEGINSWITH[c] 'Accept'")).firstMatch
        if accept.exists {
            accept.tap()
        }
        try save("dg-landed")
        play.tap()
        Thread.sleep(forTimeInterval: 3)
        let fader = web.sliders["Pitch adjust"]
        if !fader.waitForExistence(timeout: 20) {
            try save("dg-no-panel")
            try web.debugDescription.write(to: outputDirectory.appendingPathComponent("release-tree.txt"), atomically: true, encoding: .utf8)
            XCTFail("Tempo panel never appeared on the release page")
        }
        dismissAd()
        scroll(faderTo: 660)
        try save("dg-panel")
        setFader(0.7)
        scroll(faderTo: 660)
        try save("dg-nudged")
    }

    // Captures the release page with its ad banner up and writes its
    // accessible tree, for working out the banner's close control.
    @MainActor
    func testDumpReleasePage() throws {
        launchSafari()
        XCUIDevice.shared.system.open(releaseURL)
        let play = web.buttons["Play"].firstMatch
        XCTAssertTrue(play.waitForExistence(timeout: 60), "Release page never loaded")
        play.tap()
        Thread.sleep(forTimeInterval: 3)
        _ = web.sliders["Pitch adjust"].waitForExistence(timeout: 20)
        let ad = web.descendants(matching: .other).matching(NSPredicate(format: "label == 'ad'")).firstMatch
        _ = ad.waitForExistence(timeout: 5)
        Thread.sleep(forTimeInterval: 2)
        try save("dg-ad")
        try web.debugDescription.write(to: outputDirectory.appendingPathComponent("release-tree.txt"), atomically: true, encoding: .utf8)
    }

    // Prints the accessible tree of the album page, for finding labels.
    @MainActor
    func testDumpAlbumPage() throws {
        openAlbum()
        web.buttons["Play"].firstMatch.tap()
        _ = web.sliders["Pitch adjust"].waitForExistence(timeout: 20)
        let dump = web.debugDescription
        try dump.write(to: outputDirectory.appendingPathComponent("album-tree.txt"), atomically: true, encoding: .utf8)
    }
}
