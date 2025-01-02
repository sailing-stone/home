import { twMerge } from 'tailwind-merge';
import NavigationItem from '../navigation-item';

interface Props {
  list: { id: number | string; href: string; text: string }[];
  className?: string;
}

const NavigationList = ({ list, className }: Props) => {
  return (
    <ul className={twMerge('flex items-center gap-[15rem]', className)}>
      {list.map(({ id, href, text }) => (
        <NavigationItem
          key={id}
          href={href}
          text={text}
        />
      ))}
    </ul>
  );
};

export default NavigationList;
