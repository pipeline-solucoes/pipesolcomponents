import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';

interface CardBookProps {
  src: string;
  alt: string;    
  widthImage: number; 
  heightImage: number; 
  border_radius?: string;
  background_color?: string;
  children: React.ReactNode;
}

const Container = styled(Box).withConfig({
  shouldForwardProp: (prop) =>
    !['border_radius', 'background_color', 'width', 'height'].includes(prop),
})<{
  border_radius: string;
  background_color: string;
}>`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.border_radius};
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => props.background_color};
`;


const DivImage = styled.div.withConfig({
  shouldForwardProp: (prop) => !['border_radius', 'width', 'height'].includes(prop),
})<{
  border_radius: string;
  width: number;
  height: number;
}>`
  width: ${props =>`${props.width}px`};
  height:  ${props =>`${props.height}px`};
  position: relative;
  overflow: hidden;
  border-radius: ${(props) => props.border_radius} ${(props) => props.border_radius} 0 0;
`;


const ImageCard: React.FC<CardBookProps> = ({
  src,
  alt,
  widthImage, 
  heightImage, 
  border_radius = '0px',
  background_color = 'transparent', 
  children,
}) => {
  return (
    <Container
      border_radius={border_radius}
      background_color={background_color}      
    >
      <DivImage border_radius={border_radius} width={widthImage} height={heightImage}>
        <Image
          src={src}
          alt={alt}
          width={widthImage}
          height={heightImage}
          style={{ objectFit: 'cover' }}
          quality={80}
        />
      </DivImage>
      <Box sx={{height: 'auto'}}>
        {children}
      </Box>      
    </Container>
  );
};

export default ImageCard;
