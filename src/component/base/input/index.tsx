import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface WrapperProps extends ComponentProps<'div'> {
  children: ReactNode;
}

const InputWrapper = ({ children, className, ...rest }: WrapperProps) => {
  return (
    <div
      className={twMerge('flex flex-col gap-[0.5rem] basis-1/2', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

interface FiledProps extends ComponentProps<'input'> {}

const InputFiled = ({ className, ...rest }: FiledProps) => {
  return (
    <input
      {...rest}
      className={twMerge(
        'rounded-[0.5rem] bg-lightGray px-[1rem] py-[1.5rem] outline-none',
        className,
      )}
    />
  );
};

interface TextareaProps extends ComponentProps<'textarea'> {}

const TextareaFiled = ({ className, ...rest }: TextareaProps) => {
  return (
    <textarea
      {...rest}
      className={twMerge(
        'rounded-[0.5rem] bg-lightGray px-[1rem] py-[1.5rem] outline-none h-[31.4rem] resize-none',
        className,
      )}
    />
  );
};

interface LabelProps extends ComponentProps<'label'> {
  children: ReactNode;
  required?: boolean;
}

const InputLabel = ({
  htmlFor,
  children,
  required,
  className,
  ...rest
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(
        'flex gap-[0.5rem] font-medium text-[2rem] leading-[2.4rem]',
        className,
      )}
      {...rest}
    >
      {children}
      {required && (
        <span className='font-bold leading-[2.4rem] text-primary-main'>*</span>
      )}
    </label>
  );
};

interface ErrorMessageProps extends ComponentProps<'p'> {
  children: ReactNode;
}

const InputErrorMessage = ({ children, ...rest }: ErrorMessageProps) => {
  return <p {...rest}>{children}</p>;
};

export default {
  Wrapper: InputWrapper,
  Filed: InputFiled,
  Label: InputLabel,
  ErrorMessage: InputErrorMessage,
  Textarea: TextareaFiled,
};
