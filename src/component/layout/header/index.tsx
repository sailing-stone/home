import { twJoin } from 'tailwind-merge';
import Space from '@/component/base/space';
import LogoWithTitle from '@/component/common/logo-with-title';
import useHover from '@/hook/useHover';
import useToggle from '@/hook/useToggle';
import GlobalNavigation from './global-navigation';
import LocalNavigation from './local-navigation';

const Header = () => {
  const { ref, isHover } = useHover<HTMLHeadElement>();
  const { isToggle, handleToggle, handleSetFalse } = useToggle();

  return (
    <>
      <header
        ref={ref}
        className={twJoin(
          'z-20 backdrop-blur-sm fixed w-full flex h-28 items-center justify-between px-40 transition-colors duration-500',
          isHover || isToggle ? 'bg-common-white' : 'bg-common-white/50',
        )}
      >
        <LogoWithTitle />
        <GlobalNavigation onClick={handleToggle} />
        <section
          className={twJoin(
            'z-10 py-8 px-40 justify-between absolute left-0 top-28 w-full bg-common-white',
            'shadow-[0_-4px_10px_-5px_rgba(0,0,0,0.1)]',
            isToggle ? 'flex' : 'hidden',
          )}
        >
          <Space className='w-[10.5rem]' />
          <LocalNavigation onNavigate={handleSetFalse} />
        </section>
      </header>
      <div className='h-28 bg-header' />
    </>
  );
};

export default Header;
