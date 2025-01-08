import Image from '@/component/base/Image';
import useCount from '@/hook/useCount';
import useInterval from '@/hook/useInterval';

const CONTENT = [
  <p key='content-1'>
    데이터 활용을 위한
    <br />
    <span className='text-primary-main'>전문가</span>를 찾는다면
  </p>,
  <p key='content-2'>
    데이터 활용을 위한
    <br />
    <span className='text-primary-main'>AI 솔루션</span>을 찾는다면
  </p>,
  <Image
    key='content-3'
    width='47rem'
    height='19rem'
    src='/image/logo-with-title-white-banner.png'
    alt='로고'
    lazy={false}
  />,
];

const Banner = () => {
  const { count, increase } = useCount(CONTENT.length - 1);
  useInterval(increase, 3000);

  return (
    <section className='relative'>
      <video
        src='/video/main-banner.mp4'
        autoPlay
        loop
        preload='auto'
        muted
        className='max-h-[110rem] w-full object-cover'
      />
      <div
        key={count}
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-fadeIn text-center text-[7rem] font-medium leading-[10rem] text-common-white'
      >
        {CONTENT[count]}
      </div>
    </section>
  );
};

export default Banner;
