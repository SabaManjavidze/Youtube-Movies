import { EXTENSION_BANG_MAP } from "../constants";

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  const bang = tab.url.split("=")[1].split("+")[0];
  if (EXTENSION_BANG_MAP[bang] && changeInfo.status === "complete") {
    if (tab.url.includes("youtube.com") && EXTENSION_BANG_MAP[bang]) {
      chrome.scripting.executeScript({
        files: ["contentScript.js"],
        target: { tabId: tab.id },
      });
    }
  }
});
