import { twJoin } from 'tailwind-merge';
import BannerLogoImage from '@/asset/image/logo-banner.png';
import BannerVideo from '@/asset/video/main-banner.mp4';
import Image from '@/component/base/Image';
import Text from '@/component/base/text';
import useCount from '@/hook/useCount';
import useInterval from '@/hook/useInterval';

const CONTENT = [
  <>
    데이터 활용을 위한
    <br />
    <Text
      as='span'
      variant='title50'
      strong={800}
      className='text-primary-main'
    >
      전문가
    </Text>
    를 찾는다면
  </>,
  <>
    데이터 활용을 위한
    <br />
    <Text
      as='span'
      variant='title50'
      strong={800}
      className='text-primary-main'
    >
      AI 솔루션
    </Text>
    을 찾는다면
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
        playsInline
        muted
        className='max-h-[70rem] min-h-[50rem] w-full object-cover'
        style={{
          pointerEvents: 'none',
        }}
      />
      <div className='absolute inset-0 bg-black/70' />
      <div className='title-50 absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center text-center font-extrabold leading-[6rem] text-common-white'>
        <Text
          key={count}
          as='h1'
          variant='title50'
          strong={500}
          align='center'
          className='animate-fadeIn'
        >
          {CONTENT[count]}
        </Text>
        <Image
          src={BannerLogoImage}
          alt='로고'
          objectFit='contain'
          className={twJoin(
            'animate-fadeIn',
            'desktop:w-[47rem] desktop:h-[19rem]',
            'tablet:w-[35rem] aspect-[47/19]',
            'mobile:w-[20rem] aspect-[47/19]',
            count === 2 ? 'block' : 'hidden',
          )}
        />
      </div>
    </section>
  );
};

export default Banner;
