const btn = document.querySelector('.btn');
var port;

(function () {
  console.log('init');
  // chrome.tabs.query({ active: true, currentWindow: true }, function ([{ id }]) {
  //   port = chrome.tabs.connect(tabs[0].id, { name: 'hope' });
  // });
})();
btn.onclick = function (e) {
  // sendMessage();
  sendMessageTabs();
};

// sendMessage = function () {
//   port.onDisconnect.addListener((obj) => {
//     console.log('disconnected port');
//   });
//   port.postMessage({ command: 'test' });
//   port.onMessage.addListener(function (response) {
//     console.log('response intercepted', response);
//   });
// };

sendMessageTabs = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function ([{ id }]) {
    console.log('main.js try to send a message', id);
    chrome.runtime.sendMessage({ command: 'test' }, function (response) {
      console.log('response', response);
    });
  });
};
