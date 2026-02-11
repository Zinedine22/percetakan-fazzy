'use client';

import { useEffect } from 'react';

export default function ScrollDirectionProvider() {
  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const body = document.body;
          
          // Only apply scroll classes if scrolled more than 50px
          if (currentScrollTop > 50) {
            if (currentScrollTop > lastScrollTop) {
              // Scrolling down
              body.classList.add('scroll-down');
              body.classList.remove('scroll-up');
            } else if (currentScrollTop < lastScrollTop) {
              // Scrolling up
              body.classList.add('scroll-up');
              body.classList.remove('scroll-down');
            }
          } else {
            // Remove all scroll classes when at top
            body.classList.remove('scroll-up', 'scroll-down');
          }
          
          lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial scroll position
    lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}
