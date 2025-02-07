import PlusIcon from '@/component/common/icon/plus-icon';

const StickInfo = () => {
  return (
    <div className='mb-[4.6rem] mt-[11.7rem] flex items-center justify-center rounded-[8rem] bg-aiPortal text-center text-[2.4rem] font-semibold leading-[3rem] text-common-white mobile:hidden tablet:hidden'>
      <p className='pl-40 pr-20'>
        다양한 데이터와 비즈니스별
        <br />
        <span className='underline decoration-2 underline-offset-8'>
          최적화된 AI 모델을 한 곳
        </span>
        에서 제공
      </p>
      <div className='flex size-[10.6rem] items-center justify-center rounded-[50%] bg-primary-700'>
        <PlusIcon />
      </div>
      <p className='px-[8.5rem]'>
        사용자 간의 소통을 통해
        <br />
        <span className='underline decoration-2 underline-offset-8'>
          협업을 지원하는 커뮤니티
        </span>
      </p>
      <div className='flex size-[10.6rem] items-center justify-center rounded-[50%] bg-primary-800'>
        <PlusIcon />
      </div>
      <p className='pl-20 pr-40'>
        실시간 데이터 현황{' '}
        <span className='underline decoration-2 underline-offset-8'>
          모니터링 기능
        </span>
      </p>
    </div>
  );
};

export default StickInfo;
