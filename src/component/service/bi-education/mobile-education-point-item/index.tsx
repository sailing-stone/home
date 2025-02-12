import { ReactNode } from 'react';
import Text from '@/component/base/text';

interface Props {
  index: number;
  title: ReactNode;
  description: ReactNode;
}

const MobileEducationPointItem = ({ index, title, description }: Props) => {
  return (
    <div className='m-auto w-fit rounded-[20rem] border border-primary-main p-8'>
      <div className='flex size-[21rem] flex-col items-center justify-center gap-6 rounded-[50%] border border-dashed border-border-education px-12'>
        <div className='flex flex-col items-center gap-[0.8rem]'>
          <Text
            as='p'
            variant='title16'
            strong={900}
            className='text-primary-main'
          >
            Point {index}.
          </Text>
          <Text
            as='h3'
            variant='title26'
            strong={700}
            align='center'
            className='leading-[2.1rem] text-common-black'
          >
            {title}
          </Text>
        </div>
        <Text
          as='p'
          variant='body18'
          strong={400}
          align='center'
          className='leading-[1.6rem] text-common-black'
        >
          {description}
        </Text>
      </div>
    </div>
  );
};

export default MobileEducationPointItem;
