import Image from '@/component/base/Image';

const LogoWithTitle = () => {
  return (
    <Image
      src='/image/logo-with-title.png'
      alt='세일링스톤 로고'
      lazy={false}
    />
  );
};

export default LogoWithTitle;
