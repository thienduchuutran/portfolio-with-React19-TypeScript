import { useEffect, useRef } from "react";

interface Options {
    radius?: number;   // activation distance in px
    strength?: number; // how far the element follows (0..1)
}

export const useMagnetic = <T extends HTMLElement>(
    options: Options = {}
) => {
    return () => {

    }
}