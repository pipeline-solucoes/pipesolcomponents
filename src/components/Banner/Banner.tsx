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
  alt: string;
  height: string;
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ src, alt, height = "600px", children }) => { 

  return (
    <Container height={height}>      
      <Image
        src={src}
        alt={alt}
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