import { useState } from 'react';
import NavigationList from '@/component/common/navigation-list';
import URL from '@/constant/url';

const SERVICE_NAVIGATION_LIST = [
  { id: 1, text: 'BI 컨설팅', href: URL.SERVICE },
  { id: 2, text: 'Self-BI 교육 지원', href: URL.SERVICE },
  { id: 3, text: 'Tableau Expertise 서비스', href: URL.SERVICE },
  { id: 4, text: '태블로 생성형 AI 기반 BI 서비스', href: URL.SERVICE },
];

const LocalNavigation = () => {
  const [activeText, setActiveText] = useState(SERVICE_NAVIGATION_LIST[0].text);

  const onNavigate = (text: string) => {
    setActiveText(text);

    document.getElementById(text)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavigationList
      list={SERVICE_NAVIGATION_LIST}
      activeText={activeText}
      className='gap-12 px-40 py-10 text-[1.8rem] font-medium'
      onNavigate={onNavigate}
    />
  );
};

export default LocalNavigation;
