import { ReactNode } from 'react';
import Text from '@/component/base/text';

interface Props {
  index: number;
  title: ReactNode;
  description: ReactNode;
}

const EducationPointItem = ({ index, title, description }: Props) => {
  return (
    <li className='flex size-[32rem] flex-col items-center gap-10 rounded-[50%] border border-dashed border-border-education px-12 py-24 tablet:size-[21rem] tablet:gap-6 tablet:px-6 tablet:py-[2.6rem]'>
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
          className='leading-[3.4rem] text-common-black tablet:leading-[2.3rem]'
        >
          {title}
        </Text>
      </div>
      <Text
        as='p'
        variant='body18'
        strong={400}
        align='center'
        className='leading-[2.3rem] text-common-black tablet:leading-[1.8rem]'
      >
        {description}
      </Text>
    </li>
  );
};

export default EducationPointItem;
