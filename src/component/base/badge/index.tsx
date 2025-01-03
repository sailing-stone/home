import { ReactNode, ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface Props extends ComponentProps<'sub'> {
  children: ReactNode;
  className?: string;
}

const Badge = ({ children, className, ...rest }: Props) => {
  return (
    <div className='relative inline-block'>
      {children}
      <sub
        className={twMerge(
          'absolute top-4 left-[-3rem] size-8 rounded-[50%] bg-primary-main',
          className,
        )}
        {...rest}
      />
    </div>
  );
};

export default Badge;
