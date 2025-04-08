import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface ImageWithPlaceHolderProps {
  width: number;
  height: number;
  src: string;
  alt: string;
}

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['width','height'].includes(prop), })
  <{ width: number, height: number; }>`  
  width: ${props => `${props.width}px`}; 
  height:  ${props =>`${props.height}px`}; 
  position: relative;
  overflow: hidden;
`;

const ImageWithPlaceHolder: React.FC<ImageWithPlaceHolderProps> = ({ src, alt, width, height }) => {
  

  return (
    <Container width={width} height={height}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          objectFit: "scale-down",
          objectPosition: "center",                   
        }}
        quality={80}
        onLoad={() => {
          console.log('Imagem carregada com sucesso:', src);          
        }}
        onError={() => {
          console.error('Erro ao carregar a imagem:', src);          
        }}        
      />
    </Container>
  );
};

export default ImageWithPlaceHolder;
