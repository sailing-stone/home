import Badge from '@/component/base/badge';
import Image from '@/component/base/Image';
import EducationPointList from './education-point-list';

const BIEducation = () => {
  return (
    <section
      id='Self-BI 교육 지원'
      className='flex flex-col items-center justify-center pb-[26.6rem] pt-[10.7rem]'
    >
      <Badge>
        <h1 className='section-title'>Self BI 교육 지원</h1>
      </Badge>
      <p className='section-description'>
        Tableau에 대한 깊은 이해와 활용 능력을 높이는 맞춤형 교육 프로그램을
        제공합니다.
      </p>
      <EducationPointList />
      <Image
        width='121.3rem'
        height='34.4rem'
        src='image/service/polygon.png'
        alt='아래 방향 삼각형'
      />
      <div className='mt-[10.7rem] flex gap-[15.8rem]  text-center text-[3.5rem] font-bold leading-[6.5rem] text-text-underline underline'>
        <p className='w-[26.7rem]'>
          조직 내 데이터 문화
          <br />
          확산 기여
        </p>
        <p className='w-[26.7rem]'>
          효율적인
          <br />
          BI 솔루션 활용
        </p>
      </div>
    </section>
  );
};

export default BIEducation;
