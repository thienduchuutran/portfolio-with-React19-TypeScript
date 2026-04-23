import { useEffect, useRef } from "react";

interface Options {
    radius?: number;   // activation distance in px
    strength?: number; // how far the element follows (0..1)
}

export const useMagnetic = <T extends HTMLElement>(
    options: Options = {}
) => {
    const { radius = 120, strength = 0.95 } = options; // activation field and fraction of cursor
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;    //ref is null on first render before mount completes, so no effect

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return; //system level accessibility setting to disable animations for disabled users


        //target coordinations gives the position the element should move to
        //compared to cursor and current coordinations gives the current position of the element
        let rafId = 0;
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        const tick = () => {
            //exponential-smoothing lerp
            //each frame the current moves 15% of the remaining distance toward target
            currentX += (targetX - currentX) * 0.3;
            currentY += (targetY - currentY) * 0.3;
            el.style.transform = `translate(${currentX}px, ${currentY}px)`;

            //if the element is close enough to the target, stop the animation
            if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
                rafId = requestAnimationFrame(tick);
            } else {
                rafId = 0;
            }
        };

        const onMove = (e: PointerEvent) => {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.hypot(dx, dy);

            if (dist < radius) {
                targetX = dx * strength;
                targetY = dy * strength;
            } else {
                targetX = 0;
                targetY = 0;
            }
            if (!rafId) rafId = requestAnimationFrame(tick);
        };

        const onLeave = () => {
            targetX = 0;
            targetY = 0;
            if (!rafId) rafId = requestAnimationFrame(tick);
        };

        window.addEventListener("pointermove", onMove);
        el.addEventListener("pointerleave", onLeave);

        return () => {
            window.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerleave", onLeave);
            if (rafId) cancelAnimationFrame(rafId);
            el.style.transform = "";
        };
    }, [radius, strength]);
    return ref
}