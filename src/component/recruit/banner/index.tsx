import BannerVideo from '@/asset/video/recruit-banner.mp4';

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
      <div className='absolute bottom-[7.1rem] left-[9.9rem] flex flex-col gap-12'>
        <div>
          <p className='text-[3rem] font-medium leading-[3.6rem]'>_</p>
          <h1 className='banner-h1'>리쿠르트 (인재 모집... TBD)</h1>
        </div>
        <p className='text-[2rem] font-light leading-[3rem]'>
          Lorem ipsum dolor sit amet consectetur. Pharetra volutpat amet libero
          sem viverra eget tempor in non. Egestas purus eget tellus augue
          vestibulum ut sed curabitur. Non commodo dictum scelerisque cras
          tortor egestas nulla. Sit cursus sagittis sociis pretium euismod
          vestibulum id.
        </p>
      </div>
    </section>
  );
};

export default Banner;
