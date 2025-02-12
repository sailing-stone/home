import TBDInfoItem from '../TBD-info-item';

const TBD_INFO_LIST = [
  {
    id: 1,
    title: '1:1 맞춤형 컨설팅',
    description:
      '개인의 수준에 맞춘 맞춤형 교육을 통해 빠르게 분석 역량을 향상시킬 수 있도록 지원합니다.',
  },
  {
    id: 2,
    title: '유연한 일정 관리',
    description:
      'Timesheet 기반의 코칭으로 필요한 시간에 맞춰 효율적으로 학습할 수 있도록 유연하게 일정을 조정할 수 있습니다.',
  },
  {
    id: 3,
    title: '전문적이고 차별화된 서비스 제공',
    description:
      'Tableau Server와 Data Analyst 자격증 등을 보유한 전문가들이 데이터 설계부터 시각화까지 Best Practice에 기반한 컨설팅을 제공합니다.',
  },
];

const TBDInfoList = () => {
  return (
    <ul className='flex shrink-0 basis-1/2 flex-col gap-16 mobile:gap-12'>
      {TBD_INFO_LIST.map(({ id, title, description }) => (
        <TBDInfoItem
          key={id}
          title={title}
          description={description}
        />
      ))}
    </ul>
  );
};

export default TBDInfoList;
