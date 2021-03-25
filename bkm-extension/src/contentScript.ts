chrome.runtime.onMessage.addListener(function (message, callback) {
  if (message == 'test') {
    debugger;
  }
});
