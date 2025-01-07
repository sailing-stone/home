import { useState } from 'react';
import NavigationList from '@/component/common/navigation-list';
import URL from '@/constant/url';

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

const LocalNavigation = () => {
  const [activeText, setActiveText] = useState(
    SOLUTION_NAVIGATION_LIST[0].text,
  );

  const onNavigate = (text: string) => {
    setActiveText(text);

    document.getElementById(text)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavigationList
      list={SOLUTION_NAVIGATION_LIST}
      activeText={activeText}
      className='gap-12 px-40 py-10 text-[1.8rem] font-medium'
      onNavigate={onNavigate}
    />
  );
};

export default LocalNavigation;
