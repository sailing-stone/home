import { useState } from 'react';
import NavigationList from '@/component/common/navigation-list';
import URL from '@/constant/url';

const SERVICE_NAVIGATION_LIST = [
  { id: 1, text: 'BI 컨설팅', href: URL.SERVICE },
  { id: 2, text: 'Self-BI 교육 지원', href: URL.SERVICE },
  { id: 3, text: 'Tableau Expertise 서비스', href: URL.SERVICE },
  { id: 4, text: '태블로 생성형 AI 기반 BI 서비스', href: URL.SERVICE },
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

interface Props {
  onNavigate: () => void;
}

const LocalNavigation = ({ onNavigate }: Props) => {
  const [activeText, setActiveText] = useState(SERVICE_NAVIGATION_LIST[0].text);

  const handleOnNavigate = (text: string) => {
    onNavigate();
    setActiveText(text);

    document.getElementById(text)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex h-full gap-[3.3rem] text-[1.5rem] font-medium'>
      <NavigationList
        list={SERVICE_NAVIGATION_LIST}
        className='flex-col items-start gap-4'
        activeText={activeText}
        onNavigate={onNavigate}
      />
      <NavigationList
        list={SOLUTION_NAVIGATION_LIST}
        className='flex-col items-start gap-4'
        activeText={activeText}
        onNavigate={handleOnNavigate}
      />
    </div>
  );
};

export default LocalNavigation;
