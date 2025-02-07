import Badge from '@/component/base/badge';
import ArrowDown from '@/component/common/icon/arrow-down.svg?react';
import CircleInfo from './circle-info';
import InfoList from './info-list';
import StickInfo from './stick-info';

const AIPortal = () => {
  return (
    <section
      id='aiPortal'
      className='mt-[13.3rem] flex flex-col items-center justify-center pb-[21.9rem]'
    >
      <Badge>
        <h1 className='title-50 font-bold'>데이터 AI 포털</h1>
      </Badge>
      <p className='section-description'>
        데이터의 미래를 선도하는 종합 플랫폼
      </p>
      <StickInfo />
      <ArrowDown className='mobile:hidden tablet:hidden' />
      <CircleInfo />
      <InfoList />
    </section>
  );
};

export default AIPortal;
