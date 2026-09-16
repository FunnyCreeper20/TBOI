document.addEventListener('DOMContentLoaded', function() {
  // Keep gameplay keys from being intercepted by the search field.
  document.addEventListener('keydown', function(e) {
    if (document.activeElement !== document.querySelector('.search-input')) {
      e.stopImmediatePropagation();
    }
  }, true);
});
