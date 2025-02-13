import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import Text from '@/component/base/text';

const ContactTypeButtons = () => {
  const [category, setCategory] = useState<'태블로 서비스' | '솔루션'>(
    '태블로 서비스',
  );

  const handleChangeCategory = (newCategory: '태블로 서비스' | '솔루션') => {
    setCategory(newCategory);
  };

  return (
    <div className='flex justify-center gap-16 mobile:gap-4 tablet:gap-8'>
      <button
        type='button'
        className={twJoin(
          'shrink-0 rounded-[2.8rem] px-[10.6rem] py-6 shadow-button tablet:px-[11.7rem] mobile:py-[1rem] mobile:px-[3.7rem]',
          category === '태블로 서비스'
            ? 'bg-primary-main'
            : 'border border-primary-main',
        )}
        onClick={() => handleChangeCategory('태블로 서비스')}
      >
        <Text
          as='p'
          variant='body18'
          strong={600}
        >
          태블로 서비스
        </Text>
      </button>
      <button
        type='button'
        className={twJoin(
          'shrink-0 rounded-[2.8rem] px-[13.2rem] py-6 shadow-button tablet:px-[13.7rem] mobile:py-[1rem] mobile:px-[5.4rem]',
          category === '솔루션'
            ? 'bg-primary-main'
            : 'border border-primary-main',
        )}
        onClick={() => handleChangeCategory('솔루션')}
      >
        <Text
          as='p'
          variant='body18'
          strong={600}
        >
          솔루션
        </Text>
      </button>
    </div>
  );
};

export default ContactTypeButtons;
