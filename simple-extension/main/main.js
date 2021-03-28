(function () {
  console.log('init');
  const btn = document.querySelector('.btn');
  btn.onclick = function (e) {
    // sendMessageTabs();
    getParseTreeNode();
  };
})();

sendMessageTabs = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function ([{ id }]) {
    console.log('main.js try to send a message', id);
    chrome.runtime.sendMessage({ command: 'test' }, function (response) {
      console.log('response', response);
    });
  });
};

getParseTreeNode = function () {
  chrome.bookmarks.getTree((tree) => {
    console.log('tree', tree);
    const elem = document.querySelector('.target');
    console.log('elem', elem);
    elem.innerHTML = tree[0].children[0].title;
  });
};
