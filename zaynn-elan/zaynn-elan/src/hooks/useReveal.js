import { useEffect, useRef, useState } from 'react';

/**
 * Adds a scroll-triggered reveal animation to an element via IntersectionObserver.
 * Returns a ref to attach and a boolean for whether the element is in view.
 * Falls back gracefully (always visible) if IntersectionObserver is unavailable.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
