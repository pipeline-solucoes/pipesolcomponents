import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, styled } from '@mui/material';
import { ShadowConfig } from '@/types/ShadowConfig';

const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    !['border_radius', 'background_color', 'margin_card', 'width_card', 'sombraClara', 'sombraEscura'].includes(prop as string),
})<{
  border_radius: string;
  background_color: string;
  margin_card: string;
  width_card: string;
  sombraClara: ShadowConfig;
  sombraEscura: ShadowConfig;
}>(({ border_radius, background_color,  margin_card, width_card, sombraClara, sombraEscura }) => ({
  
  borderRadius: border_radius,
  width: width_card,
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

const Map = styled('div', {
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

interface MapCardProps {  
  srcGoogle: string;  
  width: string; //largura do card
  height_map: string; //altura do map 
  border_radius?: string; //border radius
  background_color?: string; //cor de fundo do card
  margin?: string; //margem do card  
  sombraClara?: ShadowConfig; //Configuracao da Sombra Clara
  sombraEscura?: ShadowConfig; //Configuracao da Sombra Escura
  children: React.ReactNode; //content do card
}

const MapCard: React.FC<MapCardProps> = ({ 
  srcGoogle, 
  width, 
  height_map, 
  border_radius = '0px',
  background_color = 'transparent', 
  margin = '0px', 
  sombraClara = {offsetX:'0px', offsetY:'0px', blur:'0px', color:'transparent'},
  sombraEscura = {offsetX:'0px', offsetY:'0px', blur:'0px', color:'transparent'},
  children,
}) => {

  return (
    <Container 
      border_radius={border_radius}
      background_color={background_color}  
      margin_card={margin} 
      width_card={width}  
      sombraClara={sombraClara} 
      sombraEscura={sombraEscura}
    >
      <Map border_radius={border_radius} width={width} height={height_map}>
        <iframe 
          src= {srcGoogle}               
          style={{
            width: '100%',
            height: '100%',
            border: '0',             
            borderRadius: `${border_radius} ${border_radius} 0 0`
          }}              
          loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </Map>
      <Content>
        {children}
      </Content>      
    </Container>
  );
};

export default MapCard;
