function show(enabled, useSettingsInsteadOfPreferences) {
    if (useSettingsInsteadOfPreferences) {
        document.body.classList.add('use-settings');
    }

    if (typeof enabled === "boolean") {
        document.body.classList.toggle(`state-on`, enabled);
        document.body.classList.toggle(`state-off`, !enabled);
    } else {
        document.body.classList.remove(`state-on`);
        document.body.classList.remove(`state-off`);
    }
}

function openPreferences(event) {
    event.preventDefault();
    webkit.messageHandlers.controller.postMessage({ "action": "open-safari-preferences" });
}

function openExtensionSettings(event) {
    event.preventDefault();
    webkit.messageHandlers.controller.postMessage({ "action": "open-extension-settings" });
    return false;
}

function openPageInSafari(event) {
    event.preventDefault();
    webkit.messageHandlers.controller.postMessage({ "action": "open-page-in-safari", "url": event.target.href });
    return false;
}

document.querySelector("button.open-preferences").addEventListener("click", openPreferences);

document.querySelector(".open-extension-settings").addEventListener("click", openExtensionSettings);

document.querySelectorAll(".open-page-in-safari").forEach((el) => el.addEventListener("click", openPageInSafari))
