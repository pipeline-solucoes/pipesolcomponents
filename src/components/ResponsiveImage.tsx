import React from 'react';
import Image from 'next/image';

interface ResponsiveImageProps {
  smallSrc: string;
  mediumSrc: string;
  largeSrc: string;
  alt: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ smallSrc, mediumSrc, largeSrc, alt }) => {
  return (
    <picture>
      <source media="(max-width: 600px)" srcSet={smallSrc} />
      <source media="(max-width: 1200px)" srcSet={mediumSrc} />
      <Image src={largeSrc} alt={alt} layout="responsive" width={1200} height={800} />
    </picture>
  );
};

export default ResponsiveImage;

