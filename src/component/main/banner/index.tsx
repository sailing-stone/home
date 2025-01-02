import Image from '@/component/base/Image';

const Banner = () => {
  return (
    <section>
      <Image
        width='100%'
        height='auto'
        src='/image/main-banner.png'
        alt='메인 페이지 배너'
        lazy={false}
        className='max-h-[108rem]'
        objectFit='cover'
      />
    </section>
  );
};

export default Banner;
