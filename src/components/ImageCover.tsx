import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material';

interface ImageCoverProps {
  width: number;
  height: number;
  border_radius?: string;
  src: string;
  alt: string;
}

const Container = styled('div', {
  shouldForwardProp: (prop) => !['width', 'height', 'border_radius'].includes(prop as string),
})<{ width: number; height: number; border_radius: string }>(({ width, height, border_radius }) => ({
  width: `${width}px`,
  height: `${height}px`,
  position: 'relative',
  overflow: 'hidden',
  borderRadius: border_radius
}));

const ImageCover: React.FC<ImageCoverProps> = ({ src, alt, width, height, border_radius = "0px" }) => {
  
  return (
    <Container width={width} height={height} border_radius={border_radius}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}        
        style={{
          objectFit: 'cover' ,
          objectPosition: "center",                   
        }}
        quality={80}        
        onError={() => {
          console.error('Erro ao carregar a imagem:', src);          
        }}        
      />
    </Container>
  );
};

export default ImageCover;
