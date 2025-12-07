/**
 * Google Analytics 4 tracking utilities.
 * Provides functions for tracking virtual pageviews and custom events.
 */

// GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-WT7NJPET7R';

/**
 * Safely call gtag if available
 */
const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

/**
 * Track a virtual pageview for SPA hash navigation.
 * GA4 doesn't automatically track hash changes, so we send them manually.
 *
 * @param {string} path - The hash path (e.g., '#about', '#projects')
 * @param {string} title - Optional page title
 */
export const trackPageView = (path, title = null) => {
  const pagePath = path.startsWith('#') ? `/${path.slice(1)}` : path;
  const pageTitle = title || `Guinetik :: ${path.replace('#', '').charAt(0).toUpperCase() + path.slice(2)}`;

  gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.origin + pagePath
  });

  console.log('📊 Tracked pageview:', pagePath);
};

/**
 * Track when a user launches/clicks a project card.
 *
 * @param {Object} card - The card data object
 * @param {string} card.title - Card title
 * @param {string} card.link - Card destination URL
 * @param {string} section - Which section the card is in (projects, demos, repos)
 */
export const trackCardLaunch = (card, section = 'unknown') => {
  gtag('event', 'card_launch', {
    event_category: 'engagement',
    event_label: card.title,
    card_title: card.title,
    card_link: card.link,
    card_section: section
  });

  console.log('📊 Tracked card launch:', card.title, 'from', section);
};

/**
 * Track external link clicks (social links, tech tags, etc.)
 *
 * @param {string} label - Description of the link
 * @param {string} url - The destination URL
 */
export const trackExternalLink = (label, url) => {
  gtag('event', 'click', {
    event_category: 'outbound',
    event_label: label,
    link_url: url
  });
};

/**
 * Track theme changes
 *
 * @param {string} theme - The new theme name
 */
export const trackThemeChange = (theme) => {
  gtag('event', 'theme_change', {
    event_category: 'preferences',
    theme_name: theme
  });
};

export default {
  trackPageView,
  trackCardLaunch,
  trackExternalLink,
  trackThemeChange
};
