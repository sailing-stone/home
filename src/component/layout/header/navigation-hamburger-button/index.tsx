import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const NavigationHamburgerButton = ({ children, onClick }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavigationHamburgerButton;
