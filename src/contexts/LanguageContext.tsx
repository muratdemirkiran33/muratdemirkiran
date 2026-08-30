import { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    EN: {
        'banner.title.line1': 'FULL-STACK',
        'banner.title.line2': 'DEVELOPER',
        'banner.description.intro': "Hi! I'm ",
        'banner.description.name': 'Murat',
        'banner.description.text': '. A creative Full-Stack Developer with 7+ years of experience in building high-performance, scalable, and responsive web solutions.',
        'banner.cta': 'HIRE ME',
        'banner.stats.experience': 'Years of Experience',
        'banner.stats.projects': 'Completed Projects',
        'banner.stats.hours': 'Hours Worked',
        'about.quote': 'I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.',
        'about.label': 'This is me.',
        'about.greeting': "Hi, I'm Murat.",
        'about.body.1': "I'm a full-stack web developer dedicated to turning ideas into creative solutions. I specialize in building seamless, scalable, and intuitive digital experiences.",
        'about.body.2': 'My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.',
        'section.stack': 'MY STACK',
        'section.experience': 'MY EXPERIENCE',
        'section.projects': 'SELECTED PROJECTS',
        'stack.category.frontend': 'FRONTEND',
        'stack.category.backend': 'BACKEND',
        'stack.category.database': 'DATABASE',
        'stack.category.tools': 'TOOLS',
        'nav.social': 'SOCIAL',
        'nav.menu': 'MENU',
        'nav.getInTouch': 'GET IN TOUCH',
        'nav.link.home': 'Home',
        'nav.link.about': 'About Me',
        'nav.link.experience': 'Experience',
        'nav.link.projects': 'Projects',
        'nav.aria.theme': 'Toggle Theme',
        'nav.aria.language': 'Change Language',
        'footer.cta': 'Have a project in mind?',
        'project.back': 'Back',
        'project.year': 'Year',
        'project.tech': 'Tech & Technique',
        'project.description': 'Description',
        'project.role': 'My Role',
    },
    TR: {
        'banner.title.line1': 'FULL-STACK',
        'banner.title.line2': 'DEVELOPER',
        'banner.description.intro': 'Merhaba, ben ',
        'banner.description.name': 'Murat',
        'banner.description.text': '. Tasarım, frontend ve backend yetkinliklerimi bir araya getirerek ihtiyaçlara uygun, uçtan uca web çözümleri sunan bir web geliştiricisiyim.',
        'banner.cta': 'İLETİŞİME GEÇ',
        'banner.stats.experience': 'Yıllık Deneyim',
        'banner.stats.projects': 'Tamamlanan Proje',
        'banner.stats.hours': 'Çalışma Saati',
        'about.quote': 'Kullanıcı odaklı bir tasarım yaklaşımına inanıyorum ve üzerinde çalıştığım her projenin kullanıcılarının özel ihtiyaçlarına göre şekillenmesini önemsiyorum.',
        'about.label': 'Hakkımda',
        'about.greeting': 'Merhaba, ben Murat.',
        'about.body.1': 'Fikirleri yaratıcı çözümlere dönüştürmeye odaklanan bir full-stack web geliştiricisiyim. Akıcı, ölçeklenebilir ve sezgisel dijital deneyimler oluşturma konusunda uzmanlaşıyorum.',
        'about.body.2': 'Yaklaşımım, hem kullanıcı ihtiyaçlarına hem de iş hedeflerine uygun ölçeklenebilir ve yüksek performanslı çözümler üretmeye dayanıyor. Performans, erişilebilirlik ve duyarlılığı önceliklendirerek, yalnızca kullanıcıların ilgisini çeken değil aynı zamanda somut sonuçlar da üreten deneyimler sunmayı hedefliyorum.',
        'section.stack': 'TEKNOLOJİ STACK\'İM',
        'section.experience': 'DENEYİMLERİM',
        'section.projects': 'SEÇİLİ PROJELER',
        'stack.category.frontend': 'FRONTEND',
        'stack.category.backend': 'BACKEND',
        'stack.category.database': 'VERİTABANI',
        'stack.category.tools': 'ARAÇLAR',
        'nav.social': 'SOSYAL',
        'nav.menu': 'MENÜ',
        'nav.getInTouch': 'İLETİŞİME GEÇ',
        'nav.link.home': 'Anasayfa',
        'nav.link.about': 'Hakkımda',
        'nav.link.experience': 'Deneyim',
        'nav.link.projects': 'Projeler',
        'nav.aria.theme': 'Temayı Değiştir',
        'nav.aria.language': 'Dili Değiştir',
        'footer.cta': 'Aklında bir proje mi var?',
        'project.back': 'Geri',
        'project.year': 'Yıl',
        'project.tech': 'Teknoloji ve Teknik',
        'project.description': 'Açıklama',
        'project.role': 'Rolüm',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('TR');

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
