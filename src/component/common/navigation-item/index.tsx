import { Link } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';
import { useLocalNavigation } from '@/context/local-navigation-context';

interface Props {
  type?: 'GNB' | 'LNB';
  href: string;
  text: string;
  isActive?: boolean;
  isCurrentPath?: boolean;
  onNavigate?: (text: string) => void;
}

const NavigationItem = ({
  type,
  href,
  text,
  isActive,
  isCurrentPath,
  onNavigate,
}: Props) => {
  const { handleSetNavigationItem } = useLocalNavigation();
  const handleNavigate = () => {
    handleSetNavigationItem('');
    setTimeout(() => {
      if (onNavigate) {
        onNavigate(text);
      }
    }, 0);
  };

  const className = twJoin(
    'shrink-0 leading-[2.1rem] transition-all duration-300 ease-in',
    type === 'LNB' &&
      'hover:text-primary-main hover:underline hover:underline-offset-8 hover:decoration-2',
    type === 'LNB' &&
      isActive &&
      'text-primary-main underline font-bold underline-offset-8 decoration-2',
    type === 'GNB' && 'hover:text-primary-main',
    type === 'GNB' && isCurrentPath && 'text-primary-main',
  );

  return (
    <li className={className}>
      <Link
        to={href}
        onClick={handleNavigate}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavigationItem;
