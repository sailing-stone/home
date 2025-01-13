import Marquee from 'react-fast-marquee';
import AutonicsImage from '@/asset/image/main/autonics.png';
import HanwhaImage from '@/asset/image/main/hanwha.png';
import JLRImage from '@/asset/image/main/jlr.png';
import KoreaInvestmentImage from '@/asset/image/main/korea-investment.png';
import KyoboImage from '@/asset/image/main/kyobo.png';
import LGCNSImage from '@/asset/image/main/lg-cns.png';
import LGEletronicsImage from '@/asset/image/main/lg-electronics.png';
import MiraeassetImage from '@/asset/image/main/miraeasset.png';
import NHSecuritiesImage from '@/asset/image/main/nh-securities.png';
import PorscheImage from '@/asset/image/main/porsche.png';
import PSMarketingImage from '@/asset/image/main/ps-marketing.png';
import SamsungDisplayImage from '@/asset/image/main/samsung-display.png';
import SamsungPOPImage from '@/asset/image/main/samsung-pop.png';
import SamsungSDSImage from '@/asset/image/main/samsung-sds.png';
import SamsungImage from '@/asset/image/main/samsung.png';
import ShillaHotelImage from '@/asset/image/main/shilla-hotel.png';
import ShinhanCapitalImage from '@/asset/image/main/shinhan-capital.png';
import SKESImage from '@/asset/image/main/sk-es.png';
import SKOnImage from '@/asset/image/main/sk-on.png';
import SONYImage from '@/asset/image/main/sony.png';
import PartnerImageItem from '../partner-image-item';

const IMAGE_LIST = [
  { id: 1, src: SamsungImage, alt: '삼성' },
  { id: 2, src: SamsungDisplayImage, alt: '삼성 디스플레이' },
  { id: 3, src: SamsungSDSImage, alt: '삼성 SDS' },
  { id: 4, src: SamsungPOPImage, alt: '삼성증권' },
  { id: 5, src: ShillaHotelImage, alt: '신라호텔' },
  { id: 6, src: NHSecuritiesImage, alt: 'NH 투자증권' },
  { id: 7, src: KoreaInvestmentImage, alt: '한국투자 증권' },
  { id: 8, src: ShinhanCapitalImage, alt: '신한캐피탈' },
  { id: 9, src: KyoboImage, alt: '교보생명' },
  { id: 10, src: MiraeassetImage, alt: '미래에셋투자증권' },
  { id: 11, src: LGEletronicsImage, alt: 'LG 전자' },
  { id: 12, src: LGCNSImage, alt: 'LG CNS' },
  { id: 13, src: AutonicsImage, alt: '오토닉스' },
  { id: 14, src: PSMarketingImage, alt: 'PS&Marketing' },
  { id: 15, src: JLRImage, alt: 'JLR' },
  { id: 16, src: PorscheImage, alt: '포르쉐' },
  { id: 17, src: SKOnImage, alt: 'SK on' },
  { id: 18, src: SKESImage, alt: 'SK E&S' },
  { id: 19, src: HanwhaImage, alt: '한화' },
  { id: 20, src: SONYImage, alt: 'SONY' },
];

const PartnerImageList = () => {
  return (
    <Marquee
      speed={100}
      direction='left'
    >
      <ul className='flex gap-40'>
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
