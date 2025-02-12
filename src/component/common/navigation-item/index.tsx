import { Link } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';
import Text from '@/component/base/text';
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
    'shrink-0 text-common-black hover:text-primary-main',
    type === 'LNB' &&
      'hover:underline hover:underline-offset-4 hover:decoration-2',
    type === 'LNB' && isActive && 'text-primary-main',
    type === 'GNB' && isCurrentPath && 'text-primary-main',
  );

  return (
    <li className='shrink-0'>
      <Link
        to={{ pathname: href, hash }}
        onClick={handleNavigate}
      >
        <Text
          as='p'
          variant='title16'
          strong={500}
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
