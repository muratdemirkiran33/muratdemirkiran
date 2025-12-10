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
import SocialSideBar from '@/components/home/SocialSideBar';

// Home page components
import Banner from '@/components/home/Banner';
import AboutMe from '@/components/home/AboutMe';
import Skills from '@/components/home/Skills';
import Experiences from '@/components/home/Experiences';
import ProjectList from '@/components/home/ProjectList';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Routes, Route, ScrollRestoration } from 'react-router-dom';
import ProjectPage from '@/pages/ProjectPage';

function App() {
    return (
        <LanguageProvider>
            <ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
                <ScrollRestoration
                    getKey={(location) => {
                        // Scroll to top for project detail pages
                        return location.pathname;
                    }}
                />
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <main>
                                <div className="page-">
                                    <Banner />
                                    <AboutMe />
                                    <Skills />
                                    <Experiences />
                                    <ProjectList />
                                </div>
                            </main>
                        }
                    />
                    <Route path="/projects/:slug" element={<ProjectPage />} />
                </Routes>
                <Footer />
                <CursorEffects />
                <Preloader />
                <ScrollProgressIndicator />
                <ParticleBackground />
                <SocialSideBar />
            </ReactLenis>
        </LanguageProvider>
    );
}

export default App;
