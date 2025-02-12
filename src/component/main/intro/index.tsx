import LogoText from '@/asset/image/logo-text.png';
import MainIntroImage_1 from '@/asset/image/main/main-intro_1.png';
import Image from '@/component/base/Image';
import Text from '@/component/base/text';

const Intro = () => {
  return (
    <section className='flex items-center justify-center gap-12 py-60 mobile:flex-col mobile:py-40 tablet:flex-col tablet:gap-20 tablet:py-52'>
      <Image
        objectFit='cover'
        src={MainIntroImage_1}
        alt='인트로'
        className='h-[49rem] w-[62rem] mobile:h-[38rem] mobile:w-[28.8rem] tablet:size-[48.7rem]'
      />
      <div className='flex flex-col gap-[3.2rem] mobile:gap-[1.6rem] tablet:gap-[2.4rem] desktop:self-end'>
        <div className='flex flex-col mobile:items-center tablet:items-center'>
          <Text
            as='h1'
            variant='title40'
            strong={700}
          >
            WITH
          </Text>
          <Image
            src={LogoText}
            alt='로고 텍스트'
            objectFit='contain'
            className='w-[25.4rem] mobile:w-80 tablet:w-[21rem]'
          />
        </div>
        <Text
          as='p'
          variant='title20'
          strong={500}
        >
          세일링스톤의 데이터 및 AI 솔루션을 통해
          <br /> 데이터에 대한 투자 성과를 확인해 보세요.
        </Text>
      </div>
    </section>
  );
};

export default Intro;
