import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled } from '@mui/material';

const Container = styled('div', {
  shouldForwardProp: (prop) =>
    !['background_color', 
      'width_card', 'flex_direction'].includes(prop as string),
})<{  
  background_color: string;  
  width_card: string;  
  flex_direction: 'row' | 'column';
}>(({ background_color,  width_card, flex_direction }) => ({    
  display: 'flex',
  flexDirection: flex_direction,    
  width: width_card,
  height: 'fit-content',
  backgroundColor: background_color,  
}));

const Video = styled('div', {
  shouldForwardProp: (prop) =>
    !['width', 'height'].includes(prop as string),
})<{  
  width: string;
  height: string;
}>(({ width, height }) => ({
  width: width,
  height: height,
  borderRadius: '20px', 
  position: 'relative', 
}));

const Content = styled('div')({ 
  height: 'auto', 
  padding: '20px 8px',  
});

interface YoutubeCardProps {  
  srcYoutube: string; //src do Youtube
  width: string; //largura do card
  height_video: string; //altura do map 
  border_radius?: string; //border radius
  background_color?: string; //cor de fundo do card 
  flex_direction: 'row' | 'column';
  children: React.ReactNode; //content do card
}

const YoutubeCard: React.FC<YoutubeCardProps> = ({ 
  srcYoutube, 
  width, 
  height_video,   
  background_color = 'transparent', 
  flex_direction = 'row',
  children,
}) => { 

  return (
    <Container       
      background_color={background_color}         
      width_card={width}
      flex_direction={flex_direction}            
    >
      <Video width={width} height={height_video}>
        <iframe src={srcYoutube} 
          title="YouTube video player"         
          style={{
            width: '100%',
            height: '100%',
            border: '0',  
            borderRadius: '20px'          
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
