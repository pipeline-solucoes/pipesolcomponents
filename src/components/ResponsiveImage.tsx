import React from 'react';
import Image from 'next/image';


interface ImageContainerProps {
  width: string | number;
  height: string | number;
  src: string;
  alt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ width, height, src, alt }) => {
  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "scale-down", objectPosition: "center" }}
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
        quality={80}
      />
    </div>
  );
};

export default ImageContainer;

