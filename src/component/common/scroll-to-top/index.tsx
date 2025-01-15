import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_HEIGHT_PX = 140;

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollTarget = document.querySelector(hash);

      if (scrollTarget) {
        setTimeout(() => {
          const rect = scrollTarget.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;

          window.scrollTo({
            top: absoluteTop - HEADER_HEIGHT_PX,
            behavior: 'smooth',
          });
        }, 150);
      }

      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
