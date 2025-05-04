import React from 'react';
import Image from 'next/image';
import { ContainerSafeSemMargem } from '../ContainerSafe';
import { styled } from '@mui/material/styles';

const Container = styled('div', {
  shouldForwardProp: (prop) => !['height'].includes(prop as string),
})<{ height: string }>(({ height }) => ({
  width: '100%',
  height: height,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
}));

interface BannerProps {  
  src: string;   
  dispositivo: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ src, dispositivo, children }) => { 
  
  const height : string = (dispositivo == 'large' ? '600px' : (dispositivo == 'medium' ? '600px' : '800px'));

  return (
    <Container height={height}>      
      <Image
        src={src}
        alt='imagem do banner'
        fill
        style={{ objectFit: 'cover'}}
        priority={true}
      />      
      <ContainerSafeSemMargem id="areasafebanner">
        {children}
      </ContainerSafeSemMargem>
    </Container>    
  );

};

export default Banner;