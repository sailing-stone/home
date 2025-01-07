import { Link } from 'react-router-dom';
import Image from '@/component/base/Image';
import URL from '@/constant/url';

interface Props {
  src?: string;
  className?: string;
}

const LogoWithTitle = ({
  src = '/image/logo-with-title.png',
  className,
}: Props) => {
  return (
    <Link to={URL.MAIN}>
      <Image
        src={src}
        alt='세일링스톤 로고'
        lazy={false}
        className={className}
      />
    </Link>
  );
};

export default LogoWithTitle;
