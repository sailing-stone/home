import DownIcon from '@/component/common/icon/down-icon';
import NavigationList from '@/component/common/navigation-list';

const GNB_LIST = [
  { id: 1, href: '/', text: '회사 소개' },
  { id: 2, href: '/', text: '리쿠르트' },
  { id: 3, href: '/', text: '문의하기' },
];

interface Props {
  onClick: () => void;
}

const GlobalNavigation = ({ onClick }: Props) => {
  return (
    <nav className='relative flex gap-60 text-[1.8rem] font-medium'>
      <button
        type='button'
        className='flex shrink-0 items-center'
        onClick={onClick}
      >
        서비스
        <DownIcon />
      </button>
      <button
        type='button'
        className='flex shrink-0 items-center'
        onClick={onClick}
      >
        솔루션
        <DownIcon />
      </button>
      <NavigationList list={GNB_LIST} />
    </nav>
  );
};

export default GlobalNavigation;
