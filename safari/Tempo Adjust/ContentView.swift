//
//  ContentView.swift
//  Tempo Adjust for Bandcamp and Discogs
//

import SwiftUI
import SafariServices

private let extensionBundleIdentifier = "com.miseryconfusion.tempoadjust.Extension"

// Written by SafariWebExtensionHandler when the extension reports whether it
// has every permission it needs; keep in sync with that file.
private let appGroupIdentifier = "group.com.miseryconfusion.tempoadjust"
private let hasAllPermissionsKey = "hasAllPermissions"

struct ContentView: View {
    #if os(macOS)
    @State private var isExtensionEnabled: Bool?
    private let timer = Timer.publish(every: 0.5, on: .main, in: .common).autoconnect()
    #endif
    @Environment(\.scenePhase) private var scenePhase
    // Read up front, not in .task, so the first frame already shows the right
    // screen instead of flashing the setup steps.
    @State private var hasAllPermissions = Self.storedHasAllPermissions()
    @State private var showingSetupSteps = false
    @State private var showingTipJar = false
    // Scale with Dynamic Type so step numbers and icons don't clip or
    // overlap their text at larger sizes.
    @ScaledMetric(relativeTo: .body) private var stepNumberWidth: CGFloat = 20
    @ScaledMetric(relativeTo: .body) private var iconWidth: CGFloat = 24

    // macOS can also check that the extension is still on; iOS can't, so a
    // disabled extension keeps showing as set up there. The setup steps stay
    // one tap away for that case. Until Safari answers, assume the extension
    // is still on, since it was when it last reported.
    private var isAllSet: Bool {
        #if os(macOS)
        hasAllPermissions && isExtensionEnabled != false
        #else
        hasAllPermissions
        #endif
    }

    var body: some View {
        Group {
            #if os(macOS)
            macOSContent
            #else
            iOSContent
            #endif
        }
        .sheet(isPresented: $showingTipJar) {
            tipJarSheet
        }
        .onChange(of: scenePhase) { _, phase in
            if phase == .active {
                refreshSetupState()
            }
        }
        // The extension's Donate buttons open tempoadjust://tip. Once setup
        // is done the tip jar is already on the page.
        .onOpenURL { url in
            if url.host == "tip" && !isAllSet {
                showingTipJar = true
            }
        }
    }

    private static func storedHasAllPermissions() -> Bool {
        UserDefaults(suiteName: appGroupIdentifier)?.bool(forKey: hasAllPermissionsKey) ?? false
    }

    private func refreshSetupState() {
        hasAllPermissions = Self.storedHasAllPermissions()
    }

    // MARK: - Shared Components

    @ViewBuilder
    private var title: some View {
        if isAllSet {
            VStack(spacing: 6) {
                HStack(spacing: 8) {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundStyle(.green)
                        .accessibilityHidden(true)
                    Text("You're all set")
                }
                .font(.title)
                .bold()

                Text("Tempo Adjust is ready on Bandcamp and Discogs in Safari.")
                    .foregroundStyle(.secondary)
                    .multilineTextAlignment(.center)
            }
        } else {
            Text("Start using Tempo Adjust in Safari")
                .font(.title)
                .bold()
                .multilineTextAlignment(.center)
        }
    }

    // iOS can't tell when the extension is turned off, so point people back
    // at the steps if it stops working. macOS notices and shows them again.
    private var setupStepsLabel: LocalizedStringKey {
        #if os(macOS)
        "Setup steps"
        #else
        "Not working? See setup steps"
        #endif
    }

    // Once setup is done the steps fold away, and the tip jar, which sat
    // behind a card until then, moves onto the page.
    @ViewBuilder
    private func setupAndSupport(steps: some View) -> some View {
        if isAllSet {
            DisclosureGroup(setupStepsLabel, isExpanded: $showingSetupSteps) {
                steps
                    .padding(.top, 12)
            }
            .disclosureGroupStyle(SetupStepsDisclosureStyle())

            Divider()
                .padding(.vertical, 4)

            TipJarView()
        } else {
            steps

            Divider()
                .padding(.vertical, 4)

            tipPrompt
        }
    }

    private func stepView<Content: View>(number: Int, @ViewBuilder content: () -> Content) -> some View {
        HStack(alignment: .top, spacing: 8) {
            Text("\(number).")
                .font(.body)
                .bold()
                .frame(width: stepNumberWidth, alignment: .trailing)
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

    // Until setup is done, tips live in a sheet so the setup steps don't
    // compete with them.
    private var tipPrompt: some View {
        Button {
            showingTipJar = true
        } label: {
            HStack(spacing: 12) {
                Image(systemName: "heart.fill")
                    .foregroundStyle(.pink)
                    .frame(width: iconWidth)
                VStack(alignment: .leading, spacing: 2) {
                    Text("Support Development")
                        .font(.body)
                        .bold()
                    Text("Leave a tip")
                        .font(.callout)
                        .foregroundStyle(.secondary)
                }
                Spacer()
                Image(systemName: "chevron.right")
                    .font(.callout.weight(.semibold))
                    .foregroundStyle(.tertiary)
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 10)
            .background(.quaternary, in: RoundedRectangle(cornerRadius: 10))
            .contentShape(RoundedRectangle(cornerRadius: 10))
        }
        .buttonStyle(.plain)
        .accessibilityHint("Opens the tip jar")
    }

    @ViewBuilder
    private var tipJarSheet: some View {
        #if os(macOS)
        VStack(spacing: 16) {
            TipJarView()
            Button("Done") {
                showingTipJar = false
            }
            .keyboardShortcut(.defaultAction)
        }
        .padding(24)
        .frame(width: 360)
        #else
        NavigationStack {
            ScrollView {
                TipJarView()
                    .padding()
            }
            .toolbar {
                ToolbarItem(placement: .confirmationAction) {
                    Button("Done") {
                        showingTipJar = false
                    }
                }
            }
        }
        .presentationDetents([.medium, .large])
        #endif
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

            title

            setupAndSupport(steps: macOSSteps)

            Spacer().frame(height: 4)
            supportFooter
        }
        .padding(.horizontal, 30)
        .padding(.vertical, 20)
        .frame(width: 425)
        .fixedSize()
        .onReceive(timer) { _ in
            checkExtensionState()
            refreshSetupState()
        }
        .task {
            checkExtensionState()
        }
    }

    private var macOSSteps: some View {
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

                title

                setupAndSupport(steps: iOSSteps)

                supportFooter
                    .padding(.bottom, 8)
            }
            .padding(.horizontal, 30)
            .padding(.vertical, 20)
            .frame(maxWidth: .infinity)
        }
    }

    private var iOSSteps: some View {
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
    }
    #endif
}

// The default style on macOS toggles only from the chevron and draws its
// focus ring around that alone. Make the chevron and label one button so
// the whole label is clickable and focus covers both.
private struct SetupStepsDisclosureStyle: DisclosureGroupStyle {
    func makeBody(configuration: Configuration) -> some View {
        VStack(alignment: .leading, spacing: 0) {
            HStack {
                Button {
                    withAnimation(.easeInOut(duration: 0.2)) {
                        configuration.isExpanded.toggle()
                    }
                } label: {
                    HStack(spacing: 6) {
                        Image(systemName: "chevron.right")
                            .font(.caption.weight(.semibold))
                            .foregroundStyle(.secondary)
                            .rotationEffect(.degrees(configuration.isExpanded ? 90 : 0))
                        configuration.label
                    }
                    .padding(.vertical, 2)
                    .contentShape(Rectangle())
                }
                .buttonStyle(.plain)
                .accessibilityValue(configuration.isExpanded ? "Expanded" : "Collapsed")

                Spacer(minLength: 0)
            }

            if configuration.isExpanded {
                configuration.content
            }
        }
    }
}
