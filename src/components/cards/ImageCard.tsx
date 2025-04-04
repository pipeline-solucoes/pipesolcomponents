import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Stack, Box } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';

interface CardBookProps {  
  src: string;
  alt: string;
  height: string; 
  widthImage: number;
  heightImage: number; 
  border_radius?: string;
  background_color?: string;
  children: React.ReactNode;   
}

const StyledStack = styled(Stack)<{$border_radius?:string, 
    $background_color?: string, $width: number, 
    $height: string}>`   
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.$border_radius || '0px'};
  width: ${(props) => `${props.$width}px`};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$background_color || '#00000000'};
`;

const ImageCard : React.FC<CardBookProps> = ({src, alt, height, widthImage,
    heightImage, border_radius, background_color, children})  => {

  return (
    <StyledStack $border_radius={border_radius} $background_color={background_color} 
        $width={widthImage} $height={height}>            
      <Box flex={1}>                          
        <Image 
          src={src} 
          alt={alt}   
          width={widthImage}
          height={heightImage}       
          style={{ objectFit: "cover", objectPosition: "center" }} 
          quality={80}        
        />
        
      </Box>
      <Box>
        {children}
      </Box>
    </StyledStack>
  );
};

export default ImageCard;
