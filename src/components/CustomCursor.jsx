import { useEffect, useRef, useState } from 'react';

const MINIMUM_SCREEN_SIZE = 1100;

export function CustomCursor() {
    const canvasRef = useRef(null);
    const [pointer, setPointer] = useState({ x: 0, y: 0 });

    const params = {
        pointsNumber: 10,
        widthFactor: 0.3,
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

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Initialize pointer position
        setPointer({
            x: 0.5 * window.innerWidth,
            y: 0.5 * window.innerHeight
        });
    }, []);

    useEffect(() => {
        if (window.innerWidth < MINIMUM_SCREEN_SIZE || !canvasRef.current) return;

        let animationFrameId;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const handleMouseMove = (event) => {
            updateMousePosition(event.clientX, event.clientY);
            if (event.target instanceof HTMLElement) {
                canvas.style.opacity = event.target.closest('a, button, .no-custom-cursor')
                    ? '10%'
                    : '100%';
            }
        };

        const updateMousePosition = (x, y) => {
            setPointer({ x, y });
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
            // Get the computed color from the canvas element
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

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed left-0 top-0 z-30 duration-500 opacity-0 text-primary"
        />
    );
}
