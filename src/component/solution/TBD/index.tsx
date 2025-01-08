import { useState } from 'react';
import Badge from '@/component/base/badge';
import SimpleTab from '@/component/common/simple-tab';

const INFO_LIST = [
  {
    title: '사용자 중심의 인터페이스 설계',
    description:
      '사용자의 요구와 행동을 반영한 설계로 직관적이고 편리한 앱 경험을 제공하여 높은 접근성과 만족도를 실현해 드립니다.',
  },
  {
    title: '다양한 플랫폼 호환성',
    description:
      '모바일, 웹, 데스크톱 등 다양한 플랫폼에서 최적의 성능을 발휘할 수 있도록 반응형 디자인을 적용합니다. 또한, 모든 디바이스에서 일관된 사용자 경험을 제공합니다.​',
  },
  {
    title: '최신 기술 적용 및 보안 강화',
    description:
      '최신 개발 트렌드와 기술을 빠르게 적용해 변화하는 시장 요구에 부합합니다. 뿐만 아니라 고객 데이터와 정보를 안전하게 보호하기 위해 철저한 보안 솔루션을 함께 제공합니다.​',
  },
];

const TBD = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id='웹 / 모바일'
      className='flex flex-col items-center justify-center bg-contrast-200 pb-[12.9rem] pt-[8.8rem]'
    >
      <Badge>
        <h1 className='section-title text-common-white'>
          WEB / MOBILE APP (TBD)
        </h1>
      </Badge>
      <p className='section-description text-common-white'>
        스마트 시대를 선도하는 맞춤형 앱 개발
      </p>
      <div className='flex max-w-[51.5rem] flex-col gap-[2.1rem] pb-[12.9rem] pt-[9.3rem]'>
        <SimpleTab onChange={(index) => setActiveIndex(index)} />
        <div className='flex flex-col gap-[4.6rem]'>
          <h3 className='text-[4rem] font-semibold leading-[4.8rem] text-primary-main'>
            {INFO_LIST[activeIndex].title}
          </h3>
          <p className='text-[2.2rem] font-normal leading-[3.5rem] text-common-white'>
            {INFO_LIST[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TBD;
