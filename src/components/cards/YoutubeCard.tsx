import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, styled } from '@mui/material';
import { ShadowConfig } from '@/types/ShadowConfig';

const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    !['border_radius', 'background_color', 'width_card', 'sombraEscura', 'sombraClara'].includes(prop as string),
})<{
  border_radius: string;
  background_color: string;  
  width_card: string;
  sombraClara: ShadowConfig;
  sombraEscura: ShadowConfig;
}>(({ border_radius, background_color,  width_card, sombraClara, sombraEscura }) => ({
    
  borderRadius: border_radius,
  width: width_card,
  height: 'fit-content',
  backgroundColor: background_color,
  boxShadow: `
    ${sombraClara.offsetX} ${sombraClara.offsetY} ${sombraClara.blur} ${sombraClara.color},
    ${sombraEscura.offsetX} ${sombraEscura.offsetY} ${sombraEscura.blur} ${sombraEscura.color}
  `,
  borderTop: `3px solid ${sombraClara.color}`,
  borderLeft: `3px solid ${sombraClara.color}`  
}));

const Video = styled('div', {
  shouldForwardProp: (prop) =>
    !['border_radius', 'width', 'height'].includes(prop as string),
})<{
  border_radius: string;
  width: string;
  height: string;
}>(({ border_radius, width, height }) => ({
  width: width,
  height: height,
  borderRadius: `${border_radius} ${border_radius} 0 0`, 
  position: 'relative', 
}));

const Content = styled('div')({ 
  height: 'auto', 
  padding: '20px',  
});

interface YoutubeCardProps {  
  srcYoutube: string; //src do Youtube  
  width: string; //largura do card
  height_video: string; //altura do map 
  border_radius?: string; //border radius
  background_color?: string; //cor de fundo do card 
  sombraClara?: ShadowConfig; //Configuracao da Sombra Clara
  sombraEscura?: ShadowConfig; //Configuracao da Sombra Escura 
  children: React.ReactNode; //content do card
}

const YoutubeCard: React.FC<YoutubeCardProps> = ({ 
  srcYoutube, 
  width, 
  height_video, 
  border_radius = '0px',
  background_color = 'transparent',
  sombraClara = {offsetX:'0px', offsetY:'0px', blur:'0px', color:'transparent'},
  sombraEscura = {offsetX:'0px', offsetY:'0px', blur:'0px', color:'transparent'},  
  children,
}) => {
  return (
    <Container 
      border_radius={border_radius}
      background_color={background_color}         
      width_card={width} 
      sombraClara={sombraClara} 
      sombraEscura={sombraEscura}  
    >
      <Video border_radius={border_radius} width={width} height={height_video}>
        <iframe src={srcYoutube} 
          title="YouTube video player"         
          style={{
            width: '100%',
            height: '100%',
            border: '0',  
            borderRadius: `${border_radius} ${border_radius} 0 0`          
          }}     
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen/>
      </Video>
      <Content>
        {children}
      </Content>      
    </Container>
  );
};

export default YoutubeCard;
