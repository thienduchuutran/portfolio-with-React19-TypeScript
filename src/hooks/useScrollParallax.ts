import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

interface Options {
    /**
     * Parallax speed factor.
     * - Positive (e.g. 0.3): element drifts DOWN as the page scrolls down -> appears to scroll slower (background / "deep" layer)
     * - Negative (e.g. -0.1): element drifts UP relative to scroll -> appears to scroll faster (foreground / "close" layer)
     */
    speed?: number;
    /**
     * Optional extra CSS transform appended after the parallax translate (e.g. "rotate(90deg)").
     * Needed when the element already has a transform we must preserve.
     */
    extraTransform?: string;
}

/**
 * Drives a GPU-only parallax on the returned ref by subscribing to Lenis's scroll callback.
 * Only animates `transform` (compositor-only, no reflow). Bails out under prefers-reduced-motion.
 */
export const useScrollParallax = <T extends HTMLElement>(options: Options = {}) => {
    const { speed = 0.3, extraTransform = "" } = options;
    const ref = useRef<T>(null);
    const reducedMotion = useRef(false);

    useEffect(() => {
        reducedMotion.current = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
    }, []);

    useLenis(
        (lenis) => {
            const el = ref.current;
            if (!el || reducedMotion.current) return;
            const offset = lenis.scroll * speed;
            el.style.transform = `translate3d(0, ${offset}px, 0)${extraTransform ? " " + extraTransform : ""}`;
        },
        [speed, extraTransform]
    );

    return ref;
};
