import Marquee from 'react-fast-marquee';
import PartnerImageItem from '../partner-image-item';

const IMAGE_LIST = [
  { id: 1, src: '/image/main/삼성.png', alt: '삼성' },
  {
    id: 2,
    src: '/image/main/삼성 디스플레이.png',
    alt: '삼성 디스플레이',
  },
  { id: 3, src: '/image/main/삼성 SDS.png', alt: '삼성 SDS' },
  { id: 4, src: '/image/main/삼성증권.png', alt: '삼성증권' },
  { id: 5, src: '/image/main/신라호텔.png', alt: '신라호텔' },
  { id: 6, src: '/image/main/NH투자증권.png', alt: 'NH 투자증권' },
  { id: 7, src: '/image/main/한국투자증권.png', alt: '한국투자 증권' },
  {
    id: 8,
    src: '/image/main/신한캐피탈.png',
    alt: '신한캐피탈',
  },
  { id: 9, src: '/image/main/교보생명.png', alt: '교보생명' },
  {
    id: 10,
    src: '/image/main/미래에셋투자증권.png',
    alt: '미래에셋투자증권',
  },
  { id: 11, src: '/image/main/LG전자.png', alt: 'LG전자' },
  { id: 12, src: '/image/main/오토닉스.png', alt: '오토닉스' },
  { id: 13, src: '/image/main/PS&Marketing.png', alt: 'PS&Marketing' },
  { id: 14, src: '/image/main/JLR.png', alt: 'JLR' },
  { id: 15, src: '/image/main/포르쉐.png', alt: '포르쉐' },
  { id: 16, src: '/image/main/SK on.png', alt: 'SK on' },
  { id: 17, src: '/image/main/SK E&S.png', alt: 'SK E&S' },
  { id: 18, src: '/image/main/한화.png', alt: '한화' },
  { id: 19, src: '/image/main/SONY.png', alt: 'SONY' },
];

const PartnerImageList = () => {
  return (
    <Marquee
      speed={100}
      direction='left'
    >
      <ul className='flex'>
        {IMAGE_LIST.map(({ id, src, alt }) => (
          <PartnerImageItem
            key={id}
            src={src}
            alt={alt}
          />
        ))}
      </ul>
    </Marquee>
  );
};

export default PartnerImageList;
