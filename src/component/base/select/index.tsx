/* eslint-disable react/no-array-index-key */
import { ReactNode, useState } from 'react';
import ArrowDownIcon from '@/component/common/icon/arrow-down-icon';
import useToggle from '@/hook/useToggle';

interface Props {
  options: ReactNode[];
  onChange?: (option: ReactNode) => void;
}

const Select = ({ options, onChange }: Props) => {
  const { isToggle, handleToggle, handleSetFalse } = useToggle();
  const [selected, setSelected] = useState(options[0]);

  const handleOnClick = (option: ReactNode) => {
    setSelected(option);
    handleSetFalse();

    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={handleToggle}
        className='flex w-full items-center justify-between rounded-lg bg-input px-4 py-6'
      >
        {selected}
        <ArrowDownIcon />
      </button>
      {isToggle && (
        <ul className='absolute z-10 mt-1 w-full rounded-lg border bg-white'>
          {options.map((option, index) => (
            <li key={index}>
              <button
                type='button'
                onClick={() => handleOnClick(option)}
                className='w-full  bg-common-white px-4 py-6 text-start hover:bg-input'
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
