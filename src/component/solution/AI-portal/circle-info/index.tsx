import Text from '@/component/base/text';

const CircleInfo = () => {
  return (
    <div className='flex text-center'>
      <div className='flex translate-x-14 items-center justify-center rounded-[50%] bg-primary-100 p-8 mix-blend-multiply'>
        <div className='flex size-[30rem] items-center justify-center rounded-[50%] border-2 border-dashed border-primary-main '>
          <Text
            as='h3'
            variant='title26'
            strong={500}
            align='center'
          >
            데이터 활용의
            <br />
            <Text
              as='span'
              variant='title26'
              strong={700}
              align='center'
            >
              효율성과 정확성
            </Text>
            <br />
            극대화
          </Text>
        </div>
      </div>
      <div className='flex -translate-x-14 items-center justify-center rounded-[50%] bg-primary-100 p-8 mix-blend-multiply'>
        <div className='flex size-[30rem] items-center justify-center rounded-[50%] border-2 border-dashed border-primary-main '>
          <Text
            as='h3'
            variant='title26'
            strong={500}
            align='center'
          >
            최신 정보 기반의
            <br />
            <Text
              as='span'
              variant='title26'
              strong={700}
              align='center'
            >
              데이터 활용
            </Text>
            <br />
            <Text
              as='span'
              variant='title26'
              strong={700}
              align='center'
            >
              전략 수립
            </Text>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CircleInfo;
