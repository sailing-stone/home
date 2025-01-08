import PartnerImageList from './partner-image-list';

const EnterprisePartner = () => {
  return (
    <section className='relative'>
      <div className='flex flex-col flex-nowrap items-center justify-center gap-40 overflow-x-hidden bg-lightGray py-[20.5rem]'>
        <p className='text-center text-[3.2rem] font-medium text-common-black'>
          국내외 주요 Enterprise 기업들이
          <br /> 데이터(AI) 솔루션 파트너로
          <strong className='text-primary-main'> 세일링스톤</strong>을
          선택했습니다.
        </p>
        <PartnerImageList />
      </div>
      <div className='absolute -bottom-20 -z-10 h-20 w-full bg-lightGray' />
    </section>
  );
};

export default EnterprisePartner;
