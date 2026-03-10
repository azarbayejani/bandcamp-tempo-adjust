//
//  TempoAdjustApp.swift
//  Tempo Adjust for Bandcamp and Discogs
//

import SwiftUI

@main
struct TempoAdjustApp: App {
    var body: some Scene {
        #if os(macOS)
        Window("Tempo Adjust", id: "main") {
            ContentView()
        }
        .windowStyle(.titleBar)
        .windowResizability(.contentSize)
        .defaultPosition(.center)
        #else
        WindowGroup {
            ContentView()
        }
        #endif
    }
}
