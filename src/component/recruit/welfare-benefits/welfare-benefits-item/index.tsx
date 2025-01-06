import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  description: ReactNode;
}

const WelfareBenefitsItem = ({ icon, title, description }: Props) => {
  return (
    <li className='flex flex-col gap-16'>
      <div className='flex size-[9.3rem] items-center justify-center rounded-[50%] bg-primary-main'>
        {icon}
      </div>
      <h3 className='text-[2.4rem] font-bold leading-[2.8rem]'>{title}</h3>
      <p className='text-[2.2rem] font-normal leading-[3rem]'>{description}</p>
    </li>
  );
};

export default WelfareBenefitsItem;
