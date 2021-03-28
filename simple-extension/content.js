// (function () {
/**
 * Check and set a global guard variable.
 * If this content script is injected into the same page again,
 * it will do nothing next time.
 */
// if (window.hasRun) {
//   return;
// }

// alert('content script');
console.log('content_script');
chrome.runtime.onMessage.addListener((message, sender, sendReponse) => {
  console.log('message from popup', message);
  sendReponse('hellow');
});
// window.hasRun = true;
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   alert('content script', message);
//   if (message.command === 'test2') {
//     // insertBeast();

//     sendResponse('HELLOOOOOOO');
//   }
// });
// })();
