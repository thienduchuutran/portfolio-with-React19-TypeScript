import { useEffect, useRef, useState } from "react";

interface Options {
    threshold?: number;  // 0..1, how much of the element must be visible to trigger
    rootMargin?: string; // CSS-like margin that grows/shrinks the viewport rect
    once?: boolean;      // if true, stop observing after first reveal
}

export const useReveal = <T extends HTMLElement>(options: Options = {}) => {
    //shrinks the effective viewport by 10% on the bottom only
    const { threshold = 0.15, rootMargin = "0px 0px -10% 0px", once = false } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false); //rerender component when visibility flips to apply CSS class

    useEffect(() => {
        const el = ref.current;
        if (!el) return; // same reason as useMagnetic, ref not attached yet on first tick

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            setIsVisible(true); // skip the animation, show immediately for disabled users
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (once) observer.unobserve(entry.target); // stop watching; work is done
                    } else if (!once) {
                        setIsVisible(false); // re-hide if the user scrolls it back off-screen
                    }
                });
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect(); // cleanup on unmount or option change

    }, [threshold, rootMargin, once]);

    return { ref, isVisible };
}