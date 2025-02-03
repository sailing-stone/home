import SaleforcePartnerImage from '@/asset/image/main/saleforce-partner.png';
import Image from '@/component/base/Image';

const ServicePartner = () => {
  return (
    <section className='flex items-center justify-center gap-12 bg-salesforce py-40 mobile:flex-col mobile:gap-0 mobile:py-16 tablet:flex-col tablet:py-32'>
      <Image
        width='19rem'
        height='18.7rem'
        src={SaleforcePartnerImage}
        alt='salesforce 로고'
      />
      <div className='text-center text-common-white'>
        <h3 className='title-40 font-bold leading-[4.8rem]'>
          Salesforce 공식 서비스 파트너사
        </h3>
        <p className='title-28 font-normal leading-[3.3rem]'>
          Salesforce Official Service Partner
        </p>
      </div>
    </section>
  );
};

export default ServicePartner;
