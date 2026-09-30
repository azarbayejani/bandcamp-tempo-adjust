// The App Store only allows tips through in-app purchase, so the Safari build
// sends people to the containing app's tip jar instead of Buy Me a Coffee.
// The scheme is registered in the app's Info.plist. Safari copy says "tip",
// not "donate": App Store review reserves donations for nonprofits.
export const TIP_JAR_URL = 'tempoadjust://tip';

export const DONATE_URL = 'https://buymeacoffee.com/miseryconfusion';
