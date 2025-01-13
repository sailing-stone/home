import BIConsulting_1 from '@/asset/image/service/bi-consulting_1.png';
import BIConsulting_2 from '@/asset/image/service/bi-consulting_2.png';
import BIConsulting_3 from '@/asset/image/service/bi-consulting_3.png';
import ConsultingCardItem from '../consulting-card-item';

const CONSULTING_LIST = [
  {
    id: 1,
    src: BIConsulting_1,
    title: 'BI 파이프라인 구축',
    description:
      '데이터 수집, 모델링, 분석, 대시보드 설계까지 데이터 활용의 모든 단계를 아우르는 End-to-End BI 솔루션을 제공합니다. Tableau를 활용하여 데이터 파이프라인의 전 과정을 체계적이고 안정적으로 구축합니다.',
  },
  {
    id: 2,
    src: BIConsulting_1,
    title: 'Tableau Blueprint 기반 프로젝트 관리',
    description:
      'Tableau의 Agile 프로젝트 관리 방식을 세일링 스톤만의 노하우와 결합하여 Tableau Blueprint에 최적화된 솔루션을 제공합니다. 이를 통해 프로젝트 리스크를 최소화하고 유연하게 고객의 목표를 달성합니다.',
  },
  {
    id: 3,
    src: BIConsulting_2,
    title: '데이터 중심의 비즈니스 성공을 위한 Tableau 활용',
    description:
      '세일링 스톤은 고객이 데이터를 통해 비즈니스의 가치를 발견하고 전략적 결정을 내릴 수 있도록 Tableau 솔루션의 모든 역량을 제공합니다. 실시간 데이터 분석, 시각적 인사이트, 대시보드 구축 등을 통해 데이터의 가치를 극대화합니다.',
  },
  {
    id: 4,
    src: BIConsulting_3,
    title: 'Tableau 기반의 실시간 문제 해결',
    description:
      'Tableau Server, Prep, Desktop 등에서 발생하는 모든 기술적 문제에 대해 신속한 대응을 통해 고객이 안정적으로 Tableau를 운영할 수 있도록 지원합니다.',
  },
];

const ConsultingCardList = () => {
  return (
    <ul className='grid grid-cols-2 gap-[2.2rem] pb-[9.7rem] pt-[12.4rem]'>
      {CONSULTING_LIST.map(({ id, src, title, description }, index) => (
        <ConsultingCardItem
          key={id}
          src={src}
          title={title}
          description={description}
          className={`${index === 1 && 'h-[100rem] justify-end'} ${index === 2 && 'top-[-26rem]'}`}
        />
      ))}
    </ul>
  );
};

export default ConsultingCardList;
