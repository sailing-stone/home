import { Link } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';
import Text from '@/component/base/text';
import URL from '@/constant/url';
import { useLNBToggle } from '@/context/lnb-toggle-context';
import { useLocalNavigation } from '@/context/local-navigation-context';

interface Props {
  type?: 'GNB' | 'LNB';
  hash?: string;
  href: string;
  text: string;
  isActive?: boolean;
  isCurrentPath?: boolean;
  variant: string;
  strong: number;
}

const NavigationItem = ({
  type,
  hash,
  href,
  text,
  isActive,
  isCurrentPath,
  variant,
  strong,
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
    'shrink-0 hover:text-primary-main hover:underline hover:underline-offset-4 hover:decoration-2',
    type === 'LNB' && isActive && 'text-primary-main',
    type === 'GNB' && isCurrentPath && 'text-primary-main',
  );

  const url = `${href}${hash ? `#${hash}` : ''}`;
  const isRecruit = url === URL.RECRUIT;

  return (
    <li className='shrink-0'>
      <Link
        to={url}
        target={isRecruit ? '_blank' : '_self'}
        onClick={handleNavigate}
      >
        <Text
          as='p'
          variant={variant}
          strong={strong}
          underline={type === 'LNB' && isActive}
          className={className}
        >
          {text}
        </Text>
      </Link>
    </li>
  );
};

export default NavigationItem;
