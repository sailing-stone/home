import BannerVideo from '@/asset/video/contact-banner.mp4';

const Banner = () => {
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
      <div className='absolute bottom-[7.1rem] left-[9.9rem] flex flex-col gap-12'>
        <div>
          <p className='text-[3rem] font-medium leading-[3.6rem]'>_</p>
          <h1 className='banner-h1'>문의하기</h1>
        </div>
        <p className='text-[2rem] font-light leading-[3rem]'>
          파트너십 문의 기타 문의 등등
        </p>
      </div>
    </section>
  );
};

export default Banner;
