import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  boxSizing: 'border-box',
  overflow: 'hidden',
  position: 'relative',
  width: 'fit-content',
  flexGrow: 1,
  marginLeft: '16px',
}));

export const Text = styled('div', {
    shouldForwardProp: (prop) =>
      !['text_color'].includes(prop as string),
  })<{text_color: string}>(({ theme, text_color }) => ({
    
    color: text_color,
    
    // Tipografia
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.body1?.fontWeight,
    fontStyle: theme.typography.body1?.fontStyle,
    lineHeight: theme.typography.body1?.lineHeight,
    letterSpacing: theme.typography.body1?.letterSpacing,
    fontSize: theme.typography.body1?.fontSize,
    margin: theme.typography.body1?.margin,
  }));

export interface IconTextProps { 
    iconColor: string;
    textColor: string;
    children: React.ReactNode;        
}

const IconCheckText: React.FC<IconTextProps> = ({ children, iconColor, textColor }) => {            

    return(
        <Container> 
          <CheckIcon style={{ color: iconColor, fontSize: 24 }} /> 
          <Text text_color={textColor}>{children}</Text>
        </Container>
    );
};

export default IconCheckText;