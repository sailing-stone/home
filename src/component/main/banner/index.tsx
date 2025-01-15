import { twJoin } from 'tailwind-merge';
import BannerLogoImage from '@/asset/image/logo-banner.png';
import BannerVideo from '@/asset/video/main-banner.mp4';
import Image from '@/component/base/Image';
import useCount from '@/hook/useCount';
import useInterval from '@/hook/useInterval';

const CONTENT = [
  <>
    데이터 활용을 위한
    <br />
    <span className='text-primary-main'>전문가</span>를 찾는다면
  </>,
  <>
    데이터 활용을 위한
    <br />
    <span className='text-primary-main'>AI 솔루션</span>을 찾는다면
  </>,
];

const Banner = () => {
  const { count, increase } = useCount(CONTENT.length);
  useInterval(increase, 3000);

  return (
    <section className='relative w-full'>
      <video
        src={BannerVideo}
        autoPlay
        loop
        preload='auto'
        muted
        className='max-h-[70rem] w-full object-cover'
      />
      <div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center text-center text-[5rem] font-extrabold leading-[6rem] text-common-white'>
        <p
          key={count}
          className='animate-fadeIn text-center'
        >
          {CONTENT[count]}
        </p>
        <Image
          width='47rem'
          height='19rem'
          src={BannerLogoImage}
          alt='로고'
          className={twJoin('animate-fadeIn', count === 2 ? 'block' : 'hidden')}
        />
      </div>
    </section>
  );
};

export default Banner;
