'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  margin?: string;
}

export function useInView(options: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        setHasBeenInView(true);
        // Keep it visible after first trigger
        observer.unobserve(entry.target);
      } else {
        setIsInView(false);
      }
    }, {
      threshold: options.threshold ?? 0.2,
      rootMargin: options.margin ?? '0px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.margin]);

  return { ref, isInView, hasBeenInView };
}
