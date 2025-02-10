import { ComponentProps, JSXElementConstructor, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import cn from '@/util/cn';

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type TagVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'small';
type TextVariants =
  | 'title'
  | 'title16'
  | 'title20'
  | 'title26'
  | 'title28'
  | 'title30'
  | 'title32'
  | 'title36'
  | 'title40'
  | 'title50'
  | 'title70'
  | 'body'
  | 'body18'
  | 'body20'
  | 'body32';

interface Props {
  as: TagVariants;
  variant: TextVariants;
  className?: string;
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  underline?: boolean;
  strong?: FontWeight;
}

const textVariant = cva('', {
  variants: {
    variant: {
      title: 'text-[7rem] mobile:text-[3rem] tablet:text-[4.5rem]',
      title16: 'text-[1.6rem] mobile:text-[1.2rem] tablet:text-[1.4rem]',
      title20: 'text-[2rem] mobile:text-[1.2rem] tablet:text-[1.6rem]',
      title26: 'text-[2.6rem] mobile:text-[1.4rem] tablet:text-[2rem]',
      title28: 'text-[2.8rem] mobile:text-[1.6rem] tablet:text-[2.4rem]',
      title30: 'text-[3rem] mobile:text-[1.8rem] tablet:text-[2rem]',
      title32: 'text-[3.2rem] mobile:text-[2rem] tablet:text-[2.8rem]',
      title36: 'text-[3.6rem] mobile:text-[2rem] tablet:text-[2.6rem]',
      title40: 'text-[4rem] mobile:text-[2.4rem] tablet:text-[3.5rem]',
      title50: 'text-[5rem] mobile:text-[2.6rem] tablet:text-[4rem]',
      title70: 'text-[7rem] mobile:text-[3.4rem] tablet:text-[4.5rem]',
      body: 'text-[2rem] mobile:text-[1.2rem] tablet:text-[1.6rem]',
      body18: 'text-[1.8rem] mobile:text-[1.2rem] tablet:text-[1.2rem]',
      body20: 'text-[2rem] mobile:text-[1.2rem] tablet:text-[1.4rem]',
      body32: 'text-[3.2rem] mobile:text-[1.4rem] tablet:text-[2rem]',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    underline: {
      true: 'underline decoration-2 underline-offset-4',
    },
    strong: {
      100: 'font-thin',
      200: 'font-extralight',
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
      800: 'font-extrabold',
      900: 'font-black',
    },
  },
  defaultVariants: {
    variant: 'body',
    align: 'center',
    underline: false,
    strong: 400,
  },
});

const Text = <
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
>({
  as,
  variant,
  align,
  underline,
  strong,
  className,
  children,
  ...rest
}: Props & ComponentProps<T>) => {
  const Tag = as || 'p';

  return (
    <Tag
      className={cn(
        textVariant({ variant, align, underline, strong }),
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Text;
