import { useCallback, useState } from 'react';

const useToggle = (initialState: boolean = false) => {
  const [isToggle, setIsToggle] = useState(initialState);

  const handleToggle = useCallback(() => setIsToggle((prev) => !prev), []);

  const handleSetTrue = useCallback(() => setIsToggle(true), []);

  const handleSetFalse = useCallback(() => setIsToggle(false), []);

  return { isToggle, handleToggle, handleSetTrue, handleSetFalse };
};

export default useToggle;
