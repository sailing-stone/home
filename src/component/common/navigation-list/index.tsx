import { twMerge } from 'tailwind-merge';
import NavigationItem from '../navigation-item';

interface Props {
  type?: 'GNB' | 'LNB';
  list: { id: number | string; href: string; text: string }[];
  className?: string;
  activeText?: string;
  currentPathname?: string;
  onNavigate?: (text: string) => void;
}

const NavigationList = ({
  type = 'LNB',
  list,
  className,
  activeText,
  currentPathname,
  onNavigate,
}: Props) => {
  return (
    <ul className={twMerge('flex items-center gap-[15rem]', className)}>
      {list.map(({ id, href, text }) => (
        <NavigationItem
          key={id}
          type={type}
          href={href}
          text={text}
          isActive={activeText === text}
          isCurrentPath={currentPathname === href}
          onNavigate={onNavigate}
        />
      ))}
    </ul>
  );
};

export default NavigationList;
