import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled } from '@mui/material';

const Container = styled('div', {
  shouldForwardProp: (prop) =>
    ![      
      'border_color',
      'background_color',
      'margin_card',
      'width_card',
      'height_card',
      'background_image',
    ].includes(prop as string),
})<{
  border_color: string;
  background_color: string;
  margin_card: string;
  width_card: string;
  height_card: string;
  background_image?: string;
}>(
  ({ border_color, background_color, margin_card, width_card, height_card, background_image }) => ({
    
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px',    
    borderTopLeftRadius: '80px',
    width: width_card,
    height: height_card,
    backgroundColor: background_color,
    margin: margin_card,
    backgroundImage: background_image ? `url(${background_image})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderBottom: `5px solid ${border_color}`,
    borderRight:  `5px solid ${border_color}`,
  })
);


const ContentTitle = styled('div')(({ theme }) => ({  
  height: 'auto',
  textAlign: 'center', 
    
  // Tipografia
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.h4?.fontWeight,
  fontStyle: theme.typography.h4?.fontStyle,
  lineHeight: theme.typography.h4?.lineHeight,
  letterSpacing: theme.typography.h4?.letterSpacing,
  fontSize: theme.typography.h4?.fontSize,  
}));

const ContentDescription = styled('div')(({ theme }) => ({
  height: 'auto',
  flex: 1,     

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
  alignItems: 'center',
  justifyContent: 'center',
  height: 'auto'     
});

interface BorderTopLeftRadiusCardProps {     
  width: string; //largura do card
  height: string; //altura do map 
  border_color?: string; //border radius
  background_color?: string; //cor de fundo do card
  background_image?: string;
  margin?: string; //margem do card
  title: string;
  description: string;  
  children: React.ReactNode; //content do card
}

const BorderTopLeftRadiusCard: React.FC<BorderTopLeftRadiusCardProps> = ({   
  width, 
  height, 
  border_color = 'transparent',
  background_color = 'transparent', 
  background_image,
  margin = '0px', 
  title,
  description,
  children,
}) => {
  return (
    <Container 
      border_color={border_color}
      background_color={background_color} 
      background_image={background_image} 
      margin_card={margin} 
      width_card={width} 
      height_card={height}  
    >
      <ContentTitle>
        {title}
      </ContentTitle>
      <ContentDescription>
        {description}
      </ContentDescription>
      <ContentButton>
        {children}
      </ContentButton>      
    </Container>
  );
};

export default BorderTopLeftRadiusCard;
