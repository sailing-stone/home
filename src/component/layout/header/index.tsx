import LogoWithTitle from '@/component/common/logo-with-title';
import GlobalNavigation from './global-navigation';

const Header = () => {
  return (
    <header className='fixed z-20 flex w-full items-center justify-between bg-common-white px-40 py-4 shadow-lg'>
      <LogoWithTitle />
      <GlobalNavigation />
    </header>
  );
};

export default Header;
