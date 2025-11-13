import React, { useRef, useEffect, useCallback, useState } from 'react';

// NOTE: In a production environment, this CSS should be moved to a 
// separate imported CSS file (e.g., GlowingContactForm.css).
const styles = `
/* 🎨 CSS Variables */
:root {
    --glow-sens: 30;
    --dark: hsl(260, 25%, 15%);
    --card-bg: linear-gradient(8deg, var(--dark) 75%, color-mix(in hsl, var(--dark), white 2.5%) 75.5%);
    --blend: soft-light;
    --glow-blend: plus-lighter;
    --glow-color: 40deg 80% 80%;
    --glow-boost: 0%;
    --fg: white;

    /* Form Design Variables */
    --bg-color: hsl(220, 15%, 15%);
    --card-bg-color: hsl(220, 18%, 18%);
    --text-color: #e0e0e0;
    --input-border-color: #555;
    --message-box-bg: hsl(260, 25%, 15%);
    --submit-button-bg: #333;
    --submit-button-border: #555;
    --submit-button-text: #e0e0e0;
    --border-radius-main: 1.768em;
    --border-radius-submit: 9999px;
    --font-family-main: 'Inter', sans-serif;
}

/* Light Mode Variables (Kept for completeness, though not relevant to the form design image) */
.light {
    --link: hsl(var(--canvas), 90%, 50%);
    --linkh: hsl(150, 85%, 40%);
    --h: 260;
}

.light .card {
    --card-bg: linear-gradient(8deg, color-mix(in hsl, hsl(260, 25%, 95%), var(--dark) 2.5%) 75%, hsl(260, 25%, 95%) 75.5%);
    --blend: darken;
    --glow-blend: luminosity;
    --glow-color: 280deg 90% 95%;
    --glow-boost: 15%;
    --fg: black;
    color: var(--fg);
}

body.light {
    background-image:
        linear-gradient(180deg,
            hsl(var(--h), 8%, 58%),
            hsl(var(--h), 15%, 42%));
}

/* 🖼️ Base & Layout Styles (Fixed) */
body,
html {
    height: 100vh;
    overflow: hidden;
    background: var(--bg-color);
    font-family: var(--font-family-main);
    color: var(--fg, white);
    margin: 0;
}

main {
    display: grid;
    justify-items: center;
    align-content: center;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
}

/* Card Styles - CRITICAL FOR GLOW EFFECT */
.card {
    --pads: 40px;
    --color-sens: calc(var(--glow-sens) + 20);
    --pointer-°: 45deg;
    --pointer-d: 0;

    position: relative;
    width: clamp(320px, calc(100svw - calc(var(--pads) * 2)), 600px);
    height: 520px;
    max-height: 100vh;

    border-radius: var(--border-radius-main);
    isolation: isolate;
    transform: translate3d(0, 0, 0.01px);
    display: grid;
    place-items: center;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    background-repeat: no-repeat;
    transition: box-shadow 0.75s ease-in-out; /* Added transition for smooth hover exit */
}

/* Common ::before, ::after, and .glow styles (Retained for glow effect) */
.card::before,
.card::after,
.card>.glow {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    transition: opacity 0.25s ease-out;
    z-index: -1;
}

.card:not(:hover):not(.animating) {
    /* transition: box-shadow 0.75s ease-in-out; Removed as it conflicts with the one above */
}

.card:not(:hover):not(.animating)::before,
.card:not(:hover):not(.animating)::after,
.card:not(:hover):not(.animating)>.glow {
    opacity: 0;
    transition: opacity 0.75s ease-in-out;
}

/* ::before (Mesh Gradient Border) */
.card::before {
    border: 1px solid transparent;
    background:
        linear-gradient(var(--card-bg) 0 100%) padding-box,
        linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box,
        /* Mesh Gradient Colors */
        radial-gradient(at 80% 55%, hsla(268, 100%, 76%, 1) 0px, transparent 50%) border-box,
        radial-gradient(at 69% 34%, hsla(349, 100%, 74%, 1) 0px, transparent 50%) border-box,
        radial-gradient(at 8% 6%, hsla(136, 100%, 78%, 1) 0px, transparent 50%) border-box,
        radial-gradient(at 41% 38%, hsla(192, 100%, 64%, 1) 0px, transparent 50%) border-box,
        radial-gradient(at 86% 85%, hsla(186, 100%, 74%, 1) 0px, transparent 50%) border-box,
        radial-gradient(at 82% 18%, hsla(52, 100%, 65%, 1) 0px, transparent 50%) border-box,
        radial-gradient(at 51% 4%, hsla(12, 100%, 72%, 1) 0px, transparent 50%) border-box,
        linear-gradient(#c299ff 0 100%) border-box;

    /* Opacity and Masking tied to JS vars */
    opacity: calc((var(--pointer-d) - var(--color-sens)) / (100 - var(--color-sens)));
    mask-image:
        conic-gradient(from var(--pointer-°) at center, black 25%, transparent 40%, transparent 60%, black 75%);
}

/* ::after (Mesh Gradient Background) */
.card::after {
    border: 1px solid transparent;
    background:
        /* Mesh Gradient Colors (same as above, but for padding-box) */
        radial-gradient(at 80% 55%, hsla(268, 100%, 76%, 1) 0px, transparent 50%) padding-box,
        radial-gradient(at 69% 34%, hsla(349, 100%, 74%, 1) 0px, transparent 50%) padding-box,
        radial-gradient(at 8% 6%, hsla(136, 100%, 78%, 1) 0px, transparent 50%) padding-box,
        radial-gradient(at 41% 38%, hsla(192, 100%, 64%, 1) 0px, transparent 50%) padding-box,
        radial-gradient(at 86% 85%, hsla(186, 100%, 74%, 1) 0px, transparent 50%) padding-box,
        radial-gradient(at 82% 18%, hsla(52, 100%, 65%, 1) 0px, transparent 50%) padding-box,
        radial-gradient(at 51% 4%, hsla(12, 100%, 72%, 1) 0px, transparent 50%) padding-box,
        linear-gradient(#c299ff 0 100%) padding-box;

    /* Complex Masking */
    mask-image:
        linear-gradient(to bottom, black, black),
        radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%),
        radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%),
        radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%),
        radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%),
        radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%),
        conic-gradient(from var(--pointer-°) at center, transparent 5%, black 15%, black 85%, transparent 95%);

    mask-composite: subtract, add, add, add, add, add;

    /* Opacity and Blending */
    opacity: calc((var(--pointer-d) - var(--color-sens)) / (100 - var(--color-sens)));
    mix-blend-mode: var(--blend);
}

/* .glow (Actual Glowing Effect) */
.card>.glow {
    --outset: var(--pads);
    inset: calc(var(--outset) * -1);
    pointer-events: none;
    z-index: 1;

    /* Masking for cone-shaped glow */
    mask-image:
        conic-gradient(from var(--pointer-°) at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%);

    /* Opacity and Blending */
    opacity: calc((var(--pointer-d) - var(--glow-sens)) / (100 - var(--glow-sens)));
    mix-blend-mode: var(--glow-blend);
}

/* .glow::before (Inner and Outer Box Shadows) */
.card>.glow::before {
    content: "";
    position: absolute;
    inset: var(--outset);
    border-radius: inherit;
    /* Box Shadows (Inner & Outer Glow) */
    box-shadow:
        inset 0 0 0 1px hsl(var(--glow-color) / 100%),
        inset 0 0 1px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 60%)),
        inset 0 0 3px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 50%)),
        inset 0 0 6px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 40%)),
        inset 0 0 15px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 30%)),
        inset 0 0 25px 2px hsl(var(--glow-color) / calc(var(--glow-boost) + 20%)),
        inset 0 0 50px 2px hsl(var(--glow-color) / calc(var(--glow-boost) + 10%)),

        0 0 1px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 60%)),
        0 0 3px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 50%)),
        0 0 6px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 40%)),
        0 0 15px 0 hsl(var(--glow-color) / calc(var(--glow-boost) + 30%)),
        0 0 25px 2px hsl(var(--glow-color) / calc(var(--glow-boost) + 20%)),
        0 0 50px 2px hsl(var(--glow-color) / calc(var(--glow-boost) + 10%));
}

/* 📝 Form Content Styles (Adjusted for flow) */
.inner {
    padding: 2.5rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    text-align: left;
    overflow: auto;
}

.form-row,
.form-row1 {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 1.5rem;
}

/* Remove extra margin on the first row to align with padding */
.form-row:first-child {
    margin-top: 0;
}

.form-group {
    flex: 1;
    min-width: 200px;
}

label {
    display: block;
    margin-bottom: 0.3em;
    font-size: 0.95em;
    font-weight: 500;
    color: var(--text-color);
}

input[type="text"],
input[type="email"],
input[type="tel"] {
    width: 100%;
    padding: 0.5em 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--input-border-color);
    color: var(--text-color);
    font-size: 1em;
    box-sizing: border-box;
    outline: none;
    transition: border-bottom-color 0.2s ease-in-out;
}

input:focus {
    border-bottom-color: #999;
}

.message-field {
    background-color: linear-gradient(8deg, var(--dark) 75%,color-mix(in hsl, var(--dark), white 2.5%) 75.5%);;
    border: 1px solid var(--input-border-color);
    border-radius: 1rem;
    padding: 1.25rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1.5rem;
}

.message-field label {
    margin-bottom: 0;
}

textarea {
    width: 100%;
    min-height: 8rem;
    background: transparent;
    border: none;
    color: var(--text-color);
    font-family: var(--font-family-main);
    font-size: 1em;
    box-sizing: border-box;
    resize: vertical;
    outline: none;
    margin-top: 0.75rem;
}

.submit-button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.5rem;
}

.submit-button {
    padding: 0.6em 1.8em;
    background-color: transparent;
    color: var(--submit-button-text);
    border: 1px solid var(--submit-button-border);
    border-radius: var(--border-radius-submit);
    cursor: pointer;
    font-size: 0.95em;
    font-weight: 500;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.submit-button:hover {
    background-color: #444;
    border-color: #777;
}


`;

const App = () => {
    const cardRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(true);

    // Utility functions (moved into useCallback or outside the component)
    const round = (value, precision = 3) => parseFloat(value.toFixed(precision));
    const clamp = (value, min = 0, max = 100) =>
        Math.min(Math.max(value, min), max);

    // --- Pointer Tracking Functions ---

    const centerOfElement = useCallback(($el) => {
        if (!$el) return [0, 0];
        const { width, height } = $el.getBoundingClientRect();
        return [width / 2, height / 2];
    }, []);

    const pointerPositionRelativeToElement = useCallback(($el, e) => {
        if (!$el) return { pixels: [0, 0], percent: [0, 0] };
        const pos = [e.clientX, e.clientY];
        const { left, top, width, height } = $el.getBoundingClientRect();
        const x = pos[0] - left;
        const y = pos[1] - top;
        const px = clamp((100 / width) * x);
        const py = clamp((100 / height) * y);
        return { pixels: [x, y], percent: [px, py] };
    }, [clamp]);

    const distanceFromCenter = useCallback(($el, x, y) => {
        const [cx, cy] = centerOfElement($el);
        return [x - cx, y - cy]; // distance in pixels from center
    }, [centerOfElement]);

    const angleFromPointerEvent = useCallback((dx, dy) => {
        let angleRadians = 0;
        let angleDegrees = 0;
        if (dx !== 0 || dy !== 0) {
            angleRadians = Math.atan2(dy, dx);
            angleDegrees = angleRadians * (180 / Math.PI) + 90;
            if (angleDegrees < 0) {
                angleDegrees += 360;
            }
        }
        return angleDegrees;
    }, []);

    const closenessToEdge = useCallback(($el, x, y) => {
        const [cx, cy] = centerOfElement($el);
        const [dx, dy] = distanceFromCenter($el, x, y);
        let k_x = Infinity;
        let k_y = Infinity;

        if (dx !== 0) { k_x = cx / Math.abs(dx); }
        if (dy !== 0) { k_y = cy / Math.abs(dy); }

        return clamp((1 / Math.min(k_x, k_y)), 0, 1);
    }, [centerOfElement, distanceFromCenter, clamp]);

    // --- Main Update Function (on pointermove) ---
    const cardUpdate = useCallback((e) => {
        const $card = cardRef.current;
        if (!$card) return;

        const position = pointerPositionRelativeToElement($card, e);
        const [px, py] = position.pixels;
        const [perx, pery] = position.percent;
        const [dx, dy] = distanceFromCenter($card, px, py);
        const edge = closenessToEdge($card, px, py);
        const angle = angleFromPointerEvent(dx, dy);

        // Set CSS variables
        $card.style.setProperty('--pointer-x', `${round(perx)}%`);
        $card.style.setProperty('--pointer-y', `${round(pery)}%`);
        $card.style.setProperty('--pointer-°', `${round(angle)}deg`);
        $card.style.setProperty('--pointer-d', `${round(edge * 100)}`);

        setIsAnimating(false);
    }, [pointerPositionRelativeToElement, distanceFromCenter, closenessToEdge, angleFromPointerEvent]);

    // --- Intro Animation Functions ---
    const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
    const easeInCubic = (x) => x * x * x;

    const animateNumber = (options) => {
        const {
            startValue = 0,
            endValue = 100,
            duration = 1000,
            delay = 0,
            onUpdate = () => { },
            ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
            onEnd = () => { },
        } = options;

        const startTime = performance.now() + delay;

        function update() {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            const t = Math.min(elapsed / duration, 1);
            const easedValue = startValue + (endValue - startValue) * ease(t);

            onUpdate(easedValue);

            if (t < 1) {
                requestAnimationFrame(update);
            } else if (t >= 1) {
                onEnd();
            }
        }
        
        const timeoutId = setTimeout(() => {
            requestAnimationFrame(update);
        }, delay);

        return () => clearTimeout(timeoutId);
    };

    const playAnimation = useCallback(() => {
        const $card = cardRef.current;
        if (!$card) return;

        const angleStart = 110;
        const angleEnd = 465;
        const cleanupFns = [];

        $card.style.setProperty('--pointer-°', `${angleStart}deg`);
        setIsAnimating(true);

        // Animation 1: Animate pointer-d (distance to edge)
        cleanupFns.push(animateNumber({
            ease: easeOutCubic,
            duration: 500,
            onUpdate: (v) => { $card.style.setProperty('--pointer-d', v); }
        }));

        // Animation 2 & 3: Animate pointer-° (angle)
        cleanupFns.push(animateNumber({
            ease: easeInCubic,
            delay: 0,
            duration: 1500,
            endValue: 50,
            onUpdate: (v) => {
                const d = (angleEnd - angleStart) * (v / 100) + angleStart;
                $card.style.setProperty('--pointer-°', `${d}deg`);
            }
        }));

        cleanupFns.push(animateNumber({
            ease: easeOutCubic,
            delay: 1500,
            duration: 2250,
            startValue: 50,
            endValue: 100,
            onUpdate: (v) => {
                const d = (angleEnd - angleStart) * (v / 100) + angleStart;
                $card.style.setProperty('--pointer-°', `${d}deg`);
            }
        }));

        // Animation 4: Animate pointer-d (distance to edge) back to 0
        cleanupFns.push(animateNumber({
            ease: easeInCubic,
            duration: 1500,
            delay: 2500,
            startValue: 100,
            endValue: 0,
            onUpdate: (v) => { $card.style.setProperty('--pointer-d', v); },
            onEnd: () => { setIsAnimating(false); }
        }));
        
        return () => cleanupFns.forEach(fn => fn());
    }, []);

    // Effect for the intro animation and cleanup
    useEffect(() => {
        const animationCleanup = playAnimation();
        
        // Cleanup function for the animation timeouts
        return () => {
             if (animationCleanup) animationCleanup();
        };
    }, [playAnimation]);

    // Effect for the pointermove event listener and cleanup
    useEffect(() => {
        const $card = cardRef.current;
        if ($card) {
            $card.addEventListener("pointermove", cardUpdate);
        }

        return () => {
            if ($card) {
                $card.removeEventListener("pointermove", cardUpdate);
            }
        };
    }, [cardUpdate]);
    
    // In a real application, you might use an external stylesheet or CSS-in-JS.
    // Here, we inject the CSS into the <head> once for simplicity.
    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
        
        // Set up the body/html styles directly since we can't style outside the component's root
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
        document.body.style.margin = '0';
        
        return () => {
            document.head.removeChild(styleElement);
            // Revert body styles (optional, but good practice)
            document.body.style.height = '';
            document.body.style.overflow = '';
            document.body.style.margin = '';
        };
    }, []);


    return (
        <main id="app">
            <div className={`card ${isAnimating ? 'animating' : ''}`} ref={cardRef}>
                <span className="glow"></span>
                <div className="inner">
                    <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company</label>
                                <input type="text" id="company" name="company" />
                            </div>
                        </div>

                        <div className="message-field">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message"></textarea>
                        </div>

                        <div className="submit-button-container">
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </main>
    );
};

export default App;