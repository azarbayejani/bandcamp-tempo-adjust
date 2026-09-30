//
//  ContentView.swift
//  Tempo Adjust for Bandcamp and Discogs
//

import SwiftUI
import SafariServices

private let extensionBundleIdentifier = "com.miseryconfusion.tempoadjust.Extension"

struct ContentView: View {
    #if os(macOS)
    @State private var isExtensionEnabled: Bool?
    private let timer = Timer.publish(every: 0.5, on: .main, in: .common).autoconnect()
    #endif

    var body: some View {
        #if os(macOS)
        macOSContent
        #else
        iOSContent
        #endif
    }

    // MARK: - Shared Components

    private func stepView<Content: View>(number: Int, @ViewBuilder content: () -> Content) -> some View {
        HStack(alignment: .top, spacing: 8) {
            Text("\(number).")
                .font(.body)
                .bold()
                .frame(width: 20, alignment: .trailing)
                .layoutPriority(1)

            content()
                .font(.body)
                .fixedSize(horizontal: false, vertical: true)
        }
    }

    private var supportFooter: some View {
        HStack(spacing: 4) {
            Text("Still need help?")
                .foregroundStyle(.secondary)
            Link("Contact support", destination: URL(string: "mailto:dev@miseryconfusion.com")!)
            #if os(macOS)
                .onHover { hovering in
                    if hovering {
                        NSCursor.pointingHand.push()
                    } else {
                        NSCursor.pop()
                    }
                }
            #endif
        }
        .font(.callout)
    }

    #if os(iOS)
    private var appIcon: Image {
        if let uiImage = UIImage(named: "Icon") ?? UIImage(contentsOfFile: Bundle.main.path(forResource: "Icon", ofType: "png") ?? "") {
            return Image(uiImage: uiImage)
        }
        return Image(systemName: "app.fill")
    }

    // iOS 18 moved Safari under Settings > Apps.
    private var openSafariExtensionsStep: LocalizedStringKey {
        if #available(iOS 18, *) {
            return "Open the **Settings** app and go to **Apps > Safari > Extensions**."
        }
        return "Open the **Settings** app and go to **Safari > Extensions**."
    }
    #endif

    // MARK: - macOS Content

    #if os(macOS)
    private var macOSContent: some View {
        VStack(spacing: 12) {
            Image(nsImage: NSApp.applicationIconImage)
                .resizable()
                .frame(width: 128, height: 128)

            Text("Start using Tempo Adjust\nin Safari")
                .font(.title)
                .bold()
                .multilineTextAlignment(.center)

            VStack(alignment: .leading, spacing: 16) {
                stepView(number: 1) {
                    VStack(alignment: .leading, spacing: 6) {
                        Button("Open Safari Settings\u{2026}") {
                            openSafariPreferences()
                        }

                        if let enabled = isExtensionEnabled {
                            if enabled {
                                Text("\u{2705} The Tempo Adjust extension is currently on. Continue following the install steps to make sure it works on Bandcamp and Discogs.")
                                    .font(.caption)
                                    .foregroundStyle(.secondary)
                            } else {
                                Text("\u{274C} Tempo Adjust is not enabled")
                                    .font(.caption)
                                    .foregroundStyle(.secondary)
                                Text("Enable the extension by checking the checkbox next to the Tempo Adjust extension on the left panel")
                                    .font(.caption)
                                    .foregroundStyle(.secondary)
                            }
                        }
                    }
                }

                stepView(number: 2) {
                    VStack(alignment: .leading, spacing: 6) {
                        Text("Click **Allow** in the Tempo Adjust settings to enable Tempo Adjust on Bandcamp and Discogs.")

                        HStack(spacing: 0) {
                            Text("If you do not see the Tempo Adjust settings page, try clicking on the Tempo Adjust icon in your Safari toolbar.")
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                }

                stepView(number: 3) {
                    Text("Click **Always allow**.")
                }

                stepView(number: 4) {
                    Text("Start using Tempo Adjust on your favorite releases on Bandcamp and Discogs.")
                }
            }

            Divider()
                .padding(.vertical, 4)

            TipJarView()

            Spacer().frame(height: 4)
            supportFooter
        }
        .padding(.horizontal, 30)
        .padding(.vertical, 20)
        .frame(width: 425)
        .fixedSize()
        .onReceive(timer) { _ in
            checkExtensionState()
        }
        .task {
            checkExtensionState()
        }
    }

    private func checkExtensionState() {
        SFSafariExtensionManager.getStateOfSafariExtension(withIdentifier: extensionBundleIdentifier) { state, error in
            guard let state = state, error == nil else { return }
            DispatchQueue.main.async {
                isExtensionEnabled = state.isEnabled
            }
        }
    }

    private func openSafariPreferences() {
        SFSafariApplication.showPreferencesForExtension(withIdentifier: extensionBundleIdentifier) { _ in }
    }

    private func openExtensionSettings() {
        SFSafariApplication.dispatchMessage(
            withName: "openOptions",
            toExtensionWithIdentifier: extensionBundleIdentifier
        ) { _ in
            activateSafari()
        }
    }

    private func activateSafari() {
        let script = """
        tell application "Safari"
            activate
            set index of window 1 to 1
        end tell
        """
        guard let appleScript = NSAppleScript(source: script) else { return }
        appleScript.executeAndReturnError(nil)
    }
    #endif

    // MARK: - iOS Content

    #if os(iOS)
    private var iOSContent: some View {
        ScrollView {
            VStack(spacing: 20) {
                appIcon
                    .resizable()
                    .frame(width: 128, height: 128)
                    .clipShape(RoundedRectangle(cornerRadius: 28, style: .continuous))
                    .accessibilityHidden(true)

                Text("Start using Tempo Adjust\nin Safari")
                    .font(.title)
                    .bold()
                    .multilineTextAlignment(.center)

                VStack(alignment: .leading, spacing: 20) {
                    stepView(number: 1) {
                        Text(openSafariExtensionsStep)
                    }

                    stepView(number: 2) {
                        Text("Tap **Tempo Adjust** and turn on the toggle.")
                    }

                    stepView(number: 3) {
                        VStack(alignment: .leading, spacing: 6) {
                            Text("On the same page, tap **Extension Settings**. Tempo Adjust's setup page opens in Safari.")

                            Text("If you don't see Extension Settings, open Safari, tap the extensions menu in the address bar, then tap **Tempo Adjust**.")
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }

                    stepView(number: 4) {
                        Text("Tap **Allow**, then **Always Allow**, so Tempo Adjust can run on Bandcamp and Discogs.")
                    }

                    stepView(number: 5) {
                        Text("Start using Tempo Adjust on your favorite releases on Bandcamp and Discogs.")
                    }
                }

                Divider()
                    .padding(.vertical, 4)

                TipJarView()

                supportFooter
                    .padding(.bottom, 8)
            }
            .padding(.horizontal, 30)
            .padding(.vertical, 20)
            .frame(maxWidth: .infinity)
        }
    }
    #endif
}
