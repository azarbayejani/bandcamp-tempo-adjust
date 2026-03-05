//
//  TempoAdjustApp.swift
//  Tempo Adjust for Bandcamp and Discogs
//

import SwiftUI

@main
struct TempoAdjustApp: App {
    var body: some Scene {
        Window("Tempo Adjust", id: "main") {
            ContentView()
        }
        .windowStyle(.titleBar)
        .windowResizability(.contentSize)
        .defaultPosition(.center)
    }
}
