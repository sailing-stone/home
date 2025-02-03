import PartnerImageList from './partner-image-list';

const EnterprisePartner = () => {
  return (
    <section className='flex flex-col gap-28 bg-common-white py-60 mobile:gap-16 mobile:py-32 tablet:gap-24 tablet:py-40'>
      <div className='flex flex-col flex-nowrap items-center justify-center overflow-x-hidden bg-enterprisePartner py-12'>
        <p className='title-28 text-center font-medium leading-[3.9rem] text-common-black mobile:leading-[2.2rem] tablet:leading-[3.4rem]'>
          국내외 주요 Enterprise 기업들이
          <br /> 데이터(AI) 솔루션 파트너로
          <br className='hidden mobile:block' />
          <strong className='text-primary-main'> 세일링스톤</strong>을
          선택했습니다.
        </p>
      </div>
      <PartnerImageList />
    </section>
  );
};

export default EnterprisePartner;
