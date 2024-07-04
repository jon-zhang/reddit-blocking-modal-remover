document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent() {
    let loader = document.querySelector('[bundlename="desktop_rpl_nsfw_blocking_modal"]')

    if (loader) {
        console.log(loader);
        loader.remove();
    }
    
}