import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { styled } from '@mui/material';

const Container = styled('div', {
  shouldForwardProp: (prop) => !['width', 'height', 'border_radius'].includes(prop as string),
})<{ width: number; height: number; border_radius: string }>(({ width, height, border_radius }) => ({
  width: `${width}px`,
  height: `${height}px`,
  position: 'relative',
  overflow: 'hidden',
  borderRadius: border_radius,
}));

interface ImageResponsiveProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  border_radius?: string;
  priority?: boolean;  
  objectFit?: 'cover' | 'scale-down';
}

const ImageResponsive: React.FC<ImageResponsiveProps> = ({
  src,
  alt,
  width,
  height,
  border_radius = '0px',
  priority = false,
  objectFit = 'cover',  
}) => {

  if (objectFit == 'cover')
  {
      return (
        <Container width={width} height={height} border_radius={border_radius}>
          <Image
            src={src}
            alt={alt}
            priority={priority}
            quality={80}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder='blur'         
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            onError={() => {
              console.error('Erro ao carregar a imagem:', src);
            }}
          />
        </Container>
      );
  }
  else{
    return (
        <Container width={width} height={height} border_radius={border_radius}>
          <Image
            src={src}
            alt={alt}
            priority={priority}
            quality={80}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder='blur'            
            style={{
              objectFit: 'scale-down',
              objectPosition: 'center',
            }}
            onError={() => {
              console.error('Erro ao carregar a imagem:', src);
            }}
          />
        </Container>
      );
  }
  
  
};

export default ImageResponsive;
