import { useEffect, useRef, useState } from 'react';

export function ClickSpark() {
    const [sparks, setSparks] = useState([]);
    const sparkIdRef = useRef(0);

    useEffect(() => {
        const handleClick = (event) => {
            const id = sparkIdRef.current++;
            const newSpark = {
                id,
                x: event.pageX,
                y: event.pageY
            };

            setSparks(prev => [...prev, newSpark]);

            // Remove spark after animation completes
            setTimeout(() => {
                setSparks(prev => prev.filter(spark => spark.id !== id));
            }, 660);
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <>
            {sparks.map(spark => (
                <div
                    key={spark.id}
                    className="fixed pointer-events-none z-40 text-primary"
                    style={{
                        left: `${spark.x - 15}px`,
                        top: `${spark.y - 15}px`
                    }}
                >
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 100 100"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        stroke="currentColor"
                        className="animate-spark"
                    >
                        {Array.from({ length: 8 }, (_, i) => (
                            <line
                                key={i}
                                x1="50"
                                y1="30"
                                x2="50"
                                y2="4"
                                strokeDasharray="30"
                                strokeDashoffset="30"
                                style={{
                                    transformOrigin: 'center',
                                    animation: `spark-line 660ms cubic-bezier(0.25, 1, 0.5, 1) forwards`,
                                    animationDelay: '0ms',
                                    transform: `rotate(calc(${i} * (360deg / 8)))`
                                }}
                            />
                        ))}
                    </svg>
                </div>
            ))}
        </>
    );
}
