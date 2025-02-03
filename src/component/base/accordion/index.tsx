import { ComponentProps, ReactNode, useState } from 'react';
import useResize from '@/hook/useResize';
import useToggle from '@/hook/useToggle';

export interface Props extends ComponentProps<'div'> {
  defaultVisible?: boolean;
  children: ReactNode;
  header: ReactNode;
  onToggle: (isToggle: boolean) => void;
}

const Accordion = ({
  defaultVisible = false,
  children,
  header,
  onToggle,
  className,
  ...rest
}: Props) => {
  const [height, setHeight] = useState(0);
  const { isToggle, handleToggle } = useToggle(defaultVisible);
  const ref = useResize(({ height: newHeight }) => setHeight(newHeight));

  const handleTrigger = () => {
    onToggle(isToggle);
    handleToggle();
  };

  return (
    <div
      className='flex flex-col items-center'
      {...rest}
    >
      <button
        type='button'
        onClick={handleTrigger}
      >
        {header}
      </button>
      <div
        className='overflow-hidden'
        style={{
          height: isToggle ? height : 0,
        }}
      >
        <div ref={ref}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
