import MainIntroImage_1 from '@/asset/image/main/main-intro_1.png';
import Image from '@/component/base/Image';

const Intro = () => {
  return (
    <section className='flex items-center justify-center gap-12 py-60 mobile:flex-col mobile:py-32 tablet:py-40'>
      <div className='flex flex-col gap-[3.2rem] self-end text-right text-common-black mobile:gap-[1.6rem] mobile:self-center'>
        <h3 className='title-40 font-bold leading-[4.8rem] mobile:leading-[2.9rem] tablet:leading-[4.2rem]'>
          WITH <br />
          SAILING STONE
        </h3>
        <p className='title-28 font-medium leading-[3.3rem] mobile:leading-[1.9rem] tablet:leading-[2.9rem]'>
          세일링 스톤의 데이터 및 AI 솔루션을 통해
          <br /> 데이터에 대한 투자 성과를 확인해 보세요.
        </p>
      </div>
      <Image
        objectFit='cover'
        src={MainIntroImage_1}
        alt='인트로'
        className='h-[48.rem] w-[59.7rem] mobile:h-[38rem] mobile:w-[28.8rem] tablet:h-[48.7rem] tablet:w-[27.7rem]'
      />
    </section>
  );
};

export default Intro;
