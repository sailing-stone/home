import NavigationList from '@/component/common/navigation-list';

const SERVICE_NAVIGATION_LIST = [
  { id: 1, text: 'BI 컨설팅', href: '/' },
  { id: 2, text: 'Self-BI 교육 지원', href: '/' },
  { id: 3, text: 'Tableau Expertise 서비스', href: '/' },
  { id: 4, text: '태블로 생성형 AI 기반 BI 서비스', href: '/' },
];

const LocalNavigation = () => {
  return (
    <NavigationList
      list={SERVICE_NAVIGATION_LIST}
      className='gap-12 px-40 py-12 text-[1.8rem] font-medium'
    />
  );
};

export default LocalNavigation;
