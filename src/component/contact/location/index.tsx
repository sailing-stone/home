import Badge from '@/component/base/badge';
import MailIcon from '@/component/common/icon/mail-icon';
import PhoneIcon from '@/component/common/icon/phone-icon';
import KakaoMap from './kakao-map';

const Location = () => {
  return (
    <section className='flex flex-col items-center justify-center pb-[33.2rem]'>
      <Badge>
        <h1 className='section-title'>위치</h1>
      </Badge>
      <div className='flex gap-[5.3rem] pt-[7.3rem]'>
        <KakaoMap />
        <div className='flex flex-col gap-32 self-end'>
          <div className='flex flex-col gap-[2.2rem]'>
            <h3 className='text-[2.4rem] font-bold leading-[2.9rem]'>주소</h3>
            <p className='text-[2rem] font-normal leading-[2.4rem]'>
              서울특별시 강서구 마곡중앙로 161-8 두산더랜드파크 B동 13층
            </p>
          </div>
          <div className='flex flex-col gap-[2.2rem]'>
            <h3 className='text-[2.4rem] font-bold leading-[2.9rem]'>연락처</h3>
            <div className='flex gap-[1.3rem]'>
              <div className='pt-[1.3rem]'>
                <PhoneIcon />
              </div>
              <div className='text-[2rem] font-normal leading-[4rem]'>
                <p>02 - 2039 - 9268</p>
                <p>0505 - 300 - 9238</p>
              </div>
            </div>
            <div className='flex items-center gap-[1.3rem]'>
              <MailIcon />
              <p className='text-[2rem] font-normal leading-[4rem]'>
                dskang@sailingstone.io
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
