// function that injects code to a specific tab
function injectScript(tabId) {

    chrome.scripting.executeScript(
        {
            target: {tabId: tabId},
            files: ['content.js'],
        }
    );

}

// adds a listener to tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // check for a URL in the changeInfo parameter (url is only added when it is changed)
    if (changeInfo.url) {
        chrome.tabs.sendMessage( tabId, {
            message: 'hello!',
            url: changeInfo.url
        })
        
        // calls the inject function
        // injectScript(tabId);

    }
});

