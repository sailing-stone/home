import { useState, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationList from '@/component/common/navigation-list';
import URL from '@/constant/url';
import TriggerButton from './trigger-button';

const SERVICE_NAVIGATION_LIST = [
  { id: 1, hash: 'consulting', text: 'BI 컨설팅', href: URL.SERVICE },
  { id: 2, hash: 'education', text: 'Self-BI 교육 지원', href: URL.SERVICE },
  { id: 3, hash: 'TBD', text: 'Tableau Expertise 서비스', href: URL.SERVICE },
  {
    id: 4,
    hash: 'AI',
    text: '태블로 생성형 AI 기반 BI 서비스',
    href: URL.SERVICE,
  },
];

const SOLUTION_NAVIGATION_LIST = [
  { id: 1, text: '데이터 AI 포털', href: URL.SOLUTION },
  { id: 2, text: '대시보드 on TV', href: URL.SOLUTION },
  { id: 3, text: 'AI Agent', href: URL.SOLUTION },
  { id: 4, text: '데이터 프랩', href: URL.SOLUTION },
  { id: 5, text: 'Stone Excel', href: URL.SOLUTION },
  { id: 6, text: '웹 / 모바일', href: URL.SOLUTION },
  { id: 7, text: '커스텀 데이터 커넥터', href: URL.SOLUTION },
  { id: 8, text: 'RPA', href: URL.SOLUTION },
  { id: 9, text: 'Tableau Extension', href: URL.SOLUTION },
];

const GNB_LIST = [
  { id: 1, href: URL.MAIN, text: '회사 소개' },
  { id: 2, href: URL.RECRUIT, text: '리쿠르트' },
  { id: 3, href: URL.CONTACT, text: '문의' },
];

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
    <nav className='relative flex gap-20 text-[1.8rem] font-medium leading-[2.1rem]'>
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
