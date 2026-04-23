import { useEffect, useRef } from "react";

interface Options {
    radius?: number;   // activation distance in px
    strength?: number; // how far the element follows (0..1)
}

export const useMagnetic = <T extends HTMLElement>(
    options: Options = {}
) => {
    const { radius = 80, strength = 0.35 } = options; // activation field and fraction of cursor
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;
    }, [])

    return () => {

    }
}