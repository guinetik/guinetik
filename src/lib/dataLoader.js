/**
 * Data loading utilities with local-first strategy and API fallback.
 * Prioritizes local content for fast FCP/LCP, then hydrates from API.
 * 
 * @module lib/dataLoader
 */

/**
 * Loads site data with local-first strategy.
 * 1. Immediately loads and returns local /site.json (fast FCP/LCP)
 * 2. In parallel, attempts API fetch with timeout
 * 3. If API succeeds, merges/updates data
 * 
 * @param {Object} options - Loading options.
 * @param {string} options.localPath - Path to local JSON file. Default '/site.json'.
 * @param {string} options.apiUrl - API endpoint URL. Default 'https://api.guinetik.com/site/content'.
 * @param {number} options.apiTimeout - Max milliseconds to wait for API. Default 5000.
 * @param {Function} options.onLocalLoaded - Callback when local data loads.
 * @param {Function} options.onApiLoaded - Callback when API data loads.
 * @param {Function} options.onError - Callback for errors.
 * @returns {Promise<Object>} Promise resolving to the site data.
 * 
 * @example
 * const data = await loadSiteDataOptimistic({
 *   onLocalLoaded: (localData) => {
 *     // Render immediately with local data
 *     setState(localData);
 *   },
 *   onApiLoaded: (apiData) => {
 *     // Hydrate with fresh API data
 *     setState(apiData);
 *   }
 * });
 */
export async function loadSiteDataOptimistic(options = {}) {
  const {
    localPath = '/site.json',
    apiUrl = 'https://api.guinetik.com/site/content',
    apiTimeout = 5000,
    onLocalLoaded = null,
    onApiLoaded = null,
    onError = null,
  } = options;

  let localData = null;

  // Load local data immediately (priority)
  try {
    console.log('📦 Loading local site data...');
    const localResponse = await fetch(localPath);
    
    if (localResponse.ok) {
      localData = await localResponse.json();
      console.log('✓ Local site data loaded');
      
      if (onLocalLoaded) {
        onLocalLoaded(localData);
      }
    }
  } catch (error) {
    console.warn('⚠️ Local site data failed:', error.message);
    if (onError) {
      onError(error, 'local');
    }
  }

  // Try API in background with timeout
  try {
    console.log('🌐 Attempting API fetch...');
    const apiData = await fetchWithTimeout(apiUrl, apiTimeout);
    console.log('✓ API data loaded');
    
    if (onApiLoaded) {
      onApiLoaded(apiData);
    }
    
    return apiData; // Return API data if successful
  } catch (error) {
    console.warn('⚠️ API fetch failed or timed out:', error.message);
    if (onError) {
      onError(error, 'api');
    }
  }

  // Fall back to local data if API fails
  if (localData) {
    return localData;
  }

  // If both failed, throw error
  throw new Error('Failed to load site data from both local and API sources');
}

/**
 * Fetches a resource with timeout.
 * 
 * @param {string} url - URL to fetch.
 * @param {number} timeout - Timeout in milliseconds. Default 5000.
 * @returns {Promise<any>} Promise resolving to parsed JSON data.
 * 
 * @example
 * const data = await fetchWithTimeout('https://api.example.com/data', 3000);
 */
export async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeout}ms`);
    }
    
    throw error;
  }
}

/**
 * Preloads critical resources by injecting link tags.
 * 
 * @param {Object[]} resources - Array of resource configurations.
 * @param {string} resources[].href - Resource URL.
 * @param {string} resources[].as - Resource type (script, style, font, fetch, image).
 * @param {string} resources[].type - MIME type (optional).
 * @param {string} resources[].crossorigin - CORS mode (optional).
 * 
 * @example
 * preloadResources([
 *   { href: '/hero.webp', as: 'image', type: 'image/webp' },
 *   { href: '/api/data', as: 'fetch', crossorigin: 'anonymous' }
 * ]);
 */
export function preloadResources(resources) {
  resources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    
    if (resource.type) {
      link.type = resource.type;
    }
    
    if (resource.crossorigin) {
      link.crossOrigin = resource.crossorigin;
    }
    
    document.head.appendChild(link);
  });
}

/**
 * Adds preconnect links for external domains to reduce DNS/TLS latency.
 * 
 * @param {string[]} domains - Array of domain URLs to preconnect.
 * 
 * @example
 * preconnectDomains([
 *   'https://api.example.com',
 *   'https://cdn.example.com'
 * ]);
 */
export function preconnectDomains(domains) {
  domains.forEach((domain) => {
    // Preconnect (full connection)
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = domain;
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);

    // DNS-prefetch (fallback for older browsers)
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = domain;
    document.head.appendChild(dnsPrefetch);
  });
}

