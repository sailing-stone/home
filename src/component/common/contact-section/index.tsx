import { Link } from 'react-router-dom';
import URL from '@/constant/url';
import ArrowRightIcon from '../icon/arrow-right-icon';

const ContactSection = () => {
  return (
    <section className='flex items-center justify-between gap-8 rounded-t-[3.2rem] bg-contact px-40 py-[6.9rem]'>
      <p className='text-[3.5rem] font-normal text-common-white'>
        고객의 비즈니스 가치를 극대화하는 신뢰할 수 있는 데이터 파트너, <br />
        <strong className='text-common-black'>세일링 스톤</strong>입니다.
      </p>
      <Link
        to={URL.CONTACT}
        className='flex shrink-0 items-center gap-10 rounded-[3rem] bg-common-white px-10 py-4 text-[2rem] font-bold text-primary-600'
      >
        자세한 사항 문의하기
        <ArrowRightIcon />
      </Link>
    </section>
  );
};

export default ContactSection;
