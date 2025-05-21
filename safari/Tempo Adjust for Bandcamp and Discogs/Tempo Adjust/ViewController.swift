//
//  ViewController.swift
//  Tempo Adjust for Bandcamp and Discogs
//
//  Created by Bobak Azarbayejani on 12/4/24.
//

import Cocoa
import SafariServices
import WebKit
import OSAKit

let extensionBundleIdentifier = "com.miseryconfusion.tempoadjust.Extension"

class ViewController: NSViewController, WKNavigationDelegate, WKScriptMessageHandler {

    @IBOutlet var webView: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()

        self.webView.navigationDelegate = self
        if #available(macOS 13.3, *) {
            self.webView.isInspectable = true
        }

        self.webView.configuration.userContentController.add(self, name: "controller")

        self.webView.loadFileURL(Bundle.main.url(forResource: "Main", withExtension: "html")!, allowingReadAccessTo: Bundle.main.resourceURL!)
    }
    

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        SFSafariExtensionManager.getStateOfSafariExtension(withIdentifier: extensionBundleIdentifier) { (state, error) in
            guard let state = state, error == nil else {
                // Insert code to inform the user that something went wrong.
                return
            }

            DispatchQueue.main.async {
                if #available(macOS 13, *) {
                    print("macOS 13", state.isEnabled)
                    webView.evaluateJavaScript("show(\(state.isEnabled), true)")
                } else {
                    print("below macOS 13", state.isEnabled)
                    webView.evaluateJavaScript("show(\(state.isEnabled), false)")
                }
            }
        }
        
        startPolling();
    }

    func startPolling() {
        Timer.scheduledTimer(withTimeInterval: 0.5, repeats: true) { _ in
            self.notifyExtensionStatus()
        }
    }
    
    func notifyExtensionStatus() {
        SFSafariExtensionManager.getStateOfSafariExtension(withIdentifier: extensionBundleIdentifier) { (state, error) in
            guard let state = state, error == nil else {
                // Insert code to inform the user that something went wrong.
                return
            }
            DispatchQueue.main.async {
                if #available(macOS 13, *) {
                    self.webView.evaluateJavaScript("show(\(state.isEnabled), true)")
                } else {
                    self.webView.evaluateJavaScript("show(\(state.isEnabled), false)")
                }
            }
        }
    }
    
    func activateSafari() {
        let script = """
        tell application "Safari"
            activate
            set index of window 1 to 1 
        end tell
        """
        
        guard let appleScript = NSAppleScript(source: script) else { return; }
        appleScript.executeAndReturnError(nil)
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let body = message.body as? [String: Any],
              let action = body["action"] as? String else {
            debugPrint("Received invalid message: \(message.body)")
            return;
        }

        switch action {
            case "open-extension-settings":
                debugPrint("Opening extension settings.")
                SFSafariApplication.dispatchMessage(withName: "openOptions", toExtensionWithIdentifier: extensionBundleIdentifier) { error in
                    debugPrint("Message attempted. Error info: \(String.init(describing: error))")
                    
                    self.activateSafari();
                }
            case "open-safari-preferences":
                SFSafariApplication.showPreferencesForExtension(withIdentifier: extensionBundleIdentifier) { error in
               
                }
            default:
                return;
        }
    }

}
