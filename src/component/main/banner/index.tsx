import Image from '@/component/base/Image';

const Banner = () => {
  return (
    <section>
      <Image
        width='100%'
        height='auto'
        src='/image/main/main-banner.png'
        alt='메인 페이지 배너'
        lazy={false}
        objectFit='cover'
      />
    </section>
  );
};

export default Banner;
