import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, styled } from '@mui/material';
import Image from 'next/image';
import { ShadowConfig } from '@/types/ShadowConfig';

const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    !['border_radius', 'background_color', 'margin_card','sombraClara', 'sombraEscura'].includes(prop as string),
})<{
  border_radius: string;
  background_color: string;
  margin_card: string;
  sombraClara: ShadowConfig;
  sombraEscura: ShadowConfig;
}>(({ border_radius, background_color,  margin_card, sombraClara, sombraEscura }) => ({    
  borderRadius: border_radius,
  width: 'fit-content',
  height: 'fit-content',
  backgroundColor: background_color,
  margin: margin_card,
  boxShadow: `
    ${sombraClara.offsetX} ${sombraClara.offsetY} ${sombraClara.blur} ${sombraClara.color},
    ${sombraEscura.offsetX} ${sombraEscura.offsetY} ${sombraEscura.blur} ${sombraEscura.color}
  `,
  borderTop: `3px solid ${sombraClara.color}`,
  borderLeft: `3px solid ${sombraClara.color}`
}));

const DivImage = styled('div', {
  shouldForwardProp: (prop) =>
    !['border_radius', 'width', 'height'].includes(prop as string),
})<{
  border_radius: string;
  width: number;
  height: number;
}>(({ border_radius, width, height }) => ({
  width: `${width}px`,
  height: `${height}px`,
  position: 'relative',
  overflow: 'hidden',
  borderRadius: `${border_radius} ${border_radius} 0 0`,
}));

interface ImageCardProps {
  src: string;
  alt: string;    
  widthImage: number; 
  heightImage: number; 
  border_radius?: string;
  background_color?: string;
  margin?: string;
  sombraClara?: ShadowConfig;
  sombraEscura?: ShadowConfig;
  children: React.ReactNode;
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  widthImage, 
  heightImage, 
  border_radius = '0px',
  background_color = 'transparent', 
  margin = '0px',
  sombraClara = {offsetX:'0px', offsetY:'0px', blur:'0px', color:'transparent'},
  sombraEscura = {offsetX:'0px', offsetY:'0px', blur:'0px', color:'transparent'},
  children,
}) => {
  
    return (
        <Container border_radius={border_radius}
          background_color={background_color}  
          margin_card={margin}
          sombraClara={sombraClara}
          sombraEscura={sombraEscura}
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
