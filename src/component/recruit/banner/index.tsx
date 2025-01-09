import BannerImage from '@/asset/image/recruit/banner.png';

const Banner = () => {
  return (
    <section
      className='relative flex aspect-[16/9] max-h-[72rem] w-full items-end bg-cover bg-center bg-no-repeat px-[9.9rem] py-[7.1rem] text-common-white'
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className='absolute inset-0 bg-black/50' />
      <div className='relative z-10'>
        <div className='flex flex-col gap-12 text-common-white'>
          <h1 className='banner-h1'>리쿠르트 (인재 모집... TBD)</h1>
          <p className='text-[2rem] font-light leading-[3rem]'>
            Lorem ipsum dolor sit amet consectetur. Pharetra volutpat amet
            libero sem viverra eget tempor in non. Egestas purus eget tellus
            augue vestibulum ut sed curabitur. Non commodo dictum scelerisque
            cras tortor egestas nulla. Sit cursus sagittis sociis pretium
            euismod vestibulum id.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
