import { Link } from 'react-router-dom';
import LogoImage from '@/asset/image/logo-with-title.png';
import Image from '@/component/base/Image';
import URL from '@/constant/url';
import { useLocalNavigation } from '@/context/local-navigation-context';

interface Props {
  src?: string;
  className?: string;
}

const LogoWithTitle = ({ src, className }: Props) => {
  const { handleSetNavigationItem } = useLocalNavigation();

  return (
    <Link to={URL.MAIN}>
      <Image
        src={src || LogoImage}
        alt='세일링스톤 로고'
        lazy={false}
        className={className}
        onClick={() => handleSetNavigationItem('')}
      />
    </Link>
  );
};

export default LogoWithTitle;
