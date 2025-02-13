import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Text from '../text';

interface WrapperProps extends ComponentProps<'div'> {
  children: ReactNode;
}

const InputWrapper = ({ children, className, ...rest }: WrapperProps) => {
  return (
    <div
      className={twMerge('flex flex-col gap-[0.5rem]', className)}
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
        'border rounded-[0.5rem] bg-lightGray px-[1rem] py-[1rem] outline-none text-[1.6rem]',
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
        'border rounded-[0.5rem] bg-lightGray px-[1rem] py-[1rem] outline-none resize-none text-[1.6rem]',
        className,
      )}
    />
  );
};

interface LabelProps extends ComponentProps<'label'> {
  children: ReactNode;
  required?: boolean;
  variant: string;
}

const InputLabel = ({
  htmlFor,
  children,
  required,
  className,
  variant,
  ...rest
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge('flex gap-[0.5rem]', className)}
      {...rest}
    >
      <Text
        as='p'
        variant={variant}
        strong={700}
      >
        {children}
      </Text>
      {required && <span className='text-[1.6rem] text-primary-main'>*</span>}
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
