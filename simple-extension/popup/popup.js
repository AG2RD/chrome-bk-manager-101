var sendMessageElement = document.querySelector('.btn-send-message');
console.log('popupjs', sendMessageElement);

sendMessageElement.onclick = function (event) {
  sendMessage();
};
function sendMessage() {
  console.log('sendMEssage trigger');
  chrome.runtime.sendMessage({ command: 'test' }, function (response) {
    console.log(`message from background: ${JSON.stringify(response)}`);
  });
  chrome.tabs.query({ active: true, currentWindow: true }, function ([{ id }]) {
    chrome.tabs.sendMessage(id, { command: 'test2' }, function (response) {
      console.log('popup to content', response);
    });
  });
}
