import { twJoin } from 'tailwind-merge';
import NavigationList from '@/component/common/navigation-list';
import URL from '@/constant/url';
import { useLNBToggle } from '@/context/lnb-toggle-context';
import { useLocalNavigation } from '@/context/local-navigation-context';

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

const LocalNavigation = () => {
  const { navigationItem } = useLocalNavigation();
  const { isToggle } = useLNBToggle();

  return (
    <NavigationList
      list={SERVICE_NAVIGATION_LIST}
      activeText={navigationItem}
      className={twJoin(
        'sticky top-28 gap-12 bg-common-white px-40 py-10 text-[1.8rem] font-medium shadow-lg',
        isToggle ? 'z-10' : 'z-20',
      )}
    />
  );
};

export default LocalNavigation;
