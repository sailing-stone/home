import { AnimatePresence, motion } from 'framer-motion';
import { twJoin } from 'tailwind-merge';
import MainIntroImage_1 from '@/asset/image/main/main-intro_1.png';
import MainIntroImage_2 from '@/asset/image/main/main-intro_2.png';
import Image from '@/component/base/Image';
import useCount from '@/hook/useCount';
import useInterval from '@/hook/useInterval';

const CONTENT = [
  <>
    세일링 스톤의 데이터 및 AI 솔루션을 통해
    <br /> 데이터에 대한 투자 성과를 확인해 보세요.
  </>,
  <>
    AI 기술과 함께 당신의 데이터에
    <br /> 가치를 더해 드립니다.
  </>,
];

const Intro = () => {
  const { count, increase } = useCount(CONTENT.length - 1);
  useInterval(increase, 3000);

  return (
    <section className='flex items-center justify-center gap-[5.1rem] pb-[27.2rem] pt-[11.2rem]'>
      <Image
        width='48.5rem'
        height='72.7rem'
        src={MainIntroImage_1}
        alt='인트로'
        className={twJoin('animate-fadeIn', count === 0 ? 'block' : 'hidden')}
      />
      <Image
        width='48.5rem'
        height='72.7rem'
        src={MainIntroImage_2}
        alt='인트로'
        className={twJoin('animate-fadeIn', count === 1 ? 'block' : 'hidden')}
      />
      <div className='flex w-[60rem] flex-col gap-[3.3rem] text-common-black'>
        <h3 className='text-[4rem] font-extrabold'>WITH SAILING STONE</h3>
        <div className='relative'>
          <AnimatePresence>
            <motion.p
              key={count}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='absolute text-[3.5rem] font-medium'
            >
              {CONTENT[count]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Intro;
