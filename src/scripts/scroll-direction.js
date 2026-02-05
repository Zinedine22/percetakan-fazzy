// Scroll Direction Detection Script
let lastScrollTop = 0;
let scrollTimer = null;

function handleScroll() {
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
}

// Initialize scroll detection
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Initial check
  handleScroll();
}

export default handleScroll;
