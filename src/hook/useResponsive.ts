import { useState, useEffect, useCallback } from 'react';

const useResponsive = (width: number = 768) => {
  const [isMatch, setIsMatch] = useState(() => window.innerWidth <= width);

  const handleResize = useCallback(() => {
    setIsMatch(window.innerWidth <= width);
  }, [width]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return isMatch;
};

export default useResponsive;
