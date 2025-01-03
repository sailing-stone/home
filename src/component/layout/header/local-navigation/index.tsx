import NavigationList from '@/component/common/navigation-list';

const SERVICE_NAVIGATION_LIST = [
  { id: 1, text: 'BI 컨설팅', href: '/' },
  { id: 2, text: 'Self-BI 교육 지원', href: '/' },
  { id: 3, text: 'Tableau Expertise 서비스', href: '/' },
  { id: 4, text: '태블로 생성형 AI 기반 BI 서비스', href: '/' },
];

const SOLUTION_NAVIGATION_LIST = [
  { id: 1, text: '데이터 AI 포털', href: '/' },
  { id: 2, text: '대시보드 on TV', href: '/' },
  { id: 3, text: 'AI Agent', href: '/' },
  { id: 4, text: '데이터 프랩', href: '/' },
  { id: 5, text: 'Stone Excel', href: '/' },
  { id: 6, text: '웹 / 모바일', href: '/' },
  { id: 7, text: '커스텀 데이터 커넥터', href: '/' },
  { id: 8, text: 'RPA', href: '/' },
  { id: 9, text: 'Tableau Extension', href: '/' },
];

const LocalNavigation = () => {
  return (
    <div className='flex h-full gap-12 text-[1.5rem] font-medium'>
      <NavigationList
        list={SERVICE_NAVIGATION_LIST}
        className='flex-col items-start gap-4'
      />
      <NavigationList
        list={SOLUTION_NAVIGATION_LIST}
        className='flex-col items-start gap-4'
      />
    </div>
  );
};

export default LocalNavigation;
