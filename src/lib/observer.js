/**
 * IntersectionObserver utilities for performance-optimized viewport detection.
 * These utilities replace scroll event listeners with the more efficient IntersectionObserver API.
 * 
 * @module lib/observer
 */

/**
 * Creates an IntersectionObserver for lazy-loading or triggering actions when elements enter viewport.
 * 
 * @param {Function} callback - Function to call when intersection occurs. Receives IntersectionObserverEntry.
 * @param {Object} options - IntersectionObserver options.
 * @param {Element|null} options.root - The element used as the viewport. Defaults to browser viewport.
 * @param {string} options.rootMargin - Margin around root. Can be negative to trigger earlier/later. Default '0px'.
 * @param {number|number[]} options.threshold - Percentage of target visibility to trigger callback. 0-1. Default 0.
 * @returns {IntersectionObserver} The created observer instance.
 * 
 * @example
 * const observer = createObserver((entry) => {
 *   if (entry.isIntersecting) {
 *     console.log('Element is visible!');
 *   }
 * }, { threshold: 0.5 });
 * observer.observe(document.getElementById('my-element'));
 */
export function createObserver(callback, options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
    ...options
  };

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry);
    });
  }, defaultOptions);
}

/**
 * Creates an observer for navigation active link tracking.
 * Watches multiple sections and calls callback with the ID of the most visible section.
 * 
 * @param {string[]} sectionIds - Array of section IDs to observe.
 * @param {Function} callback - Function to call with the active section ID.
 * @param {Object} options - Observer options.
 * @param {string} options.rootMargin - Margin offset. Use negative top margin to trigger when section is near top of viewport.
 * @param {number} options.threshold - Visibility threshold (0-1).
 * @returns {IntersectionObserver} The created observer instance.
 * 
 * @example
 * const navObserver = createNavigationObserver(
 *   ['home', 'about', 'projects'],
 *   (activeId) => setActiveLink(activeId),
 *   { rootMargin: '-100px 0px -80% 0px' }
 * );
 */
export function createNavigationObserver(sectionIds, callback, options = {}) {
  const defaultOptions = {
    rootMargin: '-100px 0px -80% 0px',
    threshold: 0,
    ...options
  };

  // Track which sections are currently intersecting
  const intersectingMap = new Map();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.id;
      
      if (entry.isIntersecting) {
        intersectingMap.set(sectionId, entry.intersectionRatio);
      } else {
        intersectingMap.delete(sectionId);
      }
    });

    // Find the section with highest intersection ratio
    if (intersectingMap.size > 0) {
      let maxRatio = 0;
      let activeId = null;
      
      intersectingMap.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          activeId = id;
        }
      });

      if (activeId) {
        callback(activeId);
      }
    }
  }, defaultOptions);

  // Observe all sections
  sectionIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }
  });

  return observer;
}

/**
 * Creates an observer for lazy-loading content when it approaches viewport.
 * Automatically unobserves after first intersection to prevent re-triggering.
 * 
 * @param {Function} loadCallback - Function to call when element should be loaded.
 * @param {Object} options - Observer options.
 * @param {string} options.rootMargin - Margin to trigger loading before element is visible. Default '200px'.
 * @returns {IntersectionObserver} The created observer instance.
 * 
 * @example
 * const lazyLoader = createLazyLoadObserver(() => {
 *   import('./HeavyComponent').then(module => {
 *     // Mount heavy component
 *   });
 * }, { rootMargin: '400px' });
 * lazyLoader.observe(placeholderElement);
 */
export function createLazyLoadObserver(loadCallback, options = {}) {
  const defaultOptions = {
    rootMargin: '200px',
    threshold: 0,
    ...options
  };

  return new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadCallback(entry.target);
        observer.unobserve(entry.target); // Only load once
      }
    });
  }, defaultOptions);
}

/**
 * Creates an observer that triggers callback when element enters viewport,
 * then auto-disconnects. Useful for one-time auto-play or initialization.
 * 
 * @param {Element} element - Element to observe.
 * @param {Function} callback - Function to call when element becomes visible.
 * @param {Object} options - Observer options.
 * @returns {IntersectionObserver} The created observer instance.
 * 
 * @example
 * observeOnce(iframeContainer, () => {
 *   // Auto-inject iframe when container is visible
 *   injectIframe(iframeContainer);
 * });
 */
export function observeOnce(element, callback, options = {}) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target);
        obs.disconnect();
      }
    });
  }, options);

  observer.observe(element);
  return observer;
}

