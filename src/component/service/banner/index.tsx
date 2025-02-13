import BannerVideo from '@/asset/video/service-banner.mp4';
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
          >
            서비스
          </Text>
          <Text
            as='h2'
            variant='title70'
            strong={700}
          >
            Tableau와 함께하는 <br className='hidden mobile:block' />
            데이터 혁신
          </Text>
        </div>
        <div>
          <Text
            as='p'
            variant='body20'
            strong={300}
          >
            세일링스톤은 Tableau를 통해 직관적인 데이터 인사이트를 제공하는
            전문가 팀입니다.
          </Text>
          <Text
            as='p'
            variant='body20'
            strong={300}
          >
            비즈니스 목표에 맞춘 신속하고 정확한 데이터 분석으로 고객의 데이터
            기반 의사 결정을 지원합니다.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Banner;
