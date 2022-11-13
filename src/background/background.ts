chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    console.log("URL HAS CHAGNEDEEEEEED");
    chrome.scripting.executeScript({
      files: ["contentScript.js"],
      target: { tabId: tab.id },
    });
  }
});
