//
//  ContentView.swift
//  Tempo Adjust for Bandcamp and Discogs
//

import SwiftUI
import SafariServices

private let extensionBundleIdentifier = "com.miseryconfusion.tempoadjust.Extension"

struct ContentView: View {
    @State private var isExtensionEnabled: Bool?

    private let timer = Timer.publish(every: 0.5, on: .main, in: .common).autoconnect()

    var body: some View {
        VStack(spacing: 12) {
            Image(nsImage: NSApp.applicationIconImage)
                .resizable()
                .frame(width: 128, height: 128)

            Text("Start using Tempo Adjust\nin Safari")
                .font(.title)
                .bold()
                .multilineTextAlignment(.center)

            VStack(alignment: .leading, spacing: 16) {
                // Step 1
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

                // Step 2
                stepView(number: 2) {
                    VStack(alignment: .leading, spacing: 6) {
                        Text("Click ") + Text("Allow").bold() + Text(" in the Tempo Adjust settings to enable Tempo Adjust on Bandcamp and Discogs.")

                        Text("If you do not see the Tempo Adjust settings page, you can ")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        + Text("re-open the Tempo Adjust settings page")
                            .font(.caption)
                            .foregroundStyle(.link)
                            .bold()
                            .underline()

                    }
                    .onTapGesture {
                        openExtensionSettings()
                    }
                }

                // Step 3
                stepView(number: 3) {
                    Text("Click ") + Text("Always allow").bold() + Text(".")
                }

                // Step 4
                stepView(number: 4) {
                    Text("Start using Tempo Adjust on your favorite releases on Bandcamp and Discogs.")
                }
            }

            Spacer().frame(height: 4)

            HStack(spacing: 4) {
                Text("Still need help?")
                    .foregroundStyle(.secondary)
                Link("Contact support", destination: URL(string: "mailto:dev@miseryconfusion.com")!)
                    .onHover { hovering in
                        if hovering {
                            NSCursor.pointingHand.push()
                        } else {
                            NSCursor.pop()
                        }
                    }
            }
            .font(.callout)
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

    private func stepView<Content: View>(number: Int, @ViewBuilder content: () -> Content) -> some View {
        HStack(alignment: .top, spacing: 8) {
            Text("\(number).")
                .font(.body)
                .bold()
                .frame(width: 20, alignment: .trailing)

            content()
                .font(.body)
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
}
