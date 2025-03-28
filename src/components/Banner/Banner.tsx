import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ContainerSafeSemMargem } from '../ContainerSafe';

const Container = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;  
  display: flex;     
  justify-content: center;
  height: 100%; 
`;

interface BannerProps {  
  src: string; 
  alt: string;        
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ src, alt, children }) => {  

  return (
    <Container>
      <BackgroundImage>
        <Image 
          src={src} 
          alt={alt} 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'center' }}           
          quality={80} 
          priority
        />
      </BackgroundImage>
      <Content>
        <ContainerSafeSemMargem>
        {children}        
        </ContainerSafeSemMargem>                
      </Content>                 
    </Container>    
  );
};

export default Banner;