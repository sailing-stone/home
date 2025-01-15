import { useLocation } from 'react-router-dom';
import NavigationList from '@/component/common/navigation-list';
import URL from '@/constant/url';
import TriggerButton from './trigger-button';

const GNB_LIST = [
  { id: 1, href: URL.MAIN, text: '회사 소개' },
  { id: 2, href: URL.RECRUIT, text: '리쿠르트' },
  { id: 3, href: URL.CONTACT, text: '문의' },
];

interface Props {
  onClick: () => void;
  onNavigate?: () => void;
}

const GlobalNavigation = ({ onClick, onNavigate }: Props) => {
  const { pathname } = useLocation();

  return (
    <nav className='relative flex gap-60 text-[1.8rem] font-medium leading-[2.1rem]'>
      <TriggerButton onClick={onClick}>서비스</TriggerButton>
      <TriggerButton onClick={onClick}>솔루션</TriggerButton>
      <NavigationList
        type='GNB'
        list={GNB_LIST}
        currentPathname={pathname}
        onNavigate={onNavigate}
      />
    </nav>
  );
};

export default GlobalNavigation;
