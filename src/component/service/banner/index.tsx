const Banner = () => {
  return (
    <section
      className='flex aspect-[16/9] max-h-[108.1rem] w-full items-end bg-cover bg-center bg-no-repeat px-40 py-[6.4rem] text-common-white'
      style={{ backgroundImage: "url('/image/service/service-banner.png')" }}
    >
      <div className='flex flex-col gap-[4.5rem]'>
        <div>
          <p className='text-[3rem] font-medium'>서비스</p>
          <h1 className='banner-h1'>Tableau와 함께하는 데이터 혁신</h1>
        </div>
        <div className='text-[2rem] font-light'>
          <p>
            세일링 스톤은 Tableau를 통해 직관적인 데이터 인사이트를 제공하는
            전문가 팀입니다.
          </p>
          <p>
            비즈니스 목표에 맞춘 신속하고 정확한 데이터 분석으로 고객의 데이터
            기반 의사 결정을 지원합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
