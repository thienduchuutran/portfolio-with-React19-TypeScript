# Duc Tran | Personal Portfolio

This portfolio was built on top of a starter template by [Hỏi Dân IT (Eric)](https://hoidanit.vn/), not from scratch. The original template provided the base layout, routing, i18n setup, and component structure.

## What I customized

On top of the template, I added the following features myself:

**1. Magnetic buttons**
The "My Experiences" and "View Resume" buttons become magnetic, subtly pulling toward the cursor when it gets within ~80px. Implemented in ~40 lines of vanilla JS using `getBoundingClientRect` + `transform: translate`. No library, pure DOM math.

**2. Scroll-triggered section reveals**
Every section fades and slides up into view as you scroll to it, powered by `IntersectionObserver`. ~30 lines, zero dependencies. Makes the page feel significantly more intentional than sections that just statically exist.

**3. Text scramble on the hero name**
On page load, "Duc Tran" scrambles through random characters before resolving to the real letters, a Matrix-style decode effect. ~60 lines of pure React, no library. Built as a custom hook (`useScrambleText`).

---

## Running locally

```bash
# install dependencies
npm i

# development
npm run dev

# production build
npm run build
npm run preview
```

Node.js version: v20.14.0 — https://nodejs.org/download/release/v20.14.0/
