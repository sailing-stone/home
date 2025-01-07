import Badge from '@/component/base/badge';
import LongArrowDownIcon from '@/component/common/icon/long-arrow-donw-icon';
import CircleInfo from './circle-info';
import InfoList from './info-list';
import StickInfo from './stick-info';

const AIPortal = () => {
  return (
    <section
      id='데이터 AI 포털'
      className='flex flex-col items-center justify-center pb-[21.9rem] pt-[13.3rem]'
    >
      <Badge>
        <h1 className='section-title'>데이터 AI 포털</h1>
      </Badge>
      <p className='section-description'>
        데이터의 미래를 선도하는 종합 플랫폼
      </p>
      <StickInfo />
      <LongArrowDownIcon />
      <CircleInfo />
      <InfoList />
    </section>
  );
};

export default AIPortal;
