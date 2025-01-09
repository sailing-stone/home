import { AnimatePresence, motion } from 'framer-motion';
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
        <AnimatePresence>
          {isToggle && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='absolute left-0 top-28 z-10 flex w-full justify-between border-t border-common-black bg-common-white px-40 py-8'
            >
              <Space className='w-[10.5rem]' />
              <LocalNavigation onNavigate={handleSetFalse} />
            </motion.section>
          )}
        </AnimatePresence>
      </header>
      <div className='h-28 bg-header' />
    </>
  );
};

export default Header;
