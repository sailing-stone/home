import Image from '@/component/base/Image';
import useCount from '@/hook/useCount';
import useInterval from '@/hook/useInterval';

const CONTENT = [
  {
    src: '/image/main/main-intro1.png',
    description: (
      <>
        세일링 스톤의 데이터 및 AI 솔루션을 통해
        <br /> 데이터에 대한 투자 성과를 확인해 보세요.
      </>
    ),
  },
  {
    src: '/image/main/main-intro2.png',
    description: (
      <>
        AI 기술과 함께 당신의 데이터에
        <br /> 가치를 더해 드립니다.
      </>
    ),
  },
];

const Intro = () => {
  const { count, increase } = useCount(CONTENT.length - 1);
  useInterval(increase, 3000);

  return (
    <section className='flex items-center justify-center gap-[5.1rem] pb-[27.2rem] pt-[11.2rem]'>
      <Image
        key={count}
        width='48.5rem'
        height='72.7rem'
        src={CONTENT[count].src}
        alt='인트로'
        lazy={false}
        className='animate-fadeIn'
      />
      <div className='flex w-[60rem] flex-col gap-[3.3rem] text-common-black'>
        <h3 className='text-[4rem] font-extrabold'>WITH SAILING STONE.</h3>
        <p
          key={count}
          className='animate-fadeIn text-[3.5rem] font-medium'
        >
          {CONTENT[count].description}
        </p>
      </div>
    </section>
  );
};

export default Intro;
