import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material';

interface ImageWithPlaceHolderProps {
  width: number;
  height: number;
  src: string;
  alt: string;
}

const Container = styled('div', {
  shouldForwardProp: (prop) => !['width', 'height'].includes(prop as string),
})<{ width: number; height: number }>(({ width, height }) => ({
  width: `${width}px`,
  height: `${height}px`,
  position: 'relative',
  overflow: 'hidden',
}));

const ImageWithPlaceHolder: React.FC<ImageWithPlaceHolderProps> = ({ src, alt, width, height }) => {
  

  return (
    <Container width={width} height={height}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          objectFit: 'scale-down' ,
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

export default ImageWithPlaceHolder;
