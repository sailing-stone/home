import Badge from '@/component/base/badge';
import Image from '@/component/base/Image';
import TBDInfoList from './TBD-info-list';

const TBD = () => {
  return (
    <section className='flex flex-col items-center justify-center bg-contrast-200 py-60'>
      <Badge>
        <h1 className='text-[7rem] font-bold text-common-white'>
          WEB / MOBILE APP (TBD)
        </h1>
      </Badge>
      <small className='text-[2rem] font-normal text-common-white'>
        Tableau의 잠재력을 극대화하는 확장 솔루션
      </small>
      <div className='mt-40 flex w-[116rem] items-center justify-center gap-40'>
        <div className='flex shrink-0 flex-col items-end gap-20 pl-20'>
          <Image
            width='32.2rem'
            height='7.8rem'
            src='image/service/tableau-qualifications.png'
            alt='태블로 자격증들'
          />
          <p className='text-end text-[4rem] font-light text-common-white'>
            <span className='font-bold text-text-highlight'>
              Tableau 공식자격증
            </span>
            을
            <br />
            보유한 전문가들이
            <br />
            고객의데이터 시각화 여정을
            <br />
            함께합니다.
          </p>
        </div>
        <div className='inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10' />
        <TBDInfoList />
      </div>
    </section>
  );
};

export default TBD;
