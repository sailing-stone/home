import { useLocation } from 'react-router-dom';
import NavigationList from '@/component/common/navigation-list';
import {
  GNB_LIST,
  SERVICE_NAVIGATION_LIST,
  SOLUTION_NAVIGATION_LIST,
} from '@/constant/navigation-list';
import AccordionTriggerButton from './accordion-trigger-button';

const ResponsiveGlobalNavigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className='absolute left-0 top-[6.5rem] z-10 flex max-h-[calc(100dvh-6.5rem)] w-screen touch-pan-y flex-col overflow-y-auto overscroll-contain border-t-2 bg-common-white py-8 shadow-lg mobile:gap-6 tablet:gap-8'>
      <AccordionTriggerButton
        title='서비스'
        navigationList={SERVICE_NAVIGATION_LIST}
      />
      <AccordionTriggerButton
        title='솔루션'
        navigationList={SOLUTION_NAVIGATION_LIST}
      />
      <NavigationList
        type='GNB'
        list={GNB_LIST}
        currentPathname={pathname}
        className='title-28 flex-col font-bold leading-[1.9rem] mobile:gap-6 tablet:gap-10'
      />
    </nav>
  );
};

export default ResponsiveGlobalNavigation;
