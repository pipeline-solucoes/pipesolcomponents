import React from 'react';
import { styled } from '@mui/material';

const Container = styled('div')({    
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    height: '100%',
    width: '100%',                   
  });

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
  title: string; //texto do titulo
  description: string; //texto do subtitulo  
  children: React.ReactNode; //content do card   
  color_title: string;
  color_description: string;
}

const ContentCardDescription: React.FC<GradientCardProps> = ({     
  title,
  description,  
  color_title,
  color_description,
  children,
}) => {
  return (
    <Container>
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

export default ContentCardDescription;
