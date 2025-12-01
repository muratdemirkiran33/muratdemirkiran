import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'TR';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    EN: {
        'banner.description.intro': "Hi! I'm ",
        'banner.description.name': 'Murat',
        'banner.description.text': '. A creative Frontend Developer with 3+ years of experience in building high-performance, scalable, and responsive web solutions.',
    },
    TR: {
        'banner.description.intro': 'Merhaba! Ben ',
        'banner.description.name': 'Murat',
        'banner.description.text': '. Yüksek performanslı, ölçeklenebilir ve duyarlı web çözümleri oluşturmada 3+ yıllık deneyime sahip yaratıcı bir Frontend Developer\'ım.',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('EN');

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.EN] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
