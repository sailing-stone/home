import { ReactNode } from 'react';
import DownIcon from '@/component/common/icon/down-icon';

interface Props {
  onClick: () => void;
  children: ReactNode;
}

const TriggerButton = ({ onClick, children }: Props) => {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <button
      type='button'
      className='flex shrink-0 items-center'
      onClick={handleOnClick}
    >
      {children}
      <DownIcon />
    </button>
  );
};

export default TriggerButton;
