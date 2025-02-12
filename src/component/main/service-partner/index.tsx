import SaleforcePartnerImage from '@/asset/image/main/saleforce-partner.png';
import Image from '@/component/base/Image';
import Text from '@/component/base/text';

const ServicePartner = () => {
  return (
    <section className='flex items-center justify-center gap-12 bg-salesforce py-40 mobile:flex-col mobile:gap-8 mobile:py-20 tablet:flex-col tablet:py-32'>
      <Image
        className='w-[22.2rem] mobile:w-40'
        src={SaleforcePartnerImage}
        alt='salesforce 로고'
        objectFit='contain'
      />
      <div className='flex flex-col mobile:gap-4'>
        <Text
          as='h3'
          variant='title40'
          strong={700}
          align='center'
          className='text-common-white'
        >
          Salesforce <br className='hidden mobile:block' />
          공식 서비스 파트너사
        </Text>
        <Text
          as='p'
          variant='title28'
          strong={400}
          align='center'
          className='text-common-white'
        >
          Salesforce Official Service Partner
        </Text>
      </div>
    </section>
  );
};

export default ServicePartner;
