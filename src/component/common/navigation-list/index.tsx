import { twMerge } from 'tailwind-merge';
import NavigationItem from '../navigation-item';

interface Props {
  list: { id: number | string; href: string; text: string }[];
  className?: string;
  activeText?: string;
  onNavigate?: (text: string) => void;
}

const NavigationList = ({ list, className, activeText, onNavigate }: Props) => {
  return (
    <ul className={twMerge('flex items-center gap-[15rem]', className)}>
      {list.map(({ id, href, text }) => (
        <NavigationItem
          key={id}
          href={href}
          text={text}
          isActive={activeText === text}
          onNavigate={onNavigate}
        />
      ))}
    </ul>
  );
};

export default NavigationList;
