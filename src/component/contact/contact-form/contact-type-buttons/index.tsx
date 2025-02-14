import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import Text from '@/component/base/text';

interface Props {
  onChange: (newType: string) => void;
}

const ContactTypeButtons = ({ onChange }: Props) => {
  const [type, setType] = useState<'태블로 서비스' | '솔루션'>('태블로 서비스');

  const handleChangeType = (newType: '태블로 서비스' | '솔루션') => {
    setType(newType);
    onChange(newType);
  };

  return (
    <div className='flex justify-center gap-16 mobile:gap-4 tablet:gap-8'>
      <button
        type='button'
        className={twJoin(
          'shrink-0 rounded-[2.8rem] px-[10.6rem] py-6 shadow-button tablet:px-[11.7rem] mobile:py-[1rem] mobile:px-[3.7rem]',
          type === '태블로 서비스'
            ? 'bg-primary-main'
            : 'border border-primary-main',
        )}
        onClick={() => handleChangeType('태블로 서비스')}
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
          type === '솔루션' ? 'bg-primary-main' : 'border border-primary-main',
        )}
        onClick={() => handleChangeType('솔루션')}
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
