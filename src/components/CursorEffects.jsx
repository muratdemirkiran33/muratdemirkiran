import { useEffect, useRef, useState } from 'react';

const MINIMUM_SCREEN_SIZE = 1100;

export function CursorEffects() {
    // CustomCursor state
    const canvasRef = useRef(null);
    const cursorRef = useRef(null);
    const [pointer, setPointer] = useState({ x: 0, y: 0, isHovering: false });

    const params = {
        pointsNumber: 10,
        widthFactor: 0.4,
        friction: 0.4,
        spring: 0.5
    };

    const trailRef = useRef(
        new Array(params.pointsNumber).fill('').map(() => ({
            x: 0,
            y: 0,
            dx: 0,
            dy: 0
        }))
    );

    const trail = trailRef.current;

    // ClickSpark state
    const [sparks, setSparks] = useState([]);
    const sparkIdRef = useRef(0);

    // Initialize pointer position
    useEffect(() => {
        if (typeof window === 'undefined') return;

        setPointer({
            x: 0.5 * window.innerWidth,
            y: 0.5 * window.innerHeight,
            isHovering: false
        });
    }, []);

    // CustomCursor effect
    useEffect(() => {
        if (window.innerWidth < MINIMUM_SCREEN_SIZE || !canvasRef.current) return;

        let animationFrameId;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const cursor = cursorRef.current;

        let moveTimeout;
        const handleMouseMove = (event) => {
            const isHovering = event.target.closest('a, button, input, textarea, select, [role="button"]');
            updateMousePosition(event.clientX, event.clientY, !!isHovering);

            if (isHovering) {
                // Hide canvas trail immediately when hovering clickable elements
                canvas.style.transitionDuration = '500ms';
                canvas.style.opacity = '0';
                clearTimeout(moveTimeout);
            } else {
                // Show canvas trail when moving (normal behavior) - Instant appear
                canvas.style.transitionDuration = '0ms';
                canvas.style.opacity = '1';

                // Hide canvas trail when stopped - Fade out
                clearTimeout(moveTimeout);
                moveTimeout = setTimeout(() => {
                    canvas.style.transitionDuration = '500ms';
                    canvas.style.opacity = '0';
                }, 500);
            }

            // Ensure SVG cursor is always visible
            if (cursor) cursor.style.opacity = '1';
        };

        const updateMousePosition = (x, y, isHovering) => {
            setPointer({ x, y, isHovering });
        };

        const setupCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            updateCanvas();
        };

        const updateCanvas = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            trail.forEach((point, pointIndex) => {
                const prev = pointIndex === 0 ? pointer : trail[pointIndex - 1];
                const spring = pointIndex === 0 ? 0.4 * params.spring : params.spring;
                point.dx += (prev.x - point.x) * spring;
                point.dy += (prev.y - point.y) * spring;
                point.dx *= params.friction;
                point.dy *= params.friction;
                point.x += point.dx;
                point.y += point.dy;
            });

            ctx.lineWidth = 1;
            ctx.lineCap = 'round';
            const computedColor = window.getComputedStyle(canvas).color;
            ctx.strokeStyle = computedColor;
            ctx.beginPath();
            ctx.moveTo(trail[0].x, trail[0].y);

            for (let i = 1; i < trail.length - 1; i++) {
                const xc = 0.5 * (trail[i].x + trail[i + 1].x);
                const yc = 0.5 * (trail[i].y + trail[i + 1].y);
                ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
                ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
                ctx.stroke();
            }

            ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
            ctx.stroke();

            animationFrameId = requestAnimationFrame(updateCanvas);
        };

        setupCanvas();
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [pointer, params, trail]);

    // ClickSpark effect
    useEffect(() => {
        const handleClick = (event) => {
            const id = sparkIdRef.current++;
            const newSpark = {
                id,
                x: event.clientX,
                y: event.clientY
            };

            setSparks(prev => [...prev, newSpark]);

            setTimeout(() => {
                setSparks(prev => prev.filter(spark => spark.id !== id));
            }, 660);
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <>
            {/* Custom Cursor SVG */}
            <div
                ref={cursorRef}
                className="pointer-events-none fixed left-0 top-0 z-50 opacity-0 transition-opacity duration-300"
                style={{
                    transform: `translate(${pointer.x}px, ${pointer.y}px)`,
                }}
            >
                <svg
                    width="27"
                    height="30"
                    viewBox="0 0 27 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`text-primary transition-transform duration-300 ${pointer.isHovering ? 'scale-150' : 'scale-100'}`}
                >
                    <path
                        d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
                        className="fill-foreground stroke-background/50"
                    />
                </svg>
            </div>

            {/* Custom Cursor Canvas */}
            <canvas
                ref={canvasRef}
                className="pointer-events-none fixed left-0 top-0 z-30 duration-500 opacity-0 text-primary"
            />

            {/* Click Sparks */}
            {sparks.map(spark => (
                <div
                    key={spark.id}
                    className="fixed pointer-events-none z-40 text-primary"
                    style={{
                        left: `${spark.x - 18}px`,
                        top: `${spark.y - 18}px`
                    }}
                >
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 100 100"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        stroke="currentColor"
                        className="animate-spark"
                    >
                        {Array.from({ length: 10 }, (_, i) => (
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
                                    transform: `rotate(calc(${i} * (360deg / 10)))`
                                }}
                            />
                        ))}
                    </svg>
                </div>
            ))}
        </>
    );
}
