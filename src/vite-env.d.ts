/// <reference types="vite/client" />

interface Window {
    dataLayer: unknown[];
    gtag?: (
        command: 'js' | 'config' | 'event',
        targetOrDate: string | Date,
        params?: Record<string, unknown>,
    ) => void;
}
