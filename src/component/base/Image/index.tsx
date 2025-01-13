import { ComponentProps } from 'react';
import PlaceholderImage from '@/asset/image/logo.png';
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

const isDevelopment = import.meta.env.MODE === 'development';

const Image = ({
  width,
  height,
  lazy = true,
  placeholder = PlaceholderImage,
  threshold = 0.1,
  src,
  alt,
  objectFit = 'none',
  ...rest
}: Props) => {
  const { ref, loaded } = useLazyLoading({ lazy, threshold });

  const convertedSrc = isDevelopment ? src : `${src}.webp`;

  const convertedPlaceholder = isDevelopment
    ? placeholder
    : `${placeholder}.webp`;

  return (
    <img
      ref={ref}
      src={loaded ? convertedSrc : convertedPlaceholder}
      alt={alt}
      style={{ width, height, objectFit }}
      {...rest}
    />
  );
};

export default Image;
