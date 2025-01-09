import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface Props {
  children: ReactNode;
}

export const LocalNavigationContext = createContext<{
  navigationItem: string;
  handleSetNavigationItem: (item: string) => void;
}>({
  navigationItem: '',
  handleSetNavigationItem: () => {},
});

export const useLocalNavigation = () => useContext(LocalNavigationContext);

export const LocalNavigationProvider = ({ children }: Props) => {
  const [navigationItem, setNavigationItem] = useState('');

  const handleSetNavigationItem = useCallback((item: string) => {
    setNavigationItem(item);
  }, []);

  const value = useMemo(
    () => ({ navigationItem, handleSetNavigationItem }),
    [navigationItem, handleSetNavigationItem],
  );

  return (
    <LocalNavigationContext.Provider value={value}>
      {children}
    </LocalNavigationContext.Provider>
  );
};
