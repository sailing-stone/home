import ConstructionImage from '@/asset/image/construction.png';
import Image from '@/component/base/Image';
import Text from '@/component/base/text';

const Construction = () => {
  return (
    <div className='flex h-[calc(100dvh-6.5rem)] w-full flex-col items-center justify-center gap-12 pt-[6.5rem]'>
      <div>
        <Text
          as='h1'
          variant='title40'
          strong={700}
          align='center'
          className='text-primary-main'
        >
          Under Construction
        </Text>
        <Text
          as='h3'
          variant='title16'
          strong={500}
          align='center'
          className='text-primary-main'
        >
          홈페이지 리뉴얼 진행중입니다.
        </Text>
      </div>
      <Image
        width='50%'
        objectFit='contain'
        src={ConstructionImage}
        alt='미완성 페이지'
        className='max-w-[40rem]'
      />
    </div>
  );
};

export default Construction;
