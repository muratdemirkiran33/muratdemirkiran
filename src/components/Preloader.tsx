
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
            });

            tl.to('.name-text span', {
                y: 0,
                stagger: 0.05,
                duration: 0.2,
            });

            tl.to('.preloader-item', {
                delay: 0.3,
                y: '100%',
                duration: 0.5,
                stagger: 0.1,
            })
                .to('.name-text span', { autoAlpha: 0 }, '<0.5')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '<1',
                );
        },
        { scope: preloaderRef },
    );

    return (
        <div className="fixed inset-0 z-[6] flex" ref={preloaderRef}>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>

            <div className="name-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center font-anton text-[15vw] lg:text-[120px] leading-relaxed tracking-[0.05em] text-center z-10">
                <div className="overflow-hidden flex">
                    <span className="inline-block translate-y-full">M</span>
                    <span className="inline-block translate-y-full">U</span>
                    <span className="inline-block translate-y-full">R</span>
                    <span className="inline-block translate-y-full">A</span>
                    <span className="inline-block translate-y-full">T</span>
                </div>
                <div className="overflow-hidden flex">
                    <span className="inline-block translate-y-full">D</span>
                    <span className="inline-block translate-y-full">E</span>
                    <span className="inline-block translate-y-full">M</span>
                    <span className="inline-block translate-y-full">İ</span>
                    <span className="inline-block translate-y-full">R</span>
                    <span className="inline-block translate-y-full">K</span>
                    <span className="inline-block translate-y-full">I</span>
                    <span className="inline-block translate-y-full">R</span>
                    <span className="inline-block translate-y-full">A</span>
                    <span className="inline-block translate-y-full">N</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
