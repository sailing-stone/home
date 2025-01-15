import { useLocation } from 'react-router-dom';
import NavigationList from '@/component/common/navigation-list';
import URL from '@/constant/url';
import { useLNBToggle } from '@/context/lnb-toggle-context';
import TriggerButton from './trigger-button';

const GNB_LIST = [
  { id: 1, href: URL.MAIN, text: '회사 소개' },
  { id: 2, href: URL.RECRUIT, text: '리쿠르트' },
  { id: 3, href: URL.CONTACT, text: '문의' },
];

const GlobalNavigation = () => {
  const { pathname } = useLocation();
  const { handleToggle } = useLNBToggle();

  return (
    <nav className='relative flex gap-60 text-[1.8rem] font-medium leading-[2.1rem]'>
      <TriggerButton onClick={handleToggle}>서비스</TriggerButton>
      <TriggerButton onClick={handleToggle}>솔루션</TriggerButton>
      <NavigationList
        type='GNB'
        list={GNB_LIST}
        currentPathname={pathname}
      />
    </nav>
  );
};

export default GlobalNavigation;
