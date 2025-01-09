import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocalNavigation } from '@/context/local-navigation-context';

const useIntersectingNavigation = (navigationItem: string) => {
  const { handleSetNavigationItem } = useLocalNavigation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      handleSetNavigationItem(navigationItem);
    }
  }, [inView, handleSetNavigationItem, navigationItem]);

  return ref;
};

export default useIntersectingNavigation;
