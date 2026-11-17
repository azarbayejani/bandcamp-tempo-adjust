// The App Store only allows tips through in-app purchase, so the Safari build
// sends people to the containing app's tip jar instead of Buy Me a Coffee.
// The scheme is registered in the app's Info.plist. Safari copy says "tip",
// not "donate": App Store review reserves donations for nonprofits.
// Xcode's Debug builds are a separate dev app with its own scheme, passed in
// by safari/scripts/build-web-extension.sh.
export const TIP_JAR_URL = `${
  import.meta.env.WXT_TIP_JAR_SCHEME || 'tempoadjust'
}://tip`;

export const DONATE_URL = 'https://buymeacoffee.com/miseryconfusion';
