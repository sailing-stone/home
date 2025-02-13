import Map from '@/asset/image/contact/map.png';
import Badge from '@/component/base/badge';
import Image from '@/component/base/Image';
import Text from '@/component/base/text';
import Mail from '@/component/common/icon/mail.svg?react';
import Phone from '@/component/common/icon/phone.svg?react';
import Print from '@/component/common/icon/print.svg?react';
import useIntersectingNavigation from '@/hook/useIntersectingNavigation';

const Location = () => {
  const ref = useIntersectingNavigation('찾아오시는 길');

  return (
    <section
      ref={ref}
      id='location'
      className='flex flex-col items-center justify-center gap-40 pb-60 mobile:gap-20 mobile:pb-40 tablet:gap-32 tablet:pb-52'
    >
      <Badge>
        <Text
          as='h1'
          variant='title70'
          strong={700}
        >
          찾아오시는 길
        </Text>
      </Badge>
      <div className='flex gap-12 px-[2.4rem] mobile:flex-col tablet:gap-[2.4rem]'>
        <Image
          src={Map}
          alt='세일링스톤 위치'
          objectFit='cover'
          className='h-[41rem] w-[54rem] mobile:size-[28.8rem] tablet:size-[34.8rem]'
        />
        <div className='flex flex-col gap-32 self-end mobile:gap-12 mobile:self-start tablet:gap-20'>
          <div className='flex flex-col gap-8 mobile:gap-4 tablet:gap-4'>
            <Text
              as='h3'
              variant='title24'
              strong={700}
            >
              주소
            </Text>
            <Text
              as='p'
              variant='body20'
              strong={400}
            >
              서울특별시 강서구 마곡중앙로 161-8
              <br className='hidden mobile:block' /> 두산더랜드파크 B동 13층
            </Text>
          </div>
          <div className='flex flex-col gap-8 mobile:gap-4 tablet:gap-4'>
            <Text
              as='h3'
              variant='title24'
              strong={700}
            >
              연락처
            </Text>
            <ul className='flex flex-col gap-6 mobile:gap-6 tablet:gap-6'>
              <li className='flex items-center gap-4'>
                <Phone className='size-[2.4rem] mobile:size-[1.1rem] tablet:size-[1.8rem]' />
                <Text
                  as='p'
                  variant='body20'
                  strong={400}
                >
                  02 - 2039 - 9268
                </Text>
              </li>
              <li className='flex items-center gap-4'>
                <Print className='size-[2.4rem] mobile:size-[1.1rem] tablet:size-[1.8rem]' />
                <Text
                  as='p'
                  variant='body20'
                  strong={400}
                >
                  0505 - 300 - 9238
                </Text>
              </li>
              <li className='flex items-center gap-4'>
                <Mail className='size-[2.4rem] mobile:size-[1.1rem] tablet:size-[1.8rem]' />
                <Text
                  as='p'
                  variant='body20'
                  strong={400}
                >
                  dskang@sailingstone.io
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
