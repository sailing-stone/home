import Image from '@/component/base/Image';

interface Props {
  src: string;
  alt: string;
}

const PartnerImageItem = ({ src, alt }: Props) => {
  return (
    <li className='mr-40'>
      <Image
        src={src}
        alt={alt}
        lazy={false}
        objectFit='contain'
      />
    </li>
  );
};

export default PartnerImageItem;
