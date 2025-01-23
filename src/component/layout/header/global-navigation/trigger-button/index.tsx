import { MouseEvent } from 'react';
import { twJoin } from 'tailwind-merge';
import DownIcon from '@/component/common/icon/down-icon';
import NavigationList from '@/component/common/navigation-list';
import { useLocalNavigation } from '@/context/local-navigation-context';
import useClickAway from '@/hook/useClickAway';

interface Props {
  isActive: boolean;
  title: string;
  navigationList: {
    id: number | string;
    href: string;
    text: string;
    hash?: string;
  }[];
  onClick: (event: MouseEvent<HTMLButtonElement>, domain: string) => void;
  onClose: () => void;
}

const TriggerButton = ({
  isActive,
  title,
  navigationList,
  onClick,
  onClose,
}: Props) => {
  const { navigationItem } = useLocalNavigation();
  const ref = useClickAway<HTMLUListElement>(() => {
    if (!isActive) {
      onClose();
    }
  });

  return (
    <button
      type='button'
      className='relative flex shrink-0 items-center gap-[0.7rem]'
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        onClick(event, title);
      }}
    >
      {title}
      <DownIcon />
      <NavigationList
        ref={ref}
        list={navigationList}
        activeText={navigationItem}
        className={twJoin(
          'shadow-lg absolute left-0 top-20 z-10 flex-col items-start gap-6 text-nowrap rounded-[2rem] bg-common-white p-8',
          isActive ? 'flex' : 'hidden',
        )}
      />
    </button>
  );
};

export default TriggerButton;
