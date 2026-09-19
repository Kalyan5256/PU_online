// ============================================================
//  CENTRALIZED TRACKING SERVICE (META PIXEL & GOOGLE ADS)
// ============================================================

// Replace these placeholders with your actual tracking IDs:
export const META_PIXEL_ID = 'YOUR_META_PIXEL_ID';
export const GOOGLE_ADS_ID = 'AW-YOUR_CONVERSION_ID';
export const GOOGLE_CONVERSION_LABEL = 'YOUR_LABEL';

/**
 * Initialize Meta Pixel dynamically
 */
export function initMetaPixel(pixelId = META_PIXEL_ID) {
    if (typeof window === 'undefined' || window.fbq) return;
    
    /* eslint-disable */
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */

    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
}

/**
 * Track Meta Lead Event upon form submission
 */
export function trackMetaLead(course, status) {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
            content_name: course,
            content_category: 'Online Degree Application',
            status: status
        });
    }
}

/**
 * Initialize Google Tag (gtag.js) dynamically
 */
export function initGoogleTag(conversionId = GOOGLE_ADS_ID) {
    if (typeof window === 'undefined') return;

    if (!document.getElementById('google-gtag-script')) {
        const script = document.createElement('script');
        script.id = 'google-gtag-script';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){ window.dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', conversionId);
    }
}

/**
 * Track Google Ads Conversion upon form submission
 */
export function trackGoogleConversion(conversionId = GOOGLE_ADS_ID, label = GOOGLE_CONVERSION_LABEL) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': `${conversionId}/${label}`,
            'value': 1.0,
            'currency': 'INR'
        });
    }
}

/**
 * Determine lead source based on URL parameters or fallback
 */
export function detectLeadSource(defaultSource = 'Website Organic') {
    if (typeof window === 'undefined') return defaultSource;
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source');
    
    if (utmSource) {
        if (utmSource.toLowerCase().includes('meta') || utmSource.toLowerCase().includes('facebook') || utmSource.toLowerCase().includes('fb') || utmSource.toLowerCase().includes('ig')) {
            return 'Meta Ads Campaign';
        }
        if (utmSource.toLowerCase().includes('google') || utmSource.toLowerCase().includes('adwords') || utmSource.toLowerCase().includes('gads')) {
            return 'Google Ads Campaign';
        }
        return `Campaign: ${utmSource}`;
    }

    return defaultSource;
}
