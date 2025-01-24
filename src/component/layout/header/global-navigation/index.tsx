import { useState, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationList from '@/component/common/navigation-list';
import {
  GNB_LIST,
  SERVICE_NAVIGATION_LIST,
  SOLUTION_NAVIGATION_LIST,
} from '@/constant/navigation-list';
import TriggerButton from './trigger-button';

const GlobalNavigation = () => {
  const { pathname } = useLocation();
  const [activeButton, setActiveButton] = useState('');

  const handleOnClick = (
    event: MouseEvent<HTMLButtonElement>,
    domain: string,
  ) => {
    event.stopPropagation();
    if (domain === activeButton) {
      return setActiveButton('');
    }

    setActiveButton(domain);
  };

  const handleOnClose = () => {
    setActiveButton('');
  };

  return (
    <nav className='title-16 relative flex gap-20 font-medium leading-[1.9rem]'>
      <TriggerButton
        title='서비스'
        isActive={activeButton === '서비스'}
        navigationList={SERVICE_NAVIGATION_LIST}
        onClick={handleOnClick}
        onClose={handleOnClose}
      />
      <TriggerButton
        title='솔루션'
        isActive={activeButton === '솔루션'}
        navigationList={SOLUTION_NAVIGATION_LIST}
        onClick={handleOnClick}
        onClose={handleOnClose}
      />
      <NavigationList
        type='GNB'
        list={GNB_LIST}
        currentPathname={pathname}
      />
    </nav>
  );
};

export default GlobalNavigation;
