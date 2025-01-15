import BannerVideo from '@/asset/video/solution-banner.mp4';
import useCount from '@/hook/useCount';
import useInterval from '@/hook/useInterval';

const CONTENT = [
  {
    title: 'title',
    description: (
      <>
        <p>
          세일링 스톤은 Tableau를 통해 직관적인 데이터 인사이트를 제공하는
          전문가 팀입니다.
        </p>
        <p>
          비즈니스 목표에 맞춘 신속하고 정확한 데이터 분석으로 고객의 데이터
          기반 의사 결정을 지원합니다.
        </p>
      </>
    ),
  },
  {
    title: 'Tableau를 통한 맞춤형 데이터 시각화',
    description: (
      <>
        <p>
          복잡한 데이터도 쉽게 이해할 수 있도록 핵심 인사이트를 빠르게
          시각화합니다.
        </p>
        <p>
          각 산업의 특성과 고객의 요구에 맞춘 맞춤형 시각화로 보다 빠르고 명확한
          데이터 이해를 돕습니다.
        </p>
      </>
    ),
  },
];

const Banner = () => {
  const { count, increase } = useCount(CONTENT.length - 1);
  useInterval(increase, 3000);

  return (
    <section className='relative text-common-white'>
      <video
        src={BannerVideo}
        autoPlay
        loop
        preload='auto'
        muted
        className='max-h-[72rem] w-full object-cover'
      />
      <div className='absolute bottom-[6.4rem] left-[9.9rem] flex flex-col gap-[4.5rem]'>
        <div>
          <p className='text-[3rem] font-medium leading-[3.6rem]'>솔루션</p>
          <h1
            key={count}
            className='banner-h1 animate-fadeIn'
          >
            {CONTENT[count].title}
          </h1>
        </div>
        <div
          key={count}
          className='animate-fadeIn text-[2rem] font-light'
        >
          {CONTENT[count].description}
        </div>
      </div>
    </section>
  );
};

export default Banner;
