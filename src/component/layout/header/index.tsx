import { AnimatePresence, motion } from 'framer-motion';
import { twJoin } from 'tailwind-merge';
import Space from '@/component/base/space';
import LogoWithTitle from '@/component/common/logo-with-title';
import { useLNBToggle } from '@/context/lnb-toggle-context';
import useClickAway from '@/hook/useClickAway';
import GlobalNavigation from './global-navigation';
import LocalNavigation from './local-navigation';

const Header = () => {
  const { isToggle, handleSetFalse } = useLNBToggle();
  const ref = useClickAway(handleSetFalse);

  return (
    <>
      <header
        ref={ref}
        className={twJoin(
          'fixed z-20 flex h-28 w-full items-center justify-between bg-common-white px-40 transition-colors duration-500',
          !isToggle && 'shadow-lg',
        )}
      >
        <LogoWithTitle />
        <GlobalNavigation />
        <AnimatePresence>
          {isToggle && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='absolute left-0 top-28 flex w-full justify-between bg-common-white px-40 py-8 shadow-lg'
            >
              <Space className='w-[10.5rem]' />
              <LocalNavigation />
            </motion.section>
          )}
        </AnimatePresence>
      </header>
      <div className='h-28' />
    </>
  );
};

export default Header;
