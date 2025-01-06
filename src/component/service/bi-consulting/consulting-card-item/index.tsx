import { twMerge } from 'tailwind-merge';
import Image from '@/component/base/Image';

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
        'relative text-common-white flex flex-col justify-start',
        className,
      )}
    >
      <div className='relative'>
        <Image
          width='57rem'
          height='74rem'
          src={src}
          alt={title}
          lazy={false}
        />
        <div className='absolute bottom-20 px-12'>
          <h3 className='text-[3rem] font-bold'>{title}</h3>
          <p className='text-[1.8rem] font-medium'>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ConsultingCardItem;
