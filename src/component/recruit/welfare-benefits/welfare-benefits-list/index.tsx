import BookIcon from '@/component/common/icon/book-icon';
import ClockIcon from '@/component/common/icon/clock-icon';
import GiftIcon from '@/component/common/icon/gift-icon';
import HealthIcon from '@/component/common/icon/health-icon';
import ShopIcon from '@/component/common/icon/shop-icon';
import TennisBallIcon from '@/component/common/icon/tennis-ball-icon';
import WelfareBenefitsItem from '../welfare-benefits-item';

const WELFARE_BENEFITS_LIST = [
  {
    id: 1,
    icon: <ShopIcon />,
    title: '매년 1회 가족 & 연인과의 식비',
    description: (
      <>
        특별한 음식, 고급 요리는 때때로 삶을 특별하게 만들어 준답니다.
        <br />
        1년 1회 외식 비용을 제공합니다.
      </>
    ),
  },
  {
    id: 2,
    icon: <TennisBallIcon />,
    title: '다양한 동아리 활동',
    description: (
      <>
        업무를 벗어나 팀원들과 취미 활동을 즐겨요 !
        <br />
        테니스, 클라이밍, 시음 등 각종 동아리 활동을 지원합니다.
      </>
    ),
  },
  {
    id: 3,
    icon: <ClockIcon />,
    title: '유연한 출퇴근 시간',
    description: (
      <>
        주어진 업무에 맞춰 출퇴근 시간을 유연하게 조절해보세요 !
        <br />
        코어 타임 설정으로 스스로의 업무 생산성을 높일 수 있습니다.
      </>
    ),
  },
  {
    id: 4,
    icon: <HealthIcon />,
    title: '건강검진 지원',
    description: (
      <>
        임직원들의 건강을 우선으로 생각합니다.
        <br />
        매년 1회 종합건강검진을 무료 지원합니다.
      </>
    ),
  },
  {
    id: 5,
    icon: <BookIcon />,
    title: '교육 지원',
    description: (
      <>
        임직원들의 무한한 성장을 위해
        <br />
        업무 관련 교육 강의, 자격증 응시료, 도서 구입비 등을 지원합니다.
      </>
    ),
  },
  {
    id: 6,
    icon: <GiftIcon />,
    title: '명절 선물과 각종 경조사비',
    description: (
      <>
        풍요로운 명절과 행복한 연말을 위한 선물을 제공하며
        <br />
        각종 경조사에 축하와 조의를 표하고자 비용, 휴가 등을 지원합니다.
      </>
    ),
  },
];

const WelfareBenefitsList = () => {
  return (
    <ul className='grid grid-cols-2 gap-x-[9.6rem] gap-y-[12.5rem] px-[23.3rem] py-[17.6rem]'>
      {WELFARE_BENEFITS_LIST.map((item) => (
        <WelfareBenefitsItem
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
};
export default WelfareBenefitsList;
