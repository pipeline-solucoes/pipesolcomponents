import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ContainerSafeSemMargem } from '../ContainerSafe';

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['height'].includes(prop) })
  <{  height: string; }>`  
  width: 100%;
  height:  ${props => props.height}; 
  position: relative;
  overflow: hidden;
  display: flex;     
  justify-content: center;
`;

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