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

  let convertedSrc;

  if (isDevelopment) {
    convertedSrc = src;
  } else if (src.endsWith('.png')) {
    convertedSrc = `${src}.webp`;
  } else {
    convertedSrc = src;
  }

  let convertedPlaceholder;

  if (isDevelopment) {
    convertedPlaceholder = placeholder;
  } else if (placeholder.endsWith('.png')) {
    convertedPlaceholder = `${placeholder}.webp`;
  } else {
    convertedPlaceholder = placeholder;
  }

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
