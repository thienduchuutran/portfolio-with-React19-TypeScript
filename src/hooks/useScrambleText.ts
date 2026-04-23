import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";

const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

export const useScrambleText = (text: string, startDelay = 400) => {
    const [output, setOutput] = useState(
        () => text.split("").map(c => (c === " " ? " " : randomChar())).join("")
    ); //only run this effect once on initial render
    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            setOutput(text);
            return;
        }

        const chars = text.split("");
        const totalDuration = 1600;
        let startTime: number | null = null;
        let rafId: number;

        const tick = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            const frame = chars.map((char, i) => {
                if (char === " ") return " ";
                const resolveAt = (i / chars.length) * totalDuration;
                return elapsed >= resolveAt ? char : randomChar();
            });

            setOutput(frame.join(""));

            if (elapsed < totalDuration) {
                rafId = requestAnimationFrame(tick);
            } else {
                setOutput(text);
            }
        };

        const timeoutId = setTimeout(() => {
            rafId = requestAnimationFrame(tick);
        }, startDelay);

        return () => {
            clearTimeout(timeoutId);
            cancelAnimationFrame(rafId);
        };
    }, [text, startDelay]);

    return output;
};