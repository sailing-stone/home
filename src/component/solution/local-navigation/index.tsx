import { twJoin } from 'tailwind-merge';
import NavigationList from '@/component/common/navigation-list';
import { SOLUTION_NAVIGATION_LIST } from '@/constant/navigation-list';
import { useLNBToggle } from '@/context/lnb-toggle-context';
import { useLocalNavigation } from '@/context/local-navigation-context';

const LocalNavigation = () => {
  const { navigationItem } = useLocalNavigation();
  const { isToggle } = useLNBToggle();

  return (
    <NavigationList
      list={SOLUTION_NAVIGATION_LIST}
      activeText={navigationItem}
      className={twJoin(
        'overflow-x-auto flex-nowrap sticky top-[6.5rem] gap-12 bg-common-white px-20 py-10 text-[1.8rem] font-medium shadow-lg',
        isToggle ? 'z-10' : 'z-20',
      )}
    />
  );
};

export default LocalNavigation;
