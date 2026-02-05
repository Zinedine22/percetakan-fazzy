'use client';

import { useEffect } from 'react';

export default function ScrollDirectionProvider() {
  useEffect(() => {
    let lastScrollTop = 0;
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const body = document.body;
      
      // Clear existing classes
      body.classList.remove('scroll-up', 'scroll-down');
      
      if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
        // Scrolling down
        body.classList.add('scroll-down');
      } else if (currentScrollTop < lastScrollTop) {
        // Scrolling up
        body.classList.add('scroll-up');
      }
      
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
      
      // Clear timer and set new one
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        // Remove scroll classes after scrolling stops
        body.classList.remove('scroll-up', 'scroll-down');
      }, 150);
    };

    // Initialize scroll detection with throttling
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return null; // This component doesn't render anything
}
