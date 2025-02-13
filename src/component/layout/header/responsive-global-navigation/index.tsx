import { useLocation } from 'react-router-dom';
import Text from '@/component/base/text';
import NavigationList from '@/component/common/navigation-list';
import {
  GNB_LIST,
  SERVICE_NAVIGATION_LIST,
  // SOLUTION_NAVIGATION_LIST,
} from '@/constant/navigation-list';
import { useLocalNavigation } from '@/context/local-navigation-context';
import useClickAway from '@/hook/useClickAway';

interface Props {
  onClickAway: () => void;
}

const ResponsiveGlobalNavigation = ({ onClickAway }: Props) => {
  const { pathname } = useLocation();
  const ref = useClickAway(onClickAway);
  const { navigationItem } = useLocalNavigation();

  return (
    <nav
      ref={ref}
      className='absolute left-0 top-[6.5rem] z-10 flex max-h-[calc(100dvh-6.5rem)] w-screen touch-pan-y flex-col gap-12 overflow-y-auto overscroll-contain border-t bg-common-white px-8 py-12 shadow-lg'
    >
      <div className='flex flex-col gap-4'>
        <Text
          as='h3'
          variant='title26'
          strong={700}
        >
          서비스
        </Text>
        <NavigationList
          list={SERVICE_NAVIGATION_LIST}
          activeText={navigationItem}
          className='flex-col gap-[1.7rem] pl-8 text-gray-500'
          variant='title20'
          strong={500}
        />
      </div>
      {/* <div className='flex flex-col gap-4'> */}
      {/* <Text
          as='h3'
          variant='title26'
          strong={700}
        >
          솔루션
        </Text>
        <NavigationList
          list={SOLUTION_NAVIGATION_LIST}
          activeText={navigationItem}
          className='flex-col gap-[1.7rem] pl-8 text-gray-500'
          variant='title20'
          strong={500}
        /> */}
      {/* </div> */}
      <NavigationList
        type='GNB'
        list={GNB_LIST}
        currentPathname={pathname}
        className='flex-col gap-12'
        variant='title26'
        strong={700}
      />
    </nav>
  );
};

export default ResponsiveGlobalNavigation;
