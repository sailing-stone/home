import BannerImage from '@/asset/image/contact/contact-banner.png';

const Banner = () => {
  return (
    <section
      className='relative flex aspect-[16/9] max-h-[72rem] w-full items-end bg-cover bg-center bg-no-repeat px-[9.9rem] py-[9.4rem] text-common-white'
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className='absolute inset-0 bg-black/50' />
      <div className='relative z-10'>
        <div className='flex flex-col gap-12 text-common-white'>
          <h1 className='banner-h1'>문의하기</h1>
          <p className='text-[2rem] font-light leading-[3rem]'>
            파트너십 문의 기타 문의 등등
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
