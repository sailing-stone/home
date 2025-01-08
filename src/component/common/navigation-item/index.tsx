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
    'shrink-0 leading-[2.1rem] transition-all duration-300 ease-in',
    type === 'LNB' &&
      'hover:text-primary-main hover:underline hover:underline-offset-8 hover:decoration-2',
    type === 'LNB' &&
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
