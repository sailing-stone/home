import Marquee from 'react-fast-marquee';
import Frame from '@/asset/image/main/frame.jpg';
import Image from '@/component/base/Image';

const PartnerImageList = () => {
  return (
    <Marquee
      speed={100}
      direction='left'
      pauseOnHover
    >
      <div className='mr-40' />
      <Image
        src={Frame}
        alt='alt'
        objectFit='contain'
        className='h-12 w-auto'
      />
    </Marquee>
  );
};

export default PartnerImageList;
