import BannerVideo from '@/asset/video/contact-banner.mp4';
import Text from '@/component/base/text';

const Banner = () => {
  return (
    <section className='relative text-common-white'>
      <video
        src={BannerVideo}
        autoPlay
        loop
        preload='auto'
        playsInline
        muted
        className='max-h-[70rem] min-h-[50rem] w-full object-cover'
        style={{
          pointerEvents: 'none',
        }}
      />
      <div className='absolute inset-0 bg-black/70' />
      <div className='absolute bottom-16 flex flex-col gap-[4.5rem] px-40 mobile:bottom-[1.6rem] mobile:gap-8 mobile:px-[1.6rem] tablet:bottom-[2.4rem] tablet:gap-12 tablet:px-[2.4rem]'>
        <div>
          <Text
            as='h1'
            variant='title30'
            strong={500}
            className='text-common-white'
          >
            Contact Us
          </Text>
          <Text
            as='h2'
            variant='title70'
            strong={700}
            className='text-common-white'
          >
            문의하기
          </Text>
        </div>
        <Text
          as='p'
          variant='body20'
          strong={300}
          className='text-common-white'
        >
          세일링스톤만의 데이터 및 AI 솔루션에 대해 궁금하신 사항이 있으신가요?
          <br />
          문의 내응을 남겨주시면 담당자가 빠른 시일 내에 연락 드리겠습니다.
        </Text>
      </div>
    </section>
  );
};

export default Banner;
