import { IExperience, IProject, Language } from '@/types';
import { projectAssets, stackIcons } from '@/lib/siteAssets';

export const GENERAL_INFO = {
    email: 'murat@muratdemirkiran.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Murat, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/Murat',
};

export const SOCIAL_LINKS = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/muratdemirkiran' },
    { name: 'github', url: 'https://github.com/muratdemirkiran33' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: stackIcons.javascript,
        },
        {
            name: 'TypeScript',
            icon: stackIcons.typescript,
        },
        {
            name: 'React',
            icon: stackIcons.react,
        },
        {
            name: 'Next.js',
            icon: stackIcons.next,
        },
        {
            name: 'Redux',
            icon: stackIcons.redux,
        },
        {
            name: 'Tailwind CSS',
            icon: stackIcons.tailwind,
        },
        {
            name: 'GSAP',
            icon: stackIcons.gsap,
        },
        {
            name: 'Framer Motion',
            icon: stackIcons.framerMotion,
        },
        {
            name: 'Sass',
            icon: stackIcons.sass,
        },
        {
            name: 'Bootstrap',
            icon: stackIcons.bootstrap,
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: stackIcons.node,
        },
        {
            name: 'NestJS',
            icon: stackIcons.nest,
        },
        {
            name: 'Express.js',
            icon: stackIcons.express,
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: stackIcons.mysql,
        },
        {
            name: 'PostgreSQL',
            icon: stackIcons.postgreSql,
        },
        {
            name: 'MongoDB',
            icon: stackIcons.mongodb,
        },
        {
            name: 'Prisma',
            icon: stackIcons.prisma,
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: stackIcons.git,
        },
        {
            name: 'Docker',
            icon: stackIcons.docker,
        },
        {
            name: 'AWS',
            icon: stackIcons.aws,
        },
    ],
};

const BASE_PROJECTS = [
    {
        title: 'Electro EV',
        slug: 'electro-ev',
        liveUrl: 'https://electroev.co.uk/',
        year: 2025,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: projectAssets.electroEv.thumbnail,
        longThumbnail: projectAssets.electroEv.longThumbnail,
        images: projectAssets.electroEv.images,
    },
    {
        title: 'Epikcart',
        slug: 'epikcart',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: projectAssets.epikcart.thumbnail,
        longThumbnail: projectAssets.epikcart.longThumbnail,
        images: projectAssets.epikcart.images,
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: projectAssets.resumeRoaster.thumbnail,
        longThumbnail: projectAssets.resumeRoaster.longThumbnail,
        images: projectAssets.resumeRoaster.images,
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: projectAssets.propertyPro.thumbnail,
        longThumbnail: projectAssets.propertyPro.longThumbnail,
        images: projectAssets.propertyPro.images,
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: projectAssets.crenotive.thumbnail,
        longThumbnail: projectAssets.crenotive.longThumbnail,
        images: projectAssets.crenotive.images,
        sourceCode: 'https://github.com/Murat/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: projectAssets.devLinks.thumbnail,
        longThumbnail: projectAssets.devLinks.longThumbnail,
        images: projectAssets.devLinks.images,
        sourceCode: 'https://github.com/Murat/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
    },
];
const PROJECT_CONTENT: Record<
    Language,
    Record<string, Pick<IProject, 'description' | 'role'>>
> = {
    EN: {
        'electro-ev': {
            description: `
      A complete agency portfolio platform built for Electro EV to showcase their services, blog content, and product offerings. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
        <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
        <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Customized Payload CMS admin panel for intuitive content management</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in Next.js</li>
      </ul>
      `,
            role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
      </ul>
      `,
        },
        epikcart: {
            description:
                'Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.',
            role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
        },
        'resume-roaster': {
            description:
                'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
            role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
        },
        'property-pro': {
            description:
                'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
            role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
        },
        crenotive: {
            description:
                'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
            role: ``,
        },
        devLinks: {
            description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
            role: ``,
        },
    },
    TR: {
        'electro-ev': {
            description: `
      Electro EV için; hizmetlerini, blog içeriklerini ve ürünlerini sergilemek amacıyla geliştirilen kapsamlı bir ajans portföy platformu. <br/> <br/>

      Öne Çıkan Özellikler:<br/>
      <ul>
        <li>🛠️ Hizmet Sunum Sistemi: Senkronize slider yapısıyla etkileşimli hizmet vitrini</li>
        <li>✍️ Blog Yönetimi: Kategorizasyon ve arama özellikli SEO odaklı blog yapısı</li>
        <li>🛒 Ürün Kataloğu: Filtreleme kabiliyetine sahip düzenli ürün gösterimi</li>
        <li>📱 Tam Duyarlı Yapı: Tüm cihaz boyutları için optimize edildi</li>
        <li>⚡ Yüksek Performans: ISR destekli optimize Next.js frontend altyapısı</li>
      </ul><br/>

      Teknik Detaylar:
      <ul>
        <li>Swiper.js kullanarak karmaşık slider senkronizasyon mantığı geliştirildi</li>
        <li>Kolay içerik yönetimi için Payload CMS admin paneli özelleştirildi</li>
        <li>Tasarım tutarlılığı için shadcn ile yeniden kullanılabilir UI bileşenleri geliştirildi</li>
        <li>Next.js içinde verimli veri çekme stratejileri yapılandırıldı</li>
      </ul>
      `,
            role: `
      Full-Stack Developer <br/>
      Geliştirme sürecinin tamamını üstlendim:
      <ul>
        <li>✅ Backend: Hizmetler, bloglar ve ürünler için özel Payload CMS koleksiyonları yapılandırıldı</li>
        <li>🎨 Frontend: Tüm arayüz bileşenleri Tailwind CSS ve shadcn kullanılarak geliştirildi</li>
        <li>🔄 State Management: İstemci tarafı veri çekme ve cache yapısı kuruldu</li>
        <li>🖥️ CMS Özelleştirmesi: İçerik editörleri için yönetim arayüzleri oluşturuldu</li>
        <li>🚀 Deployment: Vercel hosting için CI/CD pipeline kuruldu</li>
        <li>🧩 Üçüncü Parti Entegrasyonu: Etkileşimli slider yapıları için Swiper.js entegre edildi</li>
      </ul>
      `,
        },
        epikcart: {
            description:
                'Epikcart, büyük ölçekli işletmeler için tasarlanmış, özellik açısından zengin ve ölçeklenebilir bir e-ticaret platformudur. Dinamik ürün filtreleme, RTL destekli çoklu dil yapısı, gelişmiş envanter yönetimi, sipariş takibi ve iade sistemleri ile çok satıcılı operasyonlar için kapsamlı bir çözüm sunar.',
            role: `Beş kişilik ekipte frontend developer olarak: <br/>
        - Frontend tarafını React, Redux, RTK Query ve Tailwind CSS ile sıfırdan geliştirdim.<br/>
        - Admin tarafından yapılandırılabilen parametrelerle ürün arama sayfası için dinamik filtreleme mantığı kurdum.<br/>
        - React i18n ile RTL dahil çoklu dil desteğini entegre ettim.<br/>
        - UI/UX tasarımcısı ile birlikte responsive ve kullanıcı dostu bir arayüz teslim ettim.`,
        },
        'resume-roaster': {
            description:
                'Resume Roaster, kişiye özel özgeçmiş geri bildirimi ve profesyonel yazım hizmetleri sunmak için tasarlanmış bir web uygulamasıdır. Next.js, PostgreSQL, Prisma ve Tailwind CSS ile geliştirildi; yapay zeka destekli öneriler için GPT-4 entegre edildi. Platform ayrıca puan bazlı bir peer-to-peer inceleme sistemi içerir ve taze mezunlar, deneyimli profesyoneller ile yazılımcıların iş odaklı özgeçmişlerini güçlendirmelerine yardımcı olur.',
            role: `Tek geliştirici ve iş sahibi olarak:<br/>
        - Platformu Next.js, PostgreSQL, Prisma ve Tailwind CSS kullanarak uçtan uca tasarlayıp geliştirdim.<br/>
        - Yapay zeka destekli geri bildirim ve içgörüler için GPT-4 entegrasyonu yaptım.<br/>
        - Kullanıcı puanlarına göre en iyi iki özgeçmişi belirleyen sorgu dahil olmak üzere karmaşık SQL sorguları geliştirdim.`,
        },
        'property-pro': {
            description:
                'PropertyPro, kullanıcıların emlak ilanlarını keşfetmesini, yönetmesini ve görüntülemesini kolaylaştıran bir gayrimenkul yönetim platformudur. Uygulama, tüm cihazlarda akıcı bir deneyim sağlamak için erişilebilirlik ve responsive tasarımı ön planda tutar.',
            role: `Frontend developer olarak:<br/>
        - Frontend tarafını React, Redux, RTK Query, Framer Motion ve Tailwind CSS ile geliştirdim.<br/>
        - Emlak verilerinin verimli yönetimi için dinamik state yapısı kurdum.<br/>
        - Farklı kitlelere hitap edebilmek için React i18n ile çoklu dil desteği ekledim.<br/>
        - Framer Motion ile animasyon ve geçişler tasarlayarak kullanıcı etkileşimini güçlendirdim.`,
        },
        crenotive: {
            description:
                'Crenotive için Html, SASS ve jQuery kullanarak hizmetleri ve uzmanlığı öne çıkaran bir portföy sitesi geliştirdim. Tasarım, responsive kullanıcı deneyimine ve profesyonel başarıların etkili biçimde sunulmasına odaklanır.',
            role: ``,
        },
        devLinks: {
            description: `Frontend Mentor içindeki en zorlu projelerden biriydi.<br/><br/>

            React, Redux ve Tailwind CSS kullanarak responsive ve özellik açısından güçlü bir LinkSharing App geliştirdim. Uygulama, kullanıcıların bağlantıları paylaşmasına, kaydetmesine ve keşfetmesine olanak tanırken; sezgisel tasarım ve akıcı gezinme deneyimine odaklanır. Gelişmiş state management yapısı, kullanıcı etkileşimleri için verilerin verimli biçimde yönetilmesini sağlar.`,
            role: ``,
        },
    },
};

export const getProjects = (language: Language): IProject[] =>
    BASE_PROJECTS.map((project) => ({
        ...project,
        ...PROJECT_CONTENT[language][project.slug],
    }));

const EXPERIENCE_CONTENT: Record<Language, IExperience[]> = {
    EN: [
        {
            title: 'UI Designer & Front-End Developer',
            company: 'MOZ Medya',
            duration: '01/2024 – present',
            description:
                "I do all front-end coding of this company's news software developed with Laravel ecosystem.",
        },
        {
            title: 'Front-End Developer',
            company: 'Birtema',
            duration: '09/2023 – 01/2024',
            description:
                'At this workplace, I shared blog posts and performed front-end coding of Wordpress-based news software.',
        },
        {
            title: 'Front-End Developer',
            company: 'Temadam',
            duration: '03/2022 – 08/2023',
            description:
                'I did the front-end coding of the pages designed on this site that sells Wordpress themes.',
        },
        {
            title: 'UI Designer & Front-End Developer',
            company: 'Fiverr',
            duration: '06/2021 – 01/2022',
            description:
                'I provided support for software projects as a freelancer. I gained my first professional design and front-end experience on this platform.',
        },
    ],
    TR: [
        {
            title: 'UI Tasarımcısı & Front-End Developer',
            company: 'MOZ Medya',
            duration: '01/2024 – günümüz',
            description:
                'Laravel ekosistemi ile geliştirilen bu şirketin haber yazılımının tüm front-end kodlamasını yapıyorum.',
        },
        {
            title: 'Front-End Developer',
            company: 'Birtema',
            duration: '09/2023 – 01/2024',
            description:
                'Bu iş yerinde blog paylaşımları yaptım ve Wordpress tabanlı haber yazılımının front-end kodlamasını gerçekleştirdim.',
        },
        {
            title: 'Front-End Developer',
            company: 'Temadam',
            duration: '03/2022 – 08/2023',
            description:
                'Wordpress temaları satan bu sitede tasarlanan sayfaların front-end kodlamasını yaptım.',
        },
        {
            title: 'UI Tasarımcısı & Front-End Developer',
            company: 'Fiverr',
            duration: '06/2021 – 01/2022',
            description:
                'Freelancer olarak yazılım projelerine destek verdim. İlk profesyonel tasarım ve front-end deneyimimi bu platformda kazandım.',
        },
    ],
};

export const getExperience = (language: Language): IExperience[] =>
    EXPERIENCE_CONTENT[language];
