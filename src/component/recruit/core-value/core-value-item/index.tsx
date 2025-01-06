import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  title: string;
  description: ReactNode;
  className?: string;
}

const CoreValueItem = ({ title, description, className }: Props) => {
  return (
    <li className={twMerge('flex flex-col gap-20', className)}>
      <div className='flex size-[43.6rem] items-center justify-center rounded-[50%] border border-primary-main'>
        <h3 className='flex size-[36.3rem] items-center justify-center rounded-[50%] bg-primary-main bg-coreValue px-12 text-center text-[4rem] font-bold text-common-white'>
          {title}
        </h3>
      </div>
      <p className='text-center text-[2.4rem] font-light'>{description}</p>
    </li>
  );
};

export default CoreValueItem;
