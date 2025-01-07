import { ReactNode } from 'react';

interface Props {
  index: number;
  title: ReactNode;
  description: ReactNode;
}

const EducationPointItem = ({ index, title, description }: Props) => {
  return (
    <li className='flex size-[36rem] flex-col items-center gap-12 rounded-full border border-dotted border-border-education px-14 py-[5.9rem]'>
      <div className='flex flex-col items-center gap-[0.8rem]'>
        <p className='text-[2rem] font-black leading-[2.3rem] text-primary-main'>
          Point {index}.
        </p>
        <h3 className='text-center text-[3.2rem] font-bold leading-[4.3rem] text-common-black'>
          {title}
        </h3>
      </div>
      <p className='text-center text-[1.8rem] font-normal leading-[2.3rem] text-common-black'>
        {description}
      </p>
    </li>
  );
};

export default EducationPointItem;
