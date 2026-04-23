import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";

const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

export const useScrambleText = (text: string, startDelay = 400) => {
    const [output, setOutput] = useState(
        () => text.split("").map(c => (c === " " ? " " : randomChar())).join("")
    );

    return output;
};