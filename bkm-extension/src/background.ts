chrome.runtime.onInstalled.addListener(() => {
  chrome.webNavigation.onCompleted.addListener(
    () => {
      chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
        chrome.pageAction.show(id);
        chrome.tabs.executeScript(id, { file: 'content.js' }, function () {
          // Note: we also sent a message above, upon loading the event page,
          // but the content script will not be loaded at that point, so we send
          // another here.
          // sendMessage();
        });
        // chrome.bookmarks.getTree((results) => {});
      });
    },
    { url: [{ urlMatches: '<all_urls>' }] },
  );
  chrome.runtime.onMessage.addListener(notify);

  function notify(message) {
    console.log(message);
    debugger;
    // chrome.notifications.create({
    //   type: 'basic',
    //   iconUrl: chrome.extension.getURL('link.png'),
    //   title: 'You clicked a link!',
    //   message: message,
    // });
  }
});
