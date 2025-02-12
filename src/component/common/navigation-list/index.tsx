import { ForwardedRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import NavigationItem from '../navigation-item';

interface Props {
  type?: 'GNB' | 'LNB';
  list: { id: number | string; href: string; text: string; hash?: string }[];
  className?: string;
  activeText?: string;
  currentPathname?: string;
  variant: string;
  strong: number;
}

const NavigationList = forwardRef(
  (
    {
      type = 'LNB',
      list,
      className,
      activeText,
      currentPathname,
      variant,
      strong,
    }: Props,
    ref?: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <ul
        ref={ref}
        className={twMerge('flex gap-[2rem]', className)}
      >
        {list.map(({ id, hash, href, text }) => (
          <NavigationItem
            key={id}
            hash={hash}
            type={type}
            href={href}
            text={text}
            isActive={activeText === text}
            isCurrentPath={currentPathname === href}
            variant={variant}
            strong={strong}
          />
        ))}
      </ul>
    );
  },
);

export default NavigationList;
