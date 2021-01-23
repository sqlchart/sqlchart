/* jslint utility2:true */
/*global chrome*/
chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({
        url: chrome.runtime.getURL("spa.sqlchart.html")
    });
});
