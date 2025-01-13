import Image from '@/component/base/Image';

interface Props {
  src: string;
  alt: string;
}

const PartnerImageItem = ({ src, alt }: Props) => {
  return (
    <li>
      <Image
        src={src}
        alt={alt}
      />
    </li>
  );
};

export default PartnerImageItem;
