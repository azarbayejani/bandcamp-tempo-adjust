//
//  TipJarView.swift
//  Tempo Adjust for Bandcamp and Discogs
//

import SwiftUI
import StoreKit
import OSLog

private let logger = Logger(subsystem: "com.miseryconfusion.tempoadjust", category: "TipJar")

struct TipJarView: View {
    private static let productIDs: [String] = [
        "com.miseryconfusion.tempoadjust.smalltip",
        "com.miseryconfusion.tempoadjust.mediumtip",
        "com.miseryconfusion.tempoadjust.largetip"
    ]

    @AppStorage("tipCount") private var tipCount: Int = 0
    @State private var products: [Product] = []
    @State private var showThankYou = false
    @State private var purchasing: String?
    @State private var purchaseError: String?

    var body: some View {
        VStack(spacing: 12) {
            Text("Support Tempo Adjust")
                .font(.headline)

            Text("Leave a tip to support development")
                .font(.subheadline)
                .foregroundStyle(.secondary)

            Group {
                if showThankYou {
                    thankYouView
                        .transition(.opacity)
                } else if products.isEmpty {
                    ProgressView()
                        .padding(.vertical, 8)
                        .transition(.opacity)
                } else {
                    VStack(spacing: 8) {
                        ForEach(products.sorted(by: { $0.price < $1.price })) { product in
                            tipButton(for: product)
                        }

                        if tipCount > 0 {
                            Text("You've tipped \(tipCount) \(tipCount == 1 ? "time" : "times"). Thank you!")
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                    .transition(.opacity)
                }
            }

        }
        .task {
            do {
                products = try await Product.products(for: Self.productIDs)
            } catch {
                logger.error("Failed to load tip products: \(error.localizedDescription, privacy: .public)")
            }
        }
        .alert(
            "Purchase Failed",
            isPresented: Binding(
                get: { purchaseError != nil },
                set: { if !$0 { purchaseError = nil } }
            ),
            presenting: purchaseError
        ) { _ in
            Button("OK", role: .cancel) { purchaseError = nil }
        } message: { error in
            Text(error)
        }
    }

    private func tipButton(for product: Product) -> some View {
        Button {
            Task {
                await purchase(product)
            }
        } label: {
            HStack {
                tipIcon(for: product.id)
                    .frame(width: 24)
                Text(product.displayName)
                    .font(.body)
                Spacer()
                if purchasing == product.id {
                    ProgressView()
                        .controlSize(.small)
                } else {
                    Text(product.displayPrice)
                        .font(.body)
                        .bold()
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 10)
            .background(.quaternary, in: RoundedRectangle(cornerRadius: 10))
        }
        .buttonStyle(.plain)
        .disabled(purchasing != nil)
    }

    private var thankYouView: some View {
        VStack(spacing: 8) {
            Image(systemName: "heart.fill")
                .font(.largeTitle)
                .foregroundStyle(.pink)
                .symbolEffect(.bounce, value: showThankYou)
            Text("Thank you for your support!")
                .font(.body)
                .bold()
        }
        .padding(.vertical, 12)
    }

    @ViewBuilder
    private func tipIcon(for productID: String) -> some View {
        switch productID {
        case "com.miseryconfusion.tempoadjust.smalltip":
            Image(systemName: "cup.and.saucer.fill")
                .foregroundStyle(.brown)
        case "com.miseryconfusion.tempoadjust.mediumtip":
            Image(systemName: "takeoutbag.and.cup.and.straw.fill")
                .foregroundStyle(.orange)
        case "com.miseryconfusion.tempoadjust.largetip":
            Image(systemName: "fork.knife")
                .foregroundStyle(.red)
        default:
            Image(systemName: "heart.fill")
                .foregroundStyle(.pink)
        }
    }

    private func purchase(_ product: Product) async {
        purchasing = product.id
        defer { purchasing = nil }

        do {
            let result = try await product.purchase()
            switch result {
            case .success(let verification):
                switch verification {
                case .verified(let transaction):
                    await transaction.finish()
                    tipCount += 1
                    withAnimation(.easeInOut(duration: 0.3)) {
                        showThankYou = true
                    }
                    try? await Task.sleep(for: .seconds(3))
                    withAnimation(.easeInOut(duration: 0.3)) {
                        showThankYou = false
                    }
                case .unverified(let transaction, _):
                    await transaction.finish()
                }
            case .pending, .userCancelled:
                break
            @unknown default:
                break
            }
        } catch {
            purchaseError = error.localizedDescription
        }
    }
}
