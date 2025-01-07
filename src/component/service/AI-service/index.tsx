import Badge from '@/component/base/badge';

const AIService = () => {
  return (
    <section
      id='태블로 생성형 AI 기반 BI 서비스'
      className='flex flex-col items-center pb-[32.5rem] pt-[31.1rem]'
    >
      <Badge>
        <h1 className='section-title'>생성형 AI 기반 BI 서비스</h1>
      </Badge>
      <p className='section-description'>
        기업 데이터를 활용한 분석 및 인사이트 생성을 자동화하여 비즈니스
        효율성을 극대화하는 서비스입니다.
      </p>
      <div className='mt-20 flex gap-40'>
        <div className='flex shrink-0 flex-col items-center justify-center gap-20'>
          <h3 className='text-[5rem] font-bold leading-[4.5rem] text-primary-main'>
            생성형 AI 기술
          </h3>
          <p className='text-center text-[2.4rem] font-medium leading-[4.5rem] text-common-black'>
            데이터 분석 과정에서 빠르고 정확한 결과를 제공
            <br />
            전략적 의사결정을 위한 맞춤형 솔루션을 제공
          </p>
        </div>
        <div className='h-[55.6rem] w-[91.4rem] rounded-[2.1rem] bg-[#D9D9D9]' />
      </div>
    </section>
  );
};

export default AIService;
