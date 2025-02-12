import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Text from '@/component/base/text';

interface Props {
  src: string;
  title: ReactNode;
  description: ReactNode;
  className?: string;
}

const ConsultingCardItem = ({ src, title, description, className }: Props) => {
  return (
    <li className={twMerge('flex flex-col justify-start', className)}>
      <div
        className='relative flex h-[70rem] max-w-[50rem] flex-col justify-end gap-[1.6rem] rounded-[3rem] bg-cover bg-center bg-no-repeat px-8 py-20 mobile:h-[30rem] mobile:max-w-80 mobile:px-4 mobile:py-8 tablet:h-[40rem] tablet:max-w-[30rem] tablet:py-12'
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        {/* 배경 이미지 위에 오버레이 추가 */}
        <div className='absolute inset-0 rounded-[3rem] bg-black opacity-30' />

        <Text
          as='h3'
          variant='title30'
          strong={700}
          className='relative z-10 text-common-white'
        >
          {title}
        </Text>
        <Text
          as='p'
          variant='body20'
          strong={500}
          className='relative z-10 text-common-white'
        >
          {description}
        </Text>
      </div>
    </li>
  );
};

export default ConsultingCardItem;
