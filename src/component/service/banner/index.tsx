import BannerVideo from '@/asset/video/service-banner.mp4';

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
      <div className='absolute bottom-16 left-40 flex flex-col gap-[4.5rem]'>
        <div>
          <h1 className='title-30 font-medium '>서비스</h1>
          <h3 className='title-70 font-bold '>
            Tableau와 함께하는 데이터 혁신
          </h3>
        </div>
        <div className='body-20 font-light'>
          <p>
            세일링 스톤은 Tableau를 통해 직관적인 데이터 인사이트를 제공하는
            전문가 팀입니다.
          </p>
          <p>
            비즈니스 목표에 맞춘 신속하고 정확한 데이터 분석으로 고객의 데이터
            기반 의사 결정을 지원합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
