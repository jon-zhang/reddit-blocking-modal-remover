document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

async function fireContentLoadedEvent() {
    let loader = document.querySelector('[bundlename="desktop_rpl_nsfw_blocking_modal"]');
    console.log('loader', loader);

    if (loader) {
        loader.remove();
    }

    let prompts = document.querySelectorAll('xpromo-nsfw-blocking-container');

    if (prompts.length) {
        console.log('prompt', prompts)
        prompts.forEach(p => {
            const promptRoot = p.shadowRoot;
            
            if (promptRoot) {
                promptRootDiv = promptRoot.querySelector('.prompt');
    
                if (promptRootDiv) promptRootDiv.remove();
            }
        })
    }
    
    
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // listen for messages sent from background.js
      if (request.message === 'hello!') {
          
          const regex = /https?:\/\/.*reddit\.com\/.*/;
          if (regex.test(request.url)) {
            console.log(request.url) // new url is now in content scripts!
            // triggers a reload which allows DOM to be reloaded
            window.location.reload();
        };
      }
  });