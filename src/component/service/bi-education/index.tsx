import PolygonImage from '@/asset/image/service/polygon.png';
import Badge from '@/component/base/badge';
import Image from '@/component/base/Image';
import Text from '@/component/base/text';
import VisibleGuard from '@/component/common/visible-guard';
import useIntersectingNavigation from '@/hook/useIntersectingNavigation';
import useResponsive from '@/hook/useResponsive';
import EducationPointList from './education-point-list';
import MobileEducationPointList from './mobile-education-point-list';

const BIEducation = () => {
  const ref = useIntersectingNavigation('Self-BI 교육 지원');
  const isMatch = useResponsive();

  return (
    <section
      ref={ref}
      className='flex flex-col items-center justify-center gap-32 pt-60 mobile:gap-20'
    >
      <div className='flex flex-col items-center gap-12 mobile:gap-4 tablet:gap-8'>
        <Badge>
          <Text
            id='education'
            as='h1'
            variant='title70'
            strong={700}
          >
            Self BI
            <span className='inline-block mobile:hidden'>교육 지원</span>
          </Text>
        </Badge>
        <Text
          as='p'
          variant='body20'
          strong={400}
          align='center'
        >
          Tableau에 대한 깊은 이해와 활용 능력을 높이는
          <br /> 맞춤형 교육 프로그램을 제공합니다.
        </Text>
      </div>
      <VisibleGuard isVisible={!isMatch}>
        <EducationPointList />
      </VisibleGuard>
      <VisibleGuard isVisible={isMatch}>
        <MobileEducationPointList />
      </VisibleGuard>
      <Image
        src={PolygonImage}
        alt='아래 방향 삼각형'
        className='h-80 w-[80rem] tablet:h-[16.3rem] tablet:w-[66.3rem]'
        objectFit='contain'
      />
      <div className='flex gap-40 pb-60 pt-32 mobile:gap-8 mobile:pb-40 mobile:pt-12 tablet:gap-32 tablet:pb-52 tablet:pt-20'>
        <Text
          as='p'
          variant='title26'
          strong={700}
          align='center'
          className='w-[27.5rem] rounded-3xl border border-gray-500 bg-gray-600 py-8 mobile:w-52 mobile:py-4 tablet:w-80'
        >
          조직 내
          <br />
          데이터 문화
          <br />
          확산 기여
        </Text>
        <Text
          as='p'
          variant='title26'
          strong={700}
          align='center'
          className='w-[27.5rem] rounded-3xl border border-gray-500 bg-gray-600 py-8 mobile:w-52 mobile:py-4 tablet:w-80'
        >
          효율적인
          <br />
          BI 솔루션
          <br />
          활용
        </Text>
      </div>
    </section>
  );
};

export default BIEducation;
