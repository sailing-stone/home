import { Link } from 'react-router-dom';
import ArrowRight from '@/component/common/icon/arrow-right.svg?react';
import URL from '@/constant/url';

const ContactSection = () => {
  return (
    <section className='flex items-center justify-between gap-[1.4rem] rounded-t-2xl bg-contact px-40 py-32 mobile:px-[1.6rem] mobile:py-12 tablet:px-[2.4rem] tablet:py-16'>
      <p className='title-26 font-medium leading-[3.1rem] text-common-white mobile:leading-[2.1rem] tablet:leading-[2.8rem]'>
        고객의 비즈니스 가치를 극대화하는
        <br className='hidden mobile:block tablet:block' /> 신뢰할 수 있는
        데이터 파트너,
        <br />
        <strong className='text-common-black'>세일링스톤</strong>입니다.
      </p>
      <Link
        to={URL.CONTACT}
        className='title-20 flex items-center gap-2 rounded-[100rem] bg-common-white px-8 py-[1.4rem] font-bold text-primary-600 mobile:self-end mobile:px-4 mobile:py-2 tablet:self-end tablet:px-[1.6rem] tablet:py-[1.2rem]'
      >
        <span className='block mobile:hidden'>자세한 사항</span> 문의하기
        <ArrowRight className='mobile:w-[1.2rem] tablet:w-[1.6rem]' />
      </Link>
    </section>
  );
};

export default ContactSection;
