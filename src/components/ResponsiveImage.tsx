import React from 'react';
import Image from 'next/image';

interface ResponsiveImageProps {
  smallSrc: string;
  mediumSrc: string;
  largeSrc: string;
  alt: string;
  width: string;
  height: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ smallSrc, mediumSrc, largeSrc, alt, width, height }) => {
  return (
    <div style={{ position: 'relative', width: width, height: height }}>
      <picture>
        <source media="(max-width: 600px)" srcSet={smallSrc} />
        <source media="(max-width: 1200px)" srcSet={mediumSrc} />
        <Image 
            src={largeSrc} 
            alt={alt} 
            fill 
            style={{ objectFit: 'scale-down', objectPosition: 'center' }}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </picture>
    </div>
  );
};

export default ResponsiveImage;

