import Badge from '@/component/base/badge';
import Text from '@/component/base/text';
import ArrowDown from '@/component/common/icon/arrow-down.svg?react';
import VisibleGuard from '@/component/common/visible-guard';
import useIntersectingNavigation from '@/hook/useIntersectingNavigation';
import useResponsive from '@/hook/useResponsive';
import CircleInfo from './circle-info';
import InfoList from './info-list';
import MobileCircleInfo from './mobile-circle-info';
import StickInfo from './stick-info';

const AIPortal = () => {
  const isMatch = useResponsive();
  const ref = useIntersectingNavigation('데이터 AI 포털');

  return (
    <section
      ref={ref}
      id='aiPortal'
      className='mt-[13.3rem] flex flex-col items-center justify-center gap-20 pb-[21.9rem]'
    >
      <div>
        <Badge>
          <Text
            as='h1'
            variant='title70'
            strong={700}
            align='center'
          >
            데이터 AI 포털
          </Text>
        </Badge>
        <Text
          as='p'
          variant='body20'
          align='center'
          className='mt-4'
        >
          데이터의 미래를 선도하는 종합 플랫폼
        </Text>
      </div>
      <StickInfo />
      <ArrowDown className='mobile:hidden' />
      <VisibleGuard isVisible={!isMatch}>
        <CircleInfo />
      </VisibleGuard>
      <VisibleGuard isVisible={isMatch}>
        <MobileCircleInfo />
      </VisibleGuard>
      <InfoList />
    </section>
  );
};

export default AIPortal;
