import { twMerge } from 'tailwind-merge';

interface Props {
  src: string;
  title: string;
  description: string;
  className?: string;
}

const ConsultingCardItem = ({ src, title, description, className }: Props) => {
  return (
    <li
      className={twMerge(
        'text-common-white flex flex-col justify-start relative',
        className,
      )}
    >
      <div
        className='flex h-[74.1rem] max-w-[57.2rem] flex-col justify-end gap-[1.6rem] rounded-[3rem] bg-cover bg-center bg-no-repeat px-[3.9rem] py-[6.2rem]'
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        <h3 className='text-[3rem] font-bold'>{title}</h3>
        <p className='text-[1.8rem] font-medium'>{description}</p>
      </div>
    </li>
  );
};

export default ConsultingCardItem;
