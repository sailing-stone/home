import { twJoin } from 'tailwind-merge';
import Space from '@/component/base/space';
import LogoWithTitle from '@/component/common/logo-with-title';
import useToggle from '@/hook/useToggle';
import GlobalNavigation from './global-navigation';
import LocalNavigation from './local-navigation';

const Header = () => {
  const { isToggle, handleToggle } = useToggle();

  return (
    <header className='relative flex h-28 items-center justify-between bg-header px-40'>
      <LogoWithTitle />
      <GlobalNavigation onClick={handleToggle} />
      <section
        className={twJoin(
          'px-40 flex items-center justify-between transition-height duration-300 ease-in-out absolute left-0 top-28 h-[31.4rem] w-full bg-common-white overflow-y-hidden',
          isToggle ? 'h-[31.4rem]' : 'h-0',
        )}
      >
        <Space className='w-[10.5rem]' />
        <div className='flex gap-60'>
          <LocalNavigation />
          <Space className='w-[6.6rem]' />
          <Space className='w-[6.2rem]' />
          <Space className='w-[6.2rem]' />
        </div>
      </section>
    </header>
  );
};

export default Header;
