import { ReactNode } from 'react';

interface Props {
  index: number;
  title: ReactNode;
  description: ReactNode;
}

const EducationPointItem = ({ index, title, description }: Props) => {
  return (
    <li className='flex size-[35rem] flex-col items-center justify-center gap-2 rounded-full border border-dotted border-border-education'>
      <p className='text-[2rem] font-black text-primary-main'>Point {index}.</p>
      <h3 className='text-center text-[3.2rem] font-bold text-common-black'>
        {title}
      </h3>
      <p className='text-center text-[1.8rem] font-normal text-common-black'>
        {description}
      </p>
    </li>
  );
};

export default EducationPointItem;
