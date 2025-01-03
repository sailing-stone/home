import Image from '@/component/base/Image';

const ServicePartner = () => {
  return (
    <section className='flex h-[41.6rem] items-center justify-center gap-20 bg-salesforce'>
      <Image
        width='19rem'
        height='18.7rem'
        src='/image/main/saleforce-partner.png'
        alt='salesforce 로고'
      />
      <div className='text-center text-common-white'>
        <h3 className='text-[4rem] font-bold'>
          Salesforce 공식 서비스 파트너사
        </h3>
        <p className='text-[2.8rem] font-light'>
          Salesforce Official Service Partner
        </p>
      </div>
    </section>
  );
};

export default ServicePartner;
