import BannerImage from '@/asset/image/solution/banner.png';

const Banner = () => {
  return (
    <section
      className='flex aspect-[16/9] max-h-[72rem] w-full items-end bg-cover bg-center bg-no-repeat px-40 py-[9.4rem] text-common-white'
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className='flex flex-col gap-[4.5rem]'>
        <div>
          <p className='text-[3rem] font-medium leading-[3.6rem]'>솔루션</p>
          <h1 className='banner-h1'>title</h1>
        </div>
        <div className='text-[2rem] font-light'>
          <p>부가설명</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
