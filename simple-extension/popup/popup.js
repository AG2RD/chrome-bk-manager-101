var sendMessageElement = document.querySelector('.btn-send-message');
console.log('popupjs', sendMessageElement);
var port;

sendMessageElement.onclick = function (event) {
  sendMessage();
};
function sendMessage() {
  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   port = chrome.tabs.connect(tabs[0].id, { name: 'hope' });
  //   port.onDisconnect.addListener((obj) => {
  //     console.log('disconnected port');
  //   });
  //   port.postMessage({ command: 'test' });
  //   port.onMessage.addListener(function (response) {
  //     console.log('response intercepted', response);
  //   });
  // });
  chrome.runtime.sendMessage({ command: 'test' }, function (response) {
    console.log(`message from background: ${JSON.stringify(response)}`);
  });
}
