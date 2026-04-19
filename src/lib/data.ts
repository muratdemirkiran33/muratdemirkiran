import { IProject } from '@/types';
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

export const PROJECTS: IProject[] = [
    {
        title: 'Electro EV',
        slug: 'electro-ev',
        liveUrl: 'https://electroev.co.uk/',
        year: 2025,
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
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
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
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
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
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
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
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
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
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Strativ AB',
        duration: 'Dec 2024 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Nov 2024',
    },
    {
        title: 'Frontend Engineer',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022',
    },
];
