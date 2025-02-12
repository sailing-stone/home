import { useState, useEffect, useCallback } from 'react';
import DEVICE_UNIT_PX from '@/constant/device-unit';

const useResponsive = (width: number = DEVICE_UNIT_PX.MOBILE) => {
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
