import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled } from '@mui/material';

const Container = styled('div', {
  shouldForwardProp: (prop) =>
    ![              
      'margin_card',
      'width_card',
      'height_card',      
      'color1',
      'color2',
      'color3',
      'border_radius'
    ].includes(prop as string),
})<{  
  margin_card: string;
  width_card: string;
  height_card: string;
  color1: string;
  color2: string;
  color3: string;
  border_radius: string;
}>(
  ({ margin_card, width_card, height_card, color1, color2, color3, border_radius }) => ({
    
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px',    
    borderRadius: border_radius,
    width: width_card,
    height: height_card,    
    margin: margin_card,
    background: `linear-gradient(to bottom, ${color1}, ${color2}, ${color3})`,     
  })
);

const ContentTitle = styled('div', {
  shouldForwardProp: (prop) =>
    !['text_color'].includes(prop as string),
})<{text_color: string}>(({ theme, text_color }) => ({
  height: 'auto',
  width: '100%', 
  color: text_color, 

  // Tipografia
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.h4?.fontWeight,
  fontStyle: theme.typography.h4?.fontStyle,
  lineHeight: theme.typography.h4?.lineHeight,
  letterSpacing: theme.typography.h4?.letterSpacing,
  fontSize: theme.typography.h4?.fontSize,  
}));

const ContentDescription = styled('div', {
  shouldForwardProp: (prop) =>
    !['text_color'].includes(prop as string),
})<{text_color: string}>(({ theme, text_color }) => ({
  height: 'auto',
  flex: 1,
  color: text_color,

  // Tipografia
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.body1?.fontWeight,
  fontStyle: theme.typography.body1?.fontStyle,
  lineHeight: theme.typography.body1?.lineHeight,
  letterSpacing: theme.typography.body1?.letterSpacing,
  fontSize: theme.typography.body1?.fontSize,
}));

const ContentButton = styled('div')({ 
  display: 'flex',
  height: 'auto'     
});

interface GradientCardProps {     
  width: string; //largura do card
  height: string; //altura do map    
  margin?: string; //margem do card
  color1: string; //cor do gradiente
  color2: string; //cor do gradiente
  color3: string; //cor do gradiente
  title: string; //texto do titulo
  description: string; //texto do subtitulo  
  children: React.ReactNode; //content do card 
  border_radius?: string; //border radius do card 
  color_title: string;
  color_description: string;
}

const GradientCard: React.FC<GradientCardProps> = ({   
  width, 
  height,   
  margin = '0px',
  color1,
  color2,
  color3,
  title,
  description,
  border_radius = '0px',
  color_title,
  color_description,
  children,
}) => {
  return (
    <Container       
      margin_card={margin} 
      width_card={width} 
      height_card={height}
      color1={color1}
      color2={color2}
      color3={color3}  
      border_radius={border_radius}
    >
      <ContentTitle text_color={color_title}>
        {title}
      </ContentTitle>
      <ContentDescription text_color={color_description}>
        {description}
      </ContentDescription>
      <ContentButton>
        {children}
      </ContentButton>      
    </Container>
  );
};

export default GradientCard;
