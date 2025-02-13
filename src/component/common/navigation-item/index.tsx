import { Link, useLocation } from 'react-router-dom';
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

const HEADER_HEIGHT_PX = 140;

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
  const location = useLocation();
  const { handleSetNavigationItem } = useLocalNavigation();
  const { handleSetFalse } = useLNBToggle();

  const url = `${href}${hash ? `#${hash}` : ''}`;
  const isRecruit = url === URL.RECRUIT;

  const handleNavigate = () => {
    const { pathname, hash: currentHash } = location;

    if (type === 'GNB') {
      handleSetNavigationItem('');
    }

    if (type === 'LNB') {
      handleSetNavigationItem(text);
    }

    if (url === `${pathname}${currentHash}`) {
      const scrollTarget = document.querySelector(currentHash);

      if (scrollTarget) {
        setTimeout(() => {
          const rect = scrollTarget.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;

          window.scrollTo({
            top: absoluteTop - HEADER_HEIGHT_PX,
            behavior: 'smooth',
          });
        }, 150);
      }
    }

    handleSetFalse();
  };

  const className = twJoin(
    'shrink-0 hover:text-primary-main hover:underline hover:underline-offset-4 hover:decoration-2',
    type === 'LNB' && isActive && 'text-primary-main',
    type === 'GNB' && isCurrentPath && 'text-primary-main',
  );

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
