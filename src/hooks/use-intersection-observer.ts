
"use client";

import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver(
  elements: (Element | null)[],
  options?: IntersectionObserverInit
): IntersectionObserverEntry[] {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    const { current: currentObserver } = observer;

    elements.forEach(el => {
      if (el) {
        currentObserver.observe(el);
      }
    });

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [elements, options]);

  return entries;
}
