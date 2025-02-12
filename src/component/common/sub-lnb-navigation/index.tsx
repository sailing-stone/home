import { twJoin } from 'tailwind-merge';
import { useLNBToggle } from '@/context/lnb-toggle-context';
import { useLocalNavigation } from '@/context/local-navigation-context';
import NavigationList from '../navigation-list';

interface Props {
  navigationList: {
    id: number;
    hash?: string;
    text: string;
    href: string;
  }[];
}

const SubLNBNavigation = ({ navigationList }: Props) => {
  const { navigationItem } = useLocalNavigation();
  const { isToggle } = useLNBToggle();

  return (
    <NavigationList
      list={navigationList}
      activeText={navigationItem}
      className={twJoin(
        'overflow-x-auto flex-nowrap sticky top-[6.5rem] gap-12 bg-common-white px-[10rem] tablet:px-[2.4rem] mobile:px-[1.6rem] py-[2rem] shadow-lg',
        isToggle ? 'z-10' : 'z-20',
      )}
    />
  );
};

export default SubLNBNavigation;
