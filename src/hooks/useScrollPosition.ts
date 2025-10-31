import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position
 * Used for sticky header transparency effect
 * @param threshold - Scroll position threshold to trigger state change
 */
export const useScrollPosition = (threshold: number = 50): boolean => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const isScrolled = window.scrollY > threshold;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, threshold]);

  return scrolled;
};
