import React from 'react';
import { GENERAL_INFO } from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">{t('footer.cta')}</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="relative text-2xl sm:text-4xl font-anton inline-block mt-5 mb-10 transition-all duration-500 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent hover:bg-left before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-primary before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-700"
                >
                    {GENERAL_INFO.email}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
