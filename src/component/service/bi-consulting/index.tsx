import Badge from '@/component/base/badge';
import useIntersectingNavigation from '@/hook/useIntersectingNavigation';
import ConsultingCardList from './consulting-card-list';

const BIConsulting = () => {
  const ref = useIntersectingNavigation('BI 컨설팅');

  return (
    <section
      ref={ref}
      className='flex flex-col items-center justify-center pt-[13.3rem]'
    >
      <Badge>
        <h1
          id='consulting'
          className='title-50 font-bold'
        >
          BI 컨설팅
        </h1>
      </Badge>
      <p className='section-description px-8'>
        세일링 스톤은 데이터 분석과 시각화 경험을 바탕으로 고객의 비즈니스
        요구에 맞는 전략적 Tableau 컨설팅을 제공합니다.
      </p>
      <ConsultingCardList />
      <div className='title-50 flex w-full justify-center bg-consulting py-[11.4rem] text-common-white'>
        <p className='text-center font-medium'>
          고객의
          <span className='ml-4 font-extrabold text-primary-main'>
            데이터 인프라를 최적화
          </span>
          하고 <br />
          Tableau를 통해
          <span className='ml-4 font-extrabold text-primary-main'>
            새로운 비즈니스 기회를 발견
          </span>
          할 수 있도록 지원합니다.
        </p>
      </div>
    </section>
  );
};

export default BIConsulting;
