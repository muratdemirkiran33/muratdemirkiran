import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-LGR2KRNLE7';

const AnalyticsTracker = () => {
    const location = useLocation();

    useEffect(() => {
        if (!import.meta.env.PROD) return;
        if (typeof window === 'undefined') return;
        if (typeof window.gtag !== 'function') return;

        const pagePath = `${location.pathname}${location.search}${location.hash}`;

        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: pagePath,
            page_location: window.location.href,
            page_title: document.title,
            send_page_view: false,
        });

        window.gtag('event', 'page_view', {
            page_path: pagePath,
            page_location: window.location.href,
            page_title: document.title,
        });
    }, [location]);

    return null;
};

export default AnalyticsTracker;
