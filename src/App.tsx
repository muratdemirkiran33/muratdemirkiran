import React from 'react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import './index.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import { CursorEffects } from '@/components/CursorEffects';
import Preloader from '@/components/Preloader';
import StickyEmail from '@/components/home/StickyEmail';

// Home page components
import Banner from '@/components/home/Banner';
import AboutMe from '@/components/home/AboutMe';
import Skills from '@/components/home/Skills';
import Experiences from '@/components/home/Experiences';
import ProjectList from '@/components/home/ProjectList';

function App() {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
            <Navbar />
            <main>
                <div className="page-">
                    <Banner />
                    <AboutMe />
                    <Skills />
                    <Experiences />
                    <ProjectList />
                </div>
            </main>
            <Footer />
            <CursorEffects />
            <Preloader />
            <ScrollProgressIndicator />
            <ParticleBackground />
            <StickyEmail />
        </ReactLenis>
    );
}

export default App;
