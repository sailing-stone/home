const CircleInfo = () => {
  return (
    <div className='mt-12 flex w-full text-center text-[3rem] font-medium leading-[4.5rem] text-common-black mobile:flex-col tablet:flex-col'>
      <div className='flex size-[44.4rem] items-center justify-center rounded-[50%] bg-primary-100 mix-blend-multiply mobile:translate-y-20 mobile:scale-60 tablet:translate-y-20 desktop:translate-x-20'>
        <div className='flex size-[40.8rem] items-center justify-center rounded-[50%] border-2 border-dotted border-primary-main'>
          <p>
            데이터 활용의
            <br />
            <strong className='text-[3.5rem] font-bold'>효율성과 정확성</strong>
            <br />
            극대화
          </p>
        </div>
      </div>
      <div className='flex size-[44.4rem] items-center justify-center rounded-[50%] bg-primary-100 mix-blend-multiply mobile:-translate-y-20 mobile:scale-60 tablet:-translate-y-20 desktop:-translate-x-20'>
        <div className='flex size-[40.8rem] items-center justify-center rounded-[50%] border-2 border-dotted border-primary-main'>
          <p>
            최신 정보 기반의
            <br />
            <strong className='text-[3.5rem] font-bold'>데이터 활용</strong>
            <br />
            <strong className='text-[3.5rem] font-bold'>전략 수립</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircleInfo;
