(function () {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  function insertBeast(beastURL) {
    let content = document.createElement('p');
    content.text = 'HELLLOOOOO';
    content.className = 'beastify-image';
    document.body.appendChild(content);
  }
  window.hasRun = true;
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === 'test') {
      insertBeast();
      sendResponse('HELLOOOOOOO');
    }
  });
})();
