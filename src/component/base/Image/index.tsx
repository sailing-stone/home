import { ComponentProps } from 'react';
import useLazyLoading from './useLazyLoading';

type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export interface Props extends ComponentProps<'img'> {
  lazy?: boolean;
  width?: number | string;
  height?: number | string;
  src: string;
  alt: string;
  placeholder?: string;
  threshold?: number;
  objectFit?: ObjectFit;
}

const Image = ({
  width,
  height,
  lazy = true,
  placeholder,
  threshold = 0.5,
  src,
  alt,
  objectFit = 'none',
  ...rest
}: Props) => {
  const { ref, loaded } = useLazyLoading({ lazy, threshold });

  return (
    <img
      ref={ref}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ width, height, objectFit }}
      {...rest}
    />
  );
};

export default Image;
