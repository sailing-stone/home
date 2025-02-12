import TableauEmblem from '@/asset/image/service/tableau-emblem.png';
import Badge from '@/component/base/badge';
import Image from '@/component/base/Image';
import Text from '@/component/base/text';
import useIntersectingNavigation from '@/hook/useIntersectingNavigation';
import TBDInfoList from './TBD-info-list';

const TBD = () => {
  const ref = useIntersectingNavigation('Tableau Expertise 서비스');

  return (
    <section
      ref={ref}
      className='flex flex-col items-center justify-center gap-40 bg-contrast-200 pb-40 pt-60 mobile:gap-20 mobile:pb-20 mobile:pt-40 tablet:gap-32 tablet:pb-32 tablet:pt-52'
    >
      <div className='flex flex-col gap-12 mobile:gap-4 tablet:gap-8'>
        <Badge>
          <Text
            id='TBD'
            as='h1'
            variant='title70'
            strong={700}
            align='center'
            className='text-common-white'
          >
            Tableau Expertise
            <br className='hidden mobile:block' />
            Service
          </Text>
        </Badge>
        <Text
          as='p'
          variant='body20'
          strong={400}
          align='center'
          className='text-common-white'
        >
          Tableau의 잠재력을 극대화하는 <br />
          확장 솔루션 입니다.
        </Text>
      </div>

      <div className='flex justify-center gap-20 px-36 mobile:flex-col mobile:px-6 tablet:gap-8'>
        <div className='flex shrink-0 basis-1/2 flex-col items-end gap-20 mobile:self-center tablet:gap-8'>
          <Image
            src={TableauEmblem}
            alt='태블로 자격증들'
            objectFit='contain'
            className='w-[28rem] mobile:w-[22rem] tablet:w-80'
          />
          <Text
            as='p'
            variant='title36'
            strong={300}
            align='right'
            className='text-common-white mobile:text-center'
          >
            <Text
              as='span'
              variant='title36'
              strong={700}
              className='text-text-highlight'
            >
              Tableau 공식자격증
            </Text>
            을
            <br />
            보유한 전문가들이
            <br />
            고객의데이터 시각화 여정을
            <br />
            함께합니다.
          </Text>
        </div>
        <div className='inline-block w-0.5 shrink-0 self-stretch bg-neutral-100 mobile:h-px mobile:w-40 mobile:self-center dark:bg-white/10' />
        <TBDInfoList />
      </div>
    </section>
  );
};

export default TBD;
