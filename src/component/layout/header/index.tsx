import Hamburger from '@/component/common/icon/delete.svg?react';
import Delete from '@/component/common/icon/hamburger.svg?react';
import LogoWithTitle from '@/component/common/logo-with-title';
import DEVICE_UNIT_PX from '@/constant/device-unit';
import { useLNBToggle } from '@/context/lnb-toggle-context';
import useResponsive from '@/hook/useResponsive';
import GlobalNavigation from './global-navigation';
import NavigationHamburgerButton from './navigation-hamburger-button';
import ResponsiveGlobalNavigation from './responsive-global-navigation';

const Header = () => {
  const isMatch = useResponsive(DEVICE_UNIT_PX.TABLET);
  const { isToggle, handleToggle } = useLNBToggle();

  return (
    <header className='fixed z-20 flex h-[6.5rem] w-full items-center justify-between bg-common-white px-40 py-4 shadow-lg mobile:px-[2.4rem] tablet:px-[2.4rem]'>
      <LogoWithTitle className='h-[4.5rem] w-[10.6rem]' />
      {!isMatch && <GlobalNavigation />}
      {isMatch && (
        <NavigationHamburgerButton onClick={handleToggle}>
          {isToggle ? <Hamburger /> : <Delete />}
        </NavigationHamburgerButton>
      )}
      {isToggle && isMatch && <ResponsiveGlobalNavigation />}
    </header>
  );
};

export default Header;
