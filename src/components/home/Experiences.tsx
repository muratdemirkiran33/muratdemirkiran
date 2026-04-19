
import SectionTitle from '@/components/SectionTitle';
import { getExperience } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { language, t } = useLanguage();
    const experienceItems = getExperience(language);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title={t('section.experience')} />

                <div className="grid gap-14">
                    {experienceItems.map((item) => (
                        <div key={item.company} className="experience-item">
                            <p className="text-xl text-muted-foreground">
                                {item.company}
                            </p>
                            <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                                {item.title}
                            </p>
                            <p className="max-w-3xl text-base leading-7 text-foreground/80 mb-3">
                                {item.description}
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {item.duration}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
