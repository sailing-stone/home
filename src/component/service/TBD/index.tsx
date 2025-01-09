import Badge from '@/component/base/badge';
import Image from '@/component/base/Image';
import useIntersectingNavigation from '@/hook/useIntersectingNavigation';
import TBDInfoList from './TBD-info-list';

const TBD = () => {
  const ref = useIntersectingNavigation('Tableau Expertise 서비스');

  return (
    <section
      ref={ref}
      id='Tableau Expertise 서비스'
      className='flex flex-col items-center justify-center bg-contrast-200 pb-[20.9rem] pt-[18.7rem]'
    >
      <Badge>
        <h1 className='section-title text-common-white'>
          WEB / MOBILE APP (TBD)
        </h1>
      </Badge>
      <p className='section-description text-common-white'>
        Tableau의 잠재력을 극대화하는 확장 솔루션
      </p>
      <div className='mt-[10.3rem] flex items-center justify-center gap-[7.4rem]'>
        <div className='flex basis-[49%] flex-col items-end gap-[4.9rem] py-[4.3rem]'>
          <Image
            width='32.2rem'
            height='7.8rem'
            src='image/service/tableau-qualifications.png'
            alt='태블로 자격증들'
          />
          <p className='text-end text-[4rem] font-light leading-[6rem] text-common-white'>
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
