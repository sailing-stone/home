import { Link } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';
import { useLNBToggle } from '@/context/lnb-toggle-context';
import { useLocalNavigation } from '@/context/local-navigation-context';

interface Props {
  type?: 'GNB' | 'LNB';
  hash?: string;
  href: string;
  text: string;
  isActive?: boolean;
  isCurrentPath?: boolean;
}

const NavigationItem = ({
  type,
  hash,
  href,
  text,
  isActive,
  isCurrentPath,
}: Props) => {
  const { handleSetNavigationItem } = useLocalNavigation();
  const { handleSetFalse } = useLNBToggle();

  const handleNavigate = () => {
    if (type === 'GNB') {
      handleSetNavigationItem('');
    }

    if (type === 'LNB') {
      handleSetNavigationItem(text);
    }

    handleSetFalse();
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
        to={{ pathname: href, hash }}
        onClick={handleNavigate}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavigationItem;
