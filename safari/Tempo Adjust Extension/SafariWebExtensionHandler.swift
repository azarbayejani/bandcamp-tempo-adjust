//
//  SafariWebExtensionHandler.swift
//  Tempo Adjust Extension
//
//  Created by Bobak Azarbayejani on 5/20/25.
//

import SafariServices
import os.log
#if os(macOS)
import AppKit
#endif

// Shared with the app through the App Group; keep in sync with ContentView.swift.
private let appGroupIdentifier = "group.com.miseryconfusion.tempoadjust"
private let hasAllPermissionsKey = "hasAllPermissions"

class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {

    func beginRequest(with context: NSExtensionContext) {
        let request = context.inputItems.first as? NSExtensionItem

        let profile: UUID?
        if #available(iOS 17.0, macOS 14.0, *) {
            profile = request?.userInfo?[SFExtensionProfileKey] as? UUID
        } else {
            profile = request?.userInfo?["profile"] as? UUID
        }

        let message: Any?
        if #available(iOS 15.0, macOS 11.0, *) {
            message = request?.userInfo?[SFExtensionMessageKey]
        } else {
            message = request?.userInfo?["message"]
        }

        os_log(.default, "Received message from browser.runtime.sendNativeMessage: %@ (profile: %@)", String(describing: message), profile?.uuidString ?? "none")

        // The background script reports whether setup is finished; the app
        // reads it to decide between the setup steps and "You're all set".
        if let body = message as? [String: Any],
           body["name"] as? String == "setupState",
           let hasAllPermissions = body["hasAllPermissions"] as? Bool {
            UserDefaults(suiteName: appGroupIdentifier)?.set(hasAllPermissions, forKey: hasAllPermissionsKey)
        }

        var reply: [String: Any] = [ "echo": message as Any ]

        // The options page's Donate button asks for the app's tip jar. macOS
        // can open it from here without Safari's "open in app?" prompt; iOS
        // extensions can't open apps, so the page follows the link instead.
        #if os(macOS)
        if let body = message as? [String: Any],
           body["name"] as? String == "openTipJar",
           let tipJarURL = URL(string: "tempoadjust://tip") {
            reply["opened"] = NSWorkspace.shared.open(tipJarURL)
        }
        #endif

        let response = NSExtensionItem()
        if #available(iOS 15.0, macOS 11.0, *) {
            response.userInfo = [ SFExtensionMessageKey: reply ]
        } else {
            response.userInfo = [ "message": reply ]
        }

        context.completeRequest(returningItems: [ response ], completionHandler: nil)
    }

}
