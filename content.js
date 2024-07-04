document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent() {
    let loader = document.querySelector('[bundlename="desktop_rpl_nsfw_blocking_modal"]');

    if (loader) {
        console.log(loader);
        loader.remove();
    }
    
    let prompt = document.querySelector('xpromo-nsfw-blocking-container');

    if (prompt) {
        const promptRoot = prompt.shadowRoot.querySelector('.prompt');

        promptRoot.remove();
    }
}