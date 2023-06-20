import { FC } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  style?: { [key: string]: string };
};

const ImageComponent: FC<Props> = ({ src, alt, width, height, style }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading='lazy'
      style={style}
    />
  );
};

export default ImageComponent;
