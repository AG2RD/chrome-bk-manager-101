chrome.runtime.onInstalled.addListener(() => {
  chrome.webNavigation.onCompleted.addListener(
    () => {
      chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
        chrome.pageAction.show(id);
        chrome.bookmarks.getTree((results) => {});
      });
    },
    { url: [{ urlMatches: 'google.be' }] },
  );
});
