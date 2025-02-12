import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import MobileEducationPointItem from '../mobile-education-point-item';

const EDUCATION_POINT_LIST = [
  {
    id: 1,
    title: (
      <>
        단계별 교육을 통한
        <br /> 데이터 활용 능력 향상
      </>
    ),
    description: (
      <>
        초급부터 고급까지, 각 수준에 맞춘 교육 을 통해 Tableau를 보다 효과적으로
        활용할 수 있도록 돕습니다.
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        실무자 맞춤형
        <br /> 고객데이터 활용
      </>
    ),
    description: (
      <>
        고객의 실무 데이터를 활용한 맞춤형 교육을 통해 실무에서 바로 적용 가능한
        분석 역량을 키워드립니다.
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        업무적
        <br /> Self BI 역량 강화
      </>
    ),
    description: (
      <>
        개인의 Tableau 활용 역량을 높여 조직 내 데이터 자립을 위한 Self-BI 문화
        확산을 지원합니다.
      </>
    ),
  },
];

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const TypedSlider = Slider as unknown as React.FC<any>;

const MobileEducationPointList = () => {
  return (
    <TypedSlider
      {...settings}
      className='h-auto w-full'
    >
      {EDUCATION_POINT_LIST.map(({ id, title, description }, index) => (
        <MobileEducationPointItem
          key={id}
          title={title}
          description={description}
          index={index + 1}
        />
      ))}
    </TypedSlider>
  );
};

export default MobileEducationPointList;
