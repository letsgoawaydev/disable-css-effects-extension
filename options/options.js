// Saves options to chrome.storage
const saveOptions = () => {
    const disableCSSGPUIntensiveEffects = document.getElementById('disableCSSGPUIntensiveEffects').checked;
    const disableCSSAnims = document.getElementById('disableCSSAnims').checked;

    chrome.storage.sync.set(
        { disableCSSGPUIntensiveEffects: disableCSSGPUIntensiveEffects, disableCSSAnims: disableCSSAnims },
        () => {
            // Update status to let user know options were saved.
            const status = document.getElementById('status');
            status.textContent = 'Options saved. Options will apply on page reload.';
            setTimeout(() => {
                status.textContent = '';
            }, 1500);
        }
    );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
    chrome.storage.sync.get(
        { disableCSSGPUIntensiveEffects: true, disableCSSAnims: true },
        (items) => {
            document.getElementById('disableCSSGPUIntensiveEffects').checked = items.disableCSSGPUIntensiveEffects;
            document.getElementById('disableCSSAnims').checked = items.disableCSSAnims;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);