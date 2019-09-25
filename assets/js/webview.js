window.onresize = doLayout;

onload = function() {
  var webview = document.querySelector('webview');
  doLayout();

  // Test for the presence of the experimental <webview> zoom and find APIs.
  if (typeof(webview.setZoom) == "function" &&
      typeof(webview.find) == "function") {
  }

  webview.addEventListener('console-message', function(e) {
    console.log('Guest page logged a message:', e.message);
  });
};

function doLayout() {
  var webview = document.querySelector('webview');
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;

  var controlsHeight = getControlsHeight();

  var webviewWidth = windowWidth;
  var webviewHeight = windowHeight - controlsHeight;

  webview.style.width = webviewWidth + 'px';
  webview.style.height = webviewHeight + 'px';
}
