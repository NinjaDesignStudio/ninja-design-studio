/**
 * Effects Components
 * 
 * Award-winning visual effects and interactions.
 * Import from here for clean imports.
 * 
 * @example
 * import { SmoothScroll, AdvancedCursor } from '../components/effects';
 */

// Core effects (add to layout)
export { default as SmoothScroll } from './SmoothScroll.astro';
export { default as AdvancedCursor } from './AdvancedCursor.astro';
export { default as MagneticElements } from './MagneticElements.astro';
export { default as NoiseTexture } from './NoiseTexture.astro';
export { default as EnhancedPreloader } from './EnhancedPreloader.astro';
export { default as PageTransitions } from '../PageTransitions.astro';

// Section effects
export { default as GradientMesh } from './GradientMesh.astro';
export { default as Marquee } from './Marquee.astro';
export { default as HorizontalShowcase } from './HorizontalShowcase.astro';

/**
 * Usage Guide:
 * 
 * 1. Add these to your layout for site-wide effects:
 *    - SmoothScroll (Lenis + GSAP animations)
 *    - AdvancedCursor (custom cursor)
 *    - MagneticElements (magnetic hover)
 *    - NoiseTexture (grain overlay)
 *    - EnhancedPreloader (loading animation)
 * 
 * 2. Add classes to elements for animations:
 *    - .gsap-reveal - Fade up
 *    - .gsap-reveal-left - Slide from left
 *    - .gsap-reveal-right - Slide from right
 *    - .gsap-reveal-scale - Scale up
 *    - .gsap-stagger - Stagger children
 *    - .gsap-parallax - Parallax effect
 *    - .gsap-text-reveal - Word-by-word reveal
 *    - .gsap-chars-reveal - Character reveal
 *    - .gsap-line-reveal - Clip reveal
 *    - .gsap-counter - Animated counter
 * 
 * 3. Add data attributes for cursor:
 *    - data-cursor="expand" - Expand cursor
 *    - data-cursor="view" - Show "View" text
 *    - data-cursor="drag" - Show "Drag" text
 *    - data-cursor="play" - Show play icon
 *    - data-cursor="link" - Show arrow
 *    - data-cursor-text="Custom" - Custom text
 *    - data-cursor-invert - Invert on light bg
 *    - data-cursor-hide - Hide cursor
 * 
 * 4. Add .magnetic or .magnetic-strong for hover pull effect
 */
