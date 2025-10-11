// Suppress React DevTools semver error with React 19
(function() {
  'use strict';

  // Store original methods
  const originalError = console.error;
  const originalWarn = console.warn;

  // Override console.error
  console.error = function(...args) {
    const firstArg = args[0];

    // Check if it's an Error object
    if (firstArg instanceof Error) {
      const message = firstArg.message || '';
      const stack = firstArg.stack || '';

      // Suppress React DevTools semver error
      if (
        message.includes('not valid semver') ||
        message.includes('Invalid argument') ||
        stack.includes('validateAndParse') ||
        stack.includes('react_devtools_backend') ||
        stack.includes('chrome-extension')
      ) {
        return;
      }
    }

    // Check if it's a string
    if (typeof firstArg === 'string') {
      if (
        firstArg.includes('not valid semver') ||
        firstArg.includes('Invalid argument') ||
        firstArg.includes('validateAndParse') ||
        firstArg.includes('activateBackend') ||
        firstArg.includes('react_devtools_backend') ||
        firstArg.includes('chrome-extension')
      ) {
        return;
      }
    }

    // Call original for all other errors
    originalError.apply(console, args);
  };

  // Also override window.onerror to catch uncaught errors
  const originalOnError = window.onerror;
  window.onerror = function(message, source, lineno, colno, error) {
    // Suppress React DevTools errors
    if (
      (typeof message === 'string' &&
       (message.includes('not valid semver') ||
        message.includes('Invalid argument'))) ||
      (typeof source === 'string' &&
       (source.includes('react_devtools_backend') ||
        source.includes('chrome-extension')))
    ) {
      return true; // Prevent default error handling
    }

    // Call original handler
    if (originalOnError) {
      return originalOnError.apply(this, arguments);
    }
    return false;
  };

  // Disable React DevTools by removing the hook
  if (typeof window !== 'undefined') {
    Object.defineProperty(window, '__REACT_DEVTOOLS_GLOBAL_HOOK__', {
      get: function() {
        return {
          supportsFiber: true,
          inject: function() {},
          onCommitFiberRoot: function() {},
          onCommitFiberUnmount: function() {},
          renderers: new Map(),
        };
      },
      configurable: false,
    });
  }
})();
