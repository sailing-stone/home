import { useCallback, useState } from 'react';

const useCount = (limit: number) => {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((prev) => {
      const nextCount = prev + 1;

      if (nextCount > limit) {
        return 0;
      }

      return nextCount;
    });
  }, [limit]);

  const decrease = useCallback(() => {
    setCount((prev) => {
      const nextCount = prev - 1;

      if (nextCount < 0) {
        return limit;
      }

      return nextCount;
    });
  }, [limit]);

  return { count, increase, decrease };
};

export default useCount;
