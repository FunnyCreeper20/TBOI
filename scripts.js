document.addEventListener('DOMContentLoaded', function() {
  // Disable auto-focus on keydown when a key is typed
  var originalKeydownHandler = null;
  setTimeout(function() {
    var eventListeners = getEventListeners(document);
    if (eventListeners && eventListeners.keydown) {
      eventListeners.keydown.forEach(function(listener) {
        if (listener.listener.toString().includes('.search-input')) {
          document.removeEventListener('keydown', listener.listener);
        }
      });
    }
  }, 500);
  
  // Alternative: Override by preventing the auto-focus after it happens
  document.addEventListener('keydown', function(e) {
    if (document.activeElement !== document.querySelector('.search-input')) {
      e.stopImmediatePropagation();
    }
  }, true);
});
