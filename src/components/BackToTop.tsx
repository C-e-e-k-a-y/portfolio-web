import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackToTopProps {
  /** 
   * If your scrollbar belongs to a specific container (like your h-screen div),
   * pass its ref or ID here. Defaults to window scroll.
   */
  containerId?: string;
}

export default function BackToTop({ containerId }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Determine target element (either custom overflow div or window)
    const targetElement = containerId 
      ? document.getElementById(containerId) 
      : window;

    if (!targetElement) return;

    const handleScroll = () => {
      // Get scrolled amount depending on whether it's an element or window
      const scrollTop = containerId && targetElement instanceof HTMLElement
        ? targetElement.scrollTop
        : window.scrollY;

      // Show button after scrolling down 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    targetElement.addEventListener('scroll', handleScroll);
    return () => targetElement.removeEventListener('scroll', handleScroll);
  }, [containerId]);

  const scrollToTop = () => {
    const targetElement = containerId 
      ? document.getElementById(containerId) 
      : window;

    if (targetElement) {
      targetElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 backdrop-blur-sm transition-colors focus:outline-none"
        >
          {/* Up Arrow Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}