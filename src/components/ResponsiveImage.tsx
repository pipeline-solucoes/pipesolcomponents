import React from 'react';
import Image from 'next/image';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, width, height }) => {
  return (
    <div style={{ position: 'relative', width: width, height: height }}>        
      <Image 
        src={src} 
        alt={alt} 
        fill
        style={{ objectFit: 'scale-down', objectPosition: 'center' }}
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />      
    </div>
  );
};

export default ResponsiveImage;

