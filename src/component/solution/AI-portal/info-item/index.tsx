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
        'flex gap-[3.7rem] px-[3rem]',
        isReverse && 'flex-row-reverse text-right',
      )}
    >
      <div className='flex flex-col gap-8 self-end'>
        <h3 className='title-28 font-bold leading-[3.3rem]'>{title}</h3>
        <p className='title-28 font-normal leading-[3.5rem]'>{description}</p>
      </div>
    </li>
  );
};

export default InfoItem;
