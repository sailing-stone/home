import { ReactNode } from 'react';

interface Props {
  isVisible: boolean;
  children: ReactNode;
}

const VisibleGuard = ({ isVisible, children }: Props) => {
  if (!isVisible) {
    return null;
  }

  return children;
};

export default VisibleGuard;
