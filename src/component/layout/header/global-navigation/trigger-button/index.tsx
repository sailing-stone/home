import { MouseEvent } from 'react';
import { twJoin } from 'tailwind-merge';
import Text from '@/component/base/text';
import Down from '@/component/common/icon/down.svg?react';
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
      <Text
        as='h3'
        variant='title16'
        strong={500}
        className={isActive ? 'text-primary-main' : 'text-common-black'}
      >
        {title}
      </Text>
      <Down />
      <NavigationList
        ref={ref}
        list={navigationList}
        activeText={navigationItem}
        variant='title16'
        strong={500}
        className={twJoin(
          'z-10 shadow-lg absolute left-0 top-20 flex-col items-start gap-6 text-nowrap rounded-[2rem] bg-common-white p-8',
          isActive ? 'flex' : 'hidden',
        )}
      />
    </button>
  );
};

export default TriggerButton;
