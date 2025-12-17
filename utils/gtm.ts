import { getLocalStorage } from '@/utils/localStorage';

/**
 * Google Tag Manager utility functions
 * Loads GTM script and noscript iframe after user consent
 */

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const GTM_ID = 'GTM-TZBZ6HQP';

/**
 * Predefined GTM event names
 */
export const GTM_EVENTS = {
  // Page events
  PAGE_VIEW: 'page_view',
  PAGE_LOAD: 'page_load',

  // User interaction events
  BUTTON_CLICK: 'button_click',
  LINK_CLICK: 'link_click',
  FORM_SUBMIT: 'form_submit',
  FORM_START: 'form_start',
} as const;

export type GTMEventName = (typeof GTM_EVENTS)[keyof typeof GTM_EVENTS];

/**
 * Interface for GTM event parameters
 */
export interface GTMEventParams {
  [key: string]: unknown;
}

/**
 * Checks if user has consented to cookies
 */
export function hasCookieConsent(): boolean {
  if (typeof window === 'undefined') return false;

  return getLocalStorage('cookiePolicyAccepted') === 'true';
}

/**
 * Push custom event to GTM dataLayer
 * @param eventName - The event name from GTM_EVENTS
 * @param parameters - Additional event parameters
 * @param force - Force push event even without consent (for debugging)
 */
export function gtmEvent(
  eventName: GTMEventName,
  parameters: GTMEventParams = {}
): void {
  if (!hasCookieConsent() || !window.dataLayer) return;

  const eventData = {
    event: eventName,
    ...parameters,
  };

  window.dataLayer.push(eventData);
}

/**
 * Loads Google Tag Manager script dynamically
 */
export function loadGTMScript(): void {
  if (typeof window === 'undefined') return;
  if (window.dataLayer) return;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];

  // Push GTM start event
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  // Create and append script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

/**
 * Loads Google Tag Manager noscript iframe
 */
export function loadGTMNoScript(): void {
  if (typeof window === 'undefined') return;

  // Check if noscript already exists
  if (document.querySelector(`iframe[src*="gtm.js?id=${GTM_ID}"]`)) return;

  // Create noscript element
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';

  noscript.appendChild(iframe);

  // Insert after body begins
  const { body } = document;
  if (body.firstChild) {
    body.insertBefore(noscript, body.firstChild);
  } else {
    body.appendChild(noscript);
  }
}

/**
 * Loads both GTM script and noscript
 */
export function loadGTM(): void {
  loadGTMScript();
  loadGTMNoScript();
}
