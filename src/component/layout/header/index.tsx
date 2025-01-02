import LogoWithTitle from '@/component/common/logo-with-title';
import GlobalNavigation from './global-navigation';

const Header = () => {
  return (
    <header className='flex h-28 items-center justify-between bg-header px-40'>
      <LogoWithTitle />
      <GlobalNavigation />
    </header>
  );
};

export default Header;
