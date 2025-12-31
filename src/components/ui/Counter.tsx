'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function Counter({ end, duration = 2, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, hasBeenInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!hasBeenInView) return;

    let current = 0;
    const increment = end / (duration * 60);
    
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [hasBeenInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
