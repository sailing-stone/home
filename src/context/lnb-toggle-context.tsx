import { createContext, ReactNode, useContext, useMemo } from 'react';
import useToggle from '@/hook/useToggle';

interface Props {
  children: ReactNode;
}

export const LNBToggleContext = createContext<{
  isToggle: boolean;
  handleSetFalse: () => void;
  handleSetTrue: () => void;
  handleToggle: () => void;
}>({
  isToggle: false,
  handleSetFalse: () => {},
  handleSetTrue: () => {},
  handleToggle: () => {},
});

export const useLNBToggle = () => useContext(LNBToggleContext);

export const LNBToggleProvider = ({ children }: Props) => {
  const { isToggle, handleSetFalse, handleSetTrue, handleToggle } = useToggle();

  const value = useMemo(
    () => ({ isToggle, handleSetFalse, handleSetTrue, handleToggle }),
    [isToggle, handleSetFalse, handleSetTrue, handleToggle],
  );

  return (
    <LNBToggleContext.Provider value={value}>
      {children}
    </LNBToggleContext.Provider>
  );
};
