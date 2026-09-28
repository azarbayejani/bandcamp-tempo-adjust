//
//  SupportView.swift
//  Tempo Adjust for Bandcamp and Discogs
//

import SwiftUI
import StoreKit
import OSLog

private let logger = Logger(subsystem: "com.miseryconfusion.tempoadjust", category: "Support")

struct SupportView: View {
    private static let productID = "com.miseryconfusion.tempoadjust.supporter"

    @State private var product: Product?
    @State private var isSubscribed = false
    @State private var purchasing = false
    @State private var showThankYou = false
    @State private var purchaseError: String?

    var body: some View {
        VStack(spacing: 12) {
            Text("Support Tempo Adjust")
                .font(.headline)

            Text("Subscribe yearly to support development")
                .font(.subheadline)
                .foregroundStyle(.secondary)

            if showThankYou {
                thankYouView
                    .transition(.opacity)
            } else if isSubscribed {
                subscribedView
            } else if let product {
                supportButton(for: product)
            } else {
                ProgressView()
                    .padding(.vertical, 8)
            }

            Button("Restore Purchase") {
                Task {
                    try? await AppStore.sync()
                    await checkSubscription()
                }
            }
            .font(.caption)
            .buttonStyle(.plain)
            .foregroundStyle(.secondary)
        }
        .task {
            do {
                let products = try await Product.products(for: [Self.productID])
                product = products.first
            } catch {
                logger.error("Failed to load supporter product: \(error.localizedDescription, privacy: .public)")
            }
            await checkSubscription()
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

    private func supportButton(for product: Product) -> some View {
        Button {
            Task {
                await purchase(product)
            }
        } label: {
            HStack {
                Image(systemName: "heart.fill")
                    .foregroundStyle(.pink)
                    .frame(width: 24)
                Text(product.displayName)
                    .font(.body)
                Spacer()
                if purchasing {
                    ProgressView()
                        .controlSize(.small)
                } else {
                    Text("\(product.displayPrice)/year")
                        .font(.body)
                        .bold()
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 10)
            .background(.quaternary, in: RoundedRectangle(cornerRadius: 10))
        }
        .buttonStyle(.plain)
        .disabled(purchasing)
    }

    private var subscribedView: some View {
        HStack(spacing: 6) {
            Image(systemName: "checkmark.circle.fill")
                .foregroundStyle(.green)
            Text("You're a Supporter. Thank you!")
                .font(.body)
                .bold()
        }
        .padding(.vertical, 4)
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

    private func purchase(_ product: Product) async {
        purchasing = true
        defer { purchasing = false }

        do {
            let result = try await product.purchase()
            switch result {
            case .success(let verification):
                switch verification {
                case .verified(let transaction):
                    await transaction.finish()
                    withAnimation(.easeInOut(duration: 0.3)) {
                        showThankYou = true
                    }
                    try? await Task.sleep(for: .seconds(3))
                    withAnimation(.easeInOut(duration: 0.3)) {
                        showThankYou = false
                        isSubscribed = true
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

    private func checkSubscription() async {
        for await result in Transaction.currentEntitlements {
            if case .verified(let transaction) = result,
               transaction.productID == Self.productID {
                isSubscribed = true
                return
            }
        }
        isSubscribed = false
    }
}
