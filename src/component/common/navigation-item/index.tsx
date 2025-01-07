import { Link } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';

interface Props {
  type?: 'GNB' | 'LNB';
  href: string;
  text: string;
  isActive?: boolean;
  onNavigate?: (text: string) => void;
}

const NavigationItem = ({ type, href, text, isActive, onNavigate }: Props) => {
  const handleNavigate = () => {
    setTimeout(() => {
      if (onNavigate) {
        onNavigate(text);
      }
    }, 0);
  };

  const className = twJoin(
    'shrink-0 leading-[2.1rem]',
    type === 'LNB' && 'hover:text-primary-main',
    isActive &&
      'text-primary-main underline font-bold underline-offset-8 decoration-2',
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
