/* eslint-disable react/no-array-index-key */
import { ComponentProps, ReactNode, useState } from 'react';
import ArrowDownIcon from '@/component/common/icon/arrow-down-icon';
import VisibleGuard from '@/component/common/visible-guard';
import useClickAway from '@/hook/useClickAway';
import useToggle from '@/hook/useToggle';

interface Props extends Omit<ComponentProps<'div'>, 'onChange'> {
  options: ReactNode[];
  onChange?: (option: ReactNode) => void;
}

const Select = ({ options, onChange, ...rest }: Props) => {
  const { isToggle, handleToggle, handleSetFalse } = useToggle();
  const ref = useClickAway<HTMLDivElement>(handleSetFalse);
  const [selected, setSelected] = useState(options[0]);

  const handleOnClick = (option: ReactNode) => {
    setSelected(option);
    handleSetFalse();

    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div
      ref={ref}
      className='w-full'
      {...rest}
    >
      <button
        type='button'
        onClick={handleToggle}
        className='flex w-full items-center justify-between rounded-lg border p-4 text-[1.6rem] font-medium'
      >
        {selected}
        <ArrowDownIcon />
      </button>
      <VisibleGuard isVisible={isToggle}>
        <ul className='z-10 mt-1 rounded-lg border bg-white'>
          {options.map((option, index) => (
            <li key={index}>
              <button
                type='button'
                onClick={() => handleOnClick(option)}
                className='w-full bg-common-white p-4 text-start text-[1.6rem] font-medium hover:bg-primary-100'
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </VisibleGuard>
    </div>
  );
};

export default Select;
