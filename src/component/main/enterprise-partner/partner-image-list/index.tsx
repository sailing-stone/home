import Marquee from 'react-fast-marquee';
import JLR from '@/asset/image/main/JLR.png';
import LG전자 from '@/asset/image/main/LG전자.png';
import NH투자증권 from '@/asset/image/main/NH투자증권.png';
import PSMarketing from '@/asset/image/main/PS&Marketing.png';
import SKEAndS from '@/asset/image/main/SK E&S.png';
import SKon from '@/asset/image/main/SK on.png';
import SONY from '@/asset/image/main/SONY.png';
import 미래에셋투자증권 from '@/asset/image/main/미래에셋투자증권.png';
import 신한캐피탈 from '@/asset/image/main/신한캐피탈.png';
import 오토닉스 from '@/asset/image/main/오토닉스.png';
import 교보생명 from '@/asset/image/main/교보생명.png';
import 삼성SDS from '@/asset/image/main/삼성 SDS.png';
import 삼성디스플레이 from '@/asset/image/main/삼성 디스플레이.png';
import 삼성 from '@/asset/image/main/삼성.png';
import 삼성증권 from '@/asset/image/main/삼성증권.png';
import 신라호텔 from '@/asset/image/main/신라호텔.png';
import 포르쉐 from '@/asset/image/main/포르쉐.png';
import 한국투자증권 from '@/asset/image/main/한국투자증권.png';
import 한화 from '@/asset/image/main/한화.png';
import PartnerImageItem from '../partner-image-item';

const IMAGE_LIST = [
  { id: 1, src: 삼성, alt: '삼성' },
  { id: 2, src: 삼성디스플레이, alt: '삼성 디스플레이' },
  { id: 3, src: 삼성SDS, alt: '삼성 SDS' },
  { id: 4, src: 삼성증권, alt: '삼성증권' },
  { id: 5, src: 신라호텔, alt: '신라호텔' },
  { id: 6, src: NH투자증권, alt: 'NH 투자증권' },
  { id: 7, src: 한국투자증권, alt: '한국투자 증권' },
  { id: 8, src: 신한캐피탈, alt: '신한캐피탈' },
  { id: 9, src: 교보생명, alt: '교보생명' },
  { id: 10, src: 미래에셋투자증권, alt: '미래에셋투자증권' },
  { id: 11, src: LG전자, alt: 'LG전자' },
  { id: 12, src: 오토닉스, alt: '오토닉스' },
  { id: 13, src: PSMarketing, alt: 'PS&Marketing' },
  { id: 14, src: JLR, alt: 'JLR' },
  { id: 15, src: 포르쉐, alt: '포르쉐' },
  { id: 16, src: SKon, alt: 'SK on' },
  { id: 17, src: SKEAndS, alt: 'SK E&S' },
  { id: 18, src: 한화, alt: '한화' },
  { id: 19, src: SONY, alt: 'SONY' },
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
