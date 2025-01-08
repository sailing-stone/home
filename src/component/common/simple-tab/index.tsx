import { useState } from 'react';
import { twJoin } from 'tailwind-merge';

interface Props {
  length?: number;
  onChange: (index: number) => void;
}

const SimpleTab = ({ length = 3, onChange }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex gap-4'>
      {Array.from({ length }, (_, index) => index).map((value) => {
        return (
          <div
            key={value}
            className={twJoin(
              'h-1 w-[3.8rem] rounded-lg',
              activeIndex === value ? 'bg-common-white' : 'bg-tab',
            )}
            onClick={() => {
              onChange(value);
              setActiveIndex(value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onChange(value);
                setActiveIndex(value);
              }
            }}
            role='button'
            tabIndex={0}
          />
        );
      })}
    </div>
  );
};

export default SimpleTab;
