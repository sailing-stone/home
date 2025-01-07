import Badge from '@/component/base/badge';
import KakaoMap from './kakao-map';

const Location = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <Badge>
        <h1 className='section-title'>위치</h1>
      </Badge>
      <div>
        <KakaoMap />
      </div>
    </section>
  );
};

export default Location;
