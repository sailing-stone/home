import { AnimatePresence, motion } from 'framer-motion';
import { twJoin } from 'tailwind-merge';
import Space from '@/component/base/space';
import LogoWithTitle from '@/component/common/logo-with-title';
import useClickAway from '@/hook/useClickAway';
import useHover from '@/hook/useHover';
import useToggle from '@/hook/useToggle';
import GlobalNavigation from './global-navigation';
import LocalNavigation from './local-navigation';

const Header = () => {
  const { ref: hoverRef, isHover } = useHover<HTMLHeadElement>();
  const { isToggle, handleToggle, handleSetFalse } = useToggle();
  const clickAwayRef = useClickAway(handleSetFalse);

  return (
    <>
      <header
        ref={(element) => {
          hoverRef.current = element;
          clickAwayRef.current = element;
        }}
        className={twJoin(
          'shadow-lg z-20 fixed w-full flex h-28 items-center justify-between px-40 transition-colors duration-500',
          isHover || isToggle ? 'bg-common-white' : 'bg-common-white',
        )}
      >
        <LogoWithTitle />
        <GlobalNavigation
          onClick={handleToggle}
          onNavigate={handleSetFalse}
        />
        <AnimatePresence>
          {isToggle && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='absolute left-0 top-28 z-20 flex w-full justify-between bg-common-white px-40 py-8 shadow-lg'
            >
              <Space className='w-[10.5rem]' />
              <LocalNavigation onNavigate={handleSetFalse} />
            </motion.section>
          )}
        </AnimatePresence>
      </header>
      <div className='h-28' />
    </>
  );
};

export default Header;
