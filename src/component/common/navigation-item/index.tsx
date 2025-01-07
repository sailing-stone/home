import { Link } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';

interface Props {
  href: string;
  text: string;
  isActive?: boolean;
  onNavigate?: (text: string) => void;
}

const NavigationItem = ({ href, text, isActive, onNavigate }: Props) => {
  const handleNavigate = () => {
    setTimeout(() => {
      if (onNavigate) {
        onNavigate(text);
      }
    }, 0);
  };

  const className = twJoin(
    'shrink-0 leading-[2.1rem]',
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
