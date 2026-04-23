import { useEffect, useRef, useState } from "react";

interface Options {
    threshold?: number;  // 0..1, how much of the element must be visible to trigger
    rootMargin?: string; // CSS-like margin that grows/shrinks the viewport rect
    once?: boolean;      // if true, stop observing after first reveal
}