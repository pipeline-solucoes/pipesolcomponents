import React from 'react';
import { Box, styled } from '@mui/material';

const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    !['border_radius', 'background_color', 
      'margin_card', 'width_card'].includes(prop as string),
})<{
  border_radius: string;
  background_color: string;
  margin_card: string;
  width_card: string; 
}>(({ border_radius, background_color,  margin_card, width_card }) => ({
  
  borderRadius: border_radius,
  width: width_card,
  height: 'fit-content',
  backgroundColor: background_color,
  margin: margin_card
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
  padding: '20px 8px',  
});

interface MapCardProps {  
  srcGoogle: string;  
  titleFrame: string; //titulo do iframe (usado na acessibilidade)
  width: string; //largura do card
  height_map: string; //altura do map 
  border_radius?: string; //border radius
  background_color?: string; //cor de fundo do card
  margin?: string; //margem do card    
  children: React.ReactNode; //content do card
}

const MapCard: React.FC<MapCardProps> = ({ 
  srcGoogle, 
  titleFrame,
  width, 
  height_map, 
  border_radius = '0px',
  background_color = 'transparent', 
  margin = '0px',  
  children,
}) => {
  
  return (
    <Container 
      border_radius={border_radius}
      background_color={background_color}  
      margin_card={margin} 
      width_card={width}      
    >
      <Map border_radius={border_radius} width={width} height={height_map}>
        <iframe 
          src= {srcGoogle}
          title={titleFrame}               
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
