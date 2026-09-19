import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import MetaApplyPage from './pages/MetaApplyPage';
import GoogleApplyPage from './pages/GoogleApplyPage';

export default function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Check UTM parameters for smart ad routing
    const params = new URLSearchParams(window.location.search);
    const utmSource = (params.get('utm_source') || '').toLowerCase();

    // Determine which page to render
    const path = currentPath.toLowerCase();

    if (path.includes('meta-apply') || path.includes('meta') || utmSource.includes('meta') || utmSource.includes('facebook') || utmSource.includes('ig')) {
        return <MetaApplyPage />;
    }

    if (path.includes('google-apply') || path.includes('google') || utmSource.includes('google') || utmSource.includes('adwords')) {
        return <GoogleApplyPage />;
    }

    if (path.includes('apply')) {
        // Fallback for /apply or /apply.html: default to high-converting inline landing page
        return <MetaApplyPage />;
    }

    // Default: Organic brochure website with modal
    return <HomePage />;
}
