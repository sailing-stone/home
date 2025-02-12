import Text from '@/component/base/text';
import PartnerImageList from './partner-image-list';

const EnterprisePartner = () => {
  return (
    <section className='mb-60 flex flex-col gap-28 bg-solutionPartner mobile:gap-16 tablet:gap-24'>
      <Text
        as='p'
        variant='title28'
        strong={500}
        align='center'
      >
        국내외 주요 Enterprise 기업들이
        <br /> 데이터(AI) 솔루션 파트너로 <br className='hidden mobile:block' />
        <Text
          as='span'
          variant='title-28'
          strong={500}
          className='text-primary-main'
        >
          세일링스톤
        </Text>
        을 선택했습니다.
      </Text>
      <PartnerImageList />
    </section>
  );
};

export default EnterprisePartner;
