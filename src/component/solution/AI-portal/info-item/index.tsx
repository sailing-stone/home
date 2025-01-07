import { twJoin } from 'tailwind-merge';

interface Props {
  title: string;
  description: string;
  isReverse: boolean;
}

const InfoItem = ({ title, description, isReverse }: Props) => {
  return (
    <li
      className={twJoin(
        'flex gap-[3.7rem]',
        isReverse && 'flex-row-reverse text-right',
      )}
    >
      <div className='size-[56.5rem] shrink-0 bg-gray-100' />
      <div className='flex flex-col gap-[7.3rem] self-end'>
        <h3 className='text-[2.8rem] font-bold leading-[3.3rem]'>{title}</h3>
        <p className='text-[2.2rem] font-normal leading-[3.5rem]'>
          {description}
        </p>
      </div>
    </li>
  );
};

export default InfoItem;
