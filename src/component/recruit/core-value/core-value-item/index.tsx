import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  title: string;
  description: ReactNode;
  className?: string;
}

const CoreValueItem = ({ title, description, className }: Props) => {
  return (
    <li className={twMerge('flex flex-col gap-[4.5rem]', className)}>
      <div className='flex size-[43.6rem] items-center justify-center rounded-[50%] border border-primary-main'>
        <h3 className='flex size-[36.3rem] items-center justify-center rounded-[50%] bg-primary-main bg-coreValue px-[3.8rem] text-center text-[4rem] font-bold leading-[4.7rem] text-common-white'>
          {title}
        </h3>
      </div>
      <p className='text-center text-[2.4rem] font-light leading-[3.5rem]'>
        {description}
      </p>
    </li>
  );
};

export default CoreValueItem;
