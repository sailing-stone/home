import Image from '@/component/base/Image';

const Intro = () => {
  return (
    <section className='flex items-center justify-center gap-[5.1rem] pb-[27.2rem] pt-[11.2rem]'>
      <Image
        width='48.5rem'
        height='72.7rem'
        src='/image/main/main-intro.png'
        alt='인트로'
        lazy={false}
      />
      <div className='flex flex-col gap-[3.3rem] text-common-black'>
        <h3 className='text-[4rem] font-extrabold'>WITH SAILING STONE.</h3>
        <p className='text-[3.5rem] font-medium'>
          세일링 스톤의 데이터 및 AI 솔루션을 통해
          <br /> 데이터에 대한 투자 성과를 확인해 보세요.
        </p>
      </div>
    </section>
  );
};

export default Intro;
