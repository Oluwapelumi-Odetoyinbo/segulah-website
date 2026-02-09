import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Custom hook for GSAP animations with proper React cleanup
 * @param {Function} callback - Animation setup function that receives gsap and context
 * @param {Array} dependencies - Dependency array for re-running animations
 */
export const useGSAP = (callback, dependencies = []) => {
  const contextRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    // Create GSAP context for proper cleanup
    contextRef.current = gsap.context(() => {
      callback(gsap, contextRef.current);
    });

    // Cleanup on unmount or dependency change
    return () => {
      if (contextRef.current) {
        contextRef.current.revert();
      }
    };
  }, dependencies);

  return contextRef;
};

/**
 * Hook for ScrollTrigger-based reveal animations
 * @param {Object} options - Animation options
 */
export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);

  const {
    from = { opacity: 0, y: 60 },
    to = { opacity: 1, y: 0 },
    duration = 0.8,
    ease = 'power2.out',
    start = 'top 80%',
    once = true,
    delay = 0,
  } = options;

  useIsomorphicLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.set(element, from);

    const animation = gsap.to(element, {
      ...to,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return elementRef;
};

/**
 * Hook for staggered children animations
 * @param {Object} options - Animation options
 */
export const useStaggerReveal = (options = {}) => {
  const containerRef = useRef(null);

  const {
    childSelector = ':scope > *',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    duration = 0.6,
    stagger = 0.1,
    ease = 'power2.out',
    start = 'top 80%',
    once = true,
  } = options;

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll(childSelector);
    if (!children.length) return;

    gsap.set(children, from);

    const animation = gsap.to(children, {
      ...to,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return containerRef;
};

/**
 * Create a timeline-based animation sequence
 * @param {HTMLElement} trigger - Trigger element for ScrollTrigger
 * @param {Object} options - ScrollTrigger options
 * @returns {gsap.core.Timeline}
 */
export const createScrollTimeline = (trigger, options = {}) => {
  const {
    start = 'top 80%',
    once = true,
    ...rest
  } = options;

  return gsap.timeline({
    scrollTrigger: {
      trigger,
      start,
      toggleActions: once ? 'play none none none' : 'play reverse play reverse',
      ...rest,
    },
  });
};

// Export gsap and ScrollTrigger for direct usage
export { gsap, ScrollTrigger };

export default useGSAP;
