//
//  TempoAdjustApp.swift
//  Tempo Adjust
//

import SwiftUI
import StoreKit

@main
struct TempoAdjustApp: App {
    var body: some Scene {
        #if os(macOS)
        Window("Tempo Adjust", id: "main") {
            ContentView()
                .task { await listenForTransactions() }
        }
        .windowStyle(.titleBar)
        .windowResizability(.contentSize)
        .defaultPosition(.center)
        #else
        WindowGroup {
            ContentView()
                .task { await listenForTransactions() }
        }
        #endif
    }

    private func listenForTransactions() async {
        for await result in Transaction.updates {
            if case .verified(let transaction) = result {
                await transaction.finish()
            }
        }
    }
}
