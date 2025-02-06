import CoreValueItem from '../core-value-item';

const CORE_VALUE_LIST = [
  {
    id: 1,
    title: '최고의 동료',
    description: (
      <>
        “인재 밀도의 극대화”
        <br />
        <br />
        재능있고 뛰어난 사람들은
        <br />
        <strong className='font-semibold'>서로의 능률을 높입니다.</strong>
      </>
    ),
  },
  {
    id: 2,
    title: '솔직하고 논리적인 소통의 피드백',
    description: (
      <>
        모든 직원은
        <br />
        <strong className='font-semibold'>솔직하고 원활하게</strong>
        <br />
        <strong className='font-semibold'>때와 장소를 가리지 않고</strong>
        <br />
        건강한 피드백을 주고 받습니다.
      </>
    ),
  },
  {
    id: 3,
    title: '책임있는 자유',
    description: (
      <>
        사람과 사람 사이의
        <br />
        견고한 신뢰를 바탕으로
        <br />
        <strong className='font-semibold'>책임있는 자유 속에서</strong>
        <br />
        <strong className='font-semibold'>최고의 퍼포먼스를 도출</strong>
        합니다.
      </>
    ),
  },
];

const CoreValueList = () => {
  return (
    <ul className='m-40 flex mobile:flex-col mobile:gap-20'>
      {CORE_VALUE_LIST.map(({ id, title, description }, index) => (
        <CoreValueItem
          key={id}
          title={title}
          description={description}
          className={(index !== 0 && 'desktop:-ml-[2.5rem]') || undefined}
        />
      ))}
    </ul>
  );
};

export default CoreValueList;
