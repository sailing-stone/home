import Image from '@/component/base/Image';

interface Props {
  src?: string;
  className?: string;
}

const LogoWithTitle = ({
  src = '/image/logo-with-title.png',
  className,
}: Props) => {
  return (
    <Image
      src={src}
      alt='세일링스톤 로고'
      lazy={false}
      className={className}
    />
  );
};

export default LogoWithTitle;
