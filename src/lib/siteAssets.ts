import awsLogo from '@/assets/site/logo/aws.png';
import bootstrapLogo from '@/assets/site/logo/bootstrap.svg';
import dockerLogo from '@/assets/site/logo/docker.svg';
import expressLogo from '@/assets/site/logo/express.png';
import framerMotionLogo from '@/assets/site/logo/framer-motion.png';
import gitLogo from '@/assets/site/logo/git.png';
import gsapLogo from '@/assets/site/logo/gsap.png';
import javascriptLogo from '@/assets/site/logo/js.png';
import mongodbLogo from '@/assets/site/logo/mongodb.svg';
import mysqlLogo from '@/assets/site/logo/mysql.svg';
import nestLogo from '@/assets/site/logo/nest.svg';
import nextLogo from '@/assets/site/logo/next.png';
import nodeLogo from '@/assets/site/logo/node.png';
import postgreSqlLogo from '@/assets/site/logo/postgreSQL.png';
import prismaLogo from '@/assets/site/logo/prisma.png';
import reactLogo from '@/assets/site/logo/react.png';
import reduxLogo from '@/assets/site/logo/redux.png';
import sassLogo from '@/assets/site/logo/sass.png';
import tailwindLogo from '@/assets/site/logo/tailwind.png';
import typescriptLogo from '@/assets/site/logo/ts.png';

import electroEvThumb from '@/assets/site/projects/thumbnail/mti-electronics.webp';
import electroEvLongThumb from '@/assets/site/projects/long/mti-electronics.webp';
import electroEvImage1 from '@/assets/site/projects/images/mti-electronics-1.webp';
import electroEvImage2 from '@/assets/site/projects/images/mti-electronics-2.webp';

import epikcartThumb from '@/assets/site/projects/thumbnail/epikcart.jpg';
import epikcartLongThumb from '@/assets/site/projects/long/epikcart.jpg';
import epikcartImage1 from '@/assets/site/projects/images/epikcart-1.png';
import epikcartImage2 from '@/assets/site/projects/images/epikcart-2.png';
import epikcartImage3 from '@/assets/site/projects/images/epikcart-3.png';
import epikcartImage4 from '@/assets/site/projects/images/epikcart-4.png';
import epikcartImage5 from '@/assets/site/projects/images/epikcart-5.png';

import resumeRoasterThumb from '@/assets/site/projects/thumbnail/resume-roaster.jpg';
import resumeRoasterLongThumb from '@/assets/site/projects/long/resume-roaster.jpg';
import resumeRoasterImage1 from '@/assets/site/projects/images/resume-roaster-1.png';
import resumeRoasterImage2 from '@/assets/site/projects/images/resume-roaster-2.png';
import resumeRoasterImage3 from '@/assets/site/projects/images/resume-roaster-3.png';

import propertyProThumb from '@/assets/site/projects/thumbnail/property-pro.jpg';
import propertyProLongThumb from '@/assets/site/projects/long/property-pro.jpg';
import propertyProImage1 from '@/assets/site/projects/images/property-pro-1.png';
import propertyProImage2 from '@/assets/site/projects/images/property-pro-2.png';
import propertyProImage3 from '@/assets/site/projects/images/property-pro-3.png';

import crenotiveThumb from '@/assets/site/projects/thumbnail/consulting-finance.jpg';
import crenotiveLongThumb from '@/assets/site/projects/long/consulting-finance.jpg';
import crenotiveImage1 from '@/assets/site/projects/images/consulting-finance-1.png';
import crenotiveImage2 from '@/assets/site/projects/images/consulting-finance-2.png';
import crenotiveImage3 from '@/assets/site/projects/images/consulting-finance-3.png';

import devLinksThumb from '@/assets/site/projects/thumbnail/devLinks.jpg';
import devLinksLongThumb from '@/assets/site/projects/long/devLinks.jpg';
import devLinksImage1 from '@/assets/site/projects/images/devLinks-1.png';
import devLinksImage2 from '@/assets/site/projects/images/devLinks-2.png';
import devLinksImage3 from '@/assets/site/projects/images/devLinks-3.png';

export const stackIcons = {
    javascript: javascriptLogo,
    typescript: typescriptLogo,
    react: reactLogo,
    next: nextLogo,
    redux: reduxLogo,
    tailwind: tailwindLogo,
    gsap: gsapLogo,
    framerMotion: framerMotionLogo,
    sass: sassLogo,
    bootstrap: bootstrapLogo,
    node: nodeLogo,
    nest: nestLogo,
    express: expressLogo,
    mysql: mysqlLogo,
    postgreSql: postgreSqlLogo,
    mongodb: mongodbLogo,
    prisma: prismaLogo,
    git: gitLogo,
    docker: dockerLogo,
    aws: awsLogo,
};

export const projectAssets = {
    electroEv: {
        thumbnail: electroEvThumb,
        longThumbnail: electroEvLongThumb,
        images: [electroEvImage1, electroEvImage2],
    },
    epikcart: {
        thumbnail: epikcartThumb,
        longThumbnail: epikcartLongThumb,
        images: [
            epikcartImage1,
            epikcartImage2,
            epikcartImage3,
            epikcartImage4,
            epikcartImage5,
        ],
    },
    resumeRoaster: {
        thumbnail: resumeRoasterThumb,
        longThumbnail: resumeRoasterLongThumb,
        images: [
            resumeRoasterImage1,
            resumeRoasterImage2,
            resumeRoasterImage3,
        ],
    },
    propertyPro: {
        thumbnail: propertyProThumb,
        longThumbnail: propertyProLongThumb,
        images: [propertyProImage1, propertyProImage2, propertyProImage3],
    },
    crenotive: {
        thumbnail: crenotiveThumb,
        longThumbnail: crenotiveLongThumb,
        images: [crenotiveImage1, crenotiveImage2, crenotiveImage3],
    },
    devLinks: {
        thumbnail: devLinksThumb,
        longThumbnail: devLinksLongThumb,
        images: [devLinksImage1, devLinksImage2, devLinksImage3],
    },
};
