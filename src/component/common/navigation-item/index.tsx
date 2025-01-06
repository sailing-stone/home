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
    if (onNavigate) {
      onNavigate(text);
    }
  };

  const className = twJoin(
    'shrink-0',
    isActive && 'text-primary-main underline',
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
