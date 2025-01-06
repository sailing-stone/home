import Image from '@/component/base/Image';

const Banner = () => {
  return (
    <section className='relative -z-10'>
      <Image
        width='100%'
        height='auto'
        src='image/recruit/banner.png'
        alt='리쿠르트 페이지 배너'
        lazy={false}
        objectFit='cover'
      />
      <div className='absolute bottom-20 flex flex-col gap-12 px-40 text-common-white'>
        <h1 className='banner-h1'>리쿠르트 (인재 모집... TBD)</h1>
        <p className='text-[2rem] font-light'>
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
