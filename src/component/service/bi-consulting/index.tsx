import Marquee from 'react-fast-marquee';
import Badge from '@/component/base/badge';
import Text from '@/component/base/text';
import VisibleGuard from '@/component/common/visible-guard';
import useIntersectingNavigation from '@/hook/useIntersectingNavigation';
import useResponsive from '@/hook/useResponsive';
import ConsultingCardList from './consulting-card-list';

const BIConsulting = () => {
  const ref = useIntersectingNavigation('BI 컨설팅');
  const isMatch = useResponsive();

  return (
    <section
      ref={ref}
      className='flex flex-col items-center justify-center pt-60'
    >
      <div className='flex flex-col items-center gap-12 mobile:gap-4 tablet:gap-8'>
        <Badge>
          <Text
            id='consulting'
            as='h1'
            variant='title70'
            strong={700}
          >
            BI 컨설팅
          </Text>
        </Badge>
        <Text
          as='p'
          variant='body20'
          strong={400}
          align='center'
        >
          세일링스톤은 데이터 분석과 시각화 경험을 바탕으로 <br />
          고객의 비즈니스 요구에 맞는 <br className='hidden mobile:block' />
          전략적 Tableau 컨설팅을 제공합니다.
        </Text>
      </div>
      <VisibleGuard isVisible={!isMatch}>
        <ConsultingCardList />
      </VisibleGuard>
      <VisibleGuard isVisible={isMatch}>
        <Marquee
          speed={50}
          direction='left'
          pauseOnHover
        >
          <ConsultingCardList />
        </Marquee>
      </VisibleGuard>
      <div className='flex w-full justify-center bg-consulting px-20 py-40 mobile:py-16 tablet:py-28'>
        <Text
          as='p'
          variant='body32'
          strong={500}
          align='center'
          className='text-common-white'
        >
          고객의{' '}
          <Text
            as='span'
            variant='body32'
            strong={800}
            className='text-primary-main'
          >
            데이터 인프라를 최적화
          </Text>
          하고 <br />
          Tableau를 통해{' '}
          <Text
            as='span'
            variant='body32'
            strong={800}
            className='text-primary-main'
          >
            새로운 비즈니스 기회를 발견
          </Text>
          <br className='hidden mobile:block' />할 수 있도록 지원합니다.
        </Text>
      </div>
    </section>
  );
};

export default BIConsulting;
