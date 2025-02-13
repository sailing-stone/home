import Text from '@/component/base/text';
import Plus from '@/component/common/icon/plus.svg?react';

const StickInfo = () => {
  return (
    <div className='mb-20 mt-40 flex items-center justify-center gap-12 rounded-[8rem] bg-aiPortal px-20 mobile:hidden'>
      <Text
        as='h3'
        variant='title16'
        strong={600}
        align='center'
        className=' text-common-white'
      >
        다양한 데이터와 비즈니스별
        <br />
        <Text
          as='span'
          variant='title16'
          strong={600}
          underline
          className='text-common-white'
        >
          최적화된 AI 모델을 한 곳
        </Text>
        에서 제공
      </Text>
      <div className='flex size-32 items-center justify-center rounded-[50%] bg-[#1da190]'>
        <Plus />
      </div>
      <Text
        as='h3'
        variant='title16'
        strong={600}
        align='center'
        className=' text-common-white'
      >
        사용자 간의 소통을 통해
        <br />
        <Text
          as='span'
          variant='title16'
          strong={600}
          underline
          className='text-common-white'
        >
          협업을 지원하는 커뮤니티
        </Text>
        에서 제공
      </Text>
      <div className='flex size-32 items-center justify-center rounded-[50%] bg-[#085549]'>
        <Plus />
      </div>
      <Text
        as='h3'
        variant='title16'
        strong={600}
        align='center'
        className=' text-common-white'
      >
        실시간 데이터 현황
        <br />
        <Text
          as='span'
          variant='title16'
          strong={600}
          underline
          className='text-common-white'
        >
          모니터링 기능
        </Text>
        에서 제공
      </Text>
    </div>
  );
};

export default StickInfo;
