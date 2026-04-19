import { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    EN: {
        'banner.title.line1': 'FRONTEND',
        'banner.title.line2': 'DEVELOPER',
        'banner.description.intro': "Hi! I'm ",
        'banner.description.name': 'Murat',
        'banner.description.text': '. A creative Frontend Developer with 3+ years of experience in building high-performance, scalable, and responsive web solutions.',
        'banner.cta': 'HIRE ME',
        'banner.stats.experience': 'Years of Experience',
        'banner.stats.projects': 'Completed Projects',
        'banner.stats.hours': 'Hours Worked',
        'about.quote': 'I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.',
        'about.label': 'This is me.',
        'about.greeting': "Hi, I'm Murat.",
        'about.body.1': "I'm a frontend web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.",
        'about.body.2': 'My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.',
        'section.stack': 'My Stack',
        'section.experience': 'My Experience',
        'section.projects': 'Selected Projects',
        'stack.category.frontend': 'Frontend',
        'stack.category.backend': 'Backend',
        'stack.category.database': 'Database',
        'stack.category.tools': 'Tools',
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
        'banner.title.line1': 'FRONTEND',
        'banner.title.line2': 'DEVELOPER',
        'banner.description.intro': 'Merhaba! Ben ',
        'banner.description.name': 'Murat',
        'banner.description.text': '. Yüksek performanslı, ölçeklenebilir ve duyarlı web çözümleri oluşturmada 3+ yıllık deneyime sahip yaratıcı bir Frontend Developer\'ım.',
        'banner.cta': 'İLETİŞİME GEÇ',
        'banner.stats.experience': 'Yıllık Deneyim',
        'banner.stats.projects': 'Tamamlanan Proje',
        'banner.stats.hours': 'Çalışma Saati',
        'about.quote': 'Kullanıcı odaklı bir tasarım yaklaşımına inanıyorum ve üzerinde çalıştığım her projenin kullanıcılarının özel ihtiyaçlarına göre şekillenmesini önemsiyorum.',
        'about.label': 'Bu benim.',
        'about.greeting': 'Merhaba, ben Murat.',
        'about.body.1': 'Fikirleri yaratıcı çözümlere dönüştürmeye odaklanan bir frontend web geliştiricisiyim. Akıcı ve sezgisel kullanıcı deneyimleri oluşturma konusunda uzmanlaşıyorum.',
        'about.body.2': 'Yaklaşımım, hem kullanıcı ihtiyaçlarına hem de iş hedeflerine uygun ölçeklenebilir ve yüksek performanslı çözümler üretmeye dayanıyor. Performans, erişilebilirlik ve duyarlılığı önceliklendirerek, yalnızca kullanıcıların ilgisini çeken değil aynı zamanda somut sonuçlar da üreten deneyimler sunmayı hedefliyorum.',
        'section.stack': 'Teknoloji Stack\'im',
        'section.experience': 'Deneyimlerim',
        'section.projects': 'Seçili Projeler',
        'stack.category.frontend': 'Frontend',
        'stack.category.backend': 'Backend',
        'stack.category.database': 'Veritabanı',
        'stack.category.tools': 'Araçlar',
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
