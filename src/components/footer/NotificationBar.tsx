"use client";

import { Stack, Box, styled, Button } from '@mui/material';
import React, {useState} from 'react';

const Container = styled('div')<{
  $show: string;
  $background_color: string;
}>(({ $show, $background_color }) => ({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: $background_color,
  display: $show === 'true' ? 'block' : 'none',
  zIndex: 4000,
}));


const ButtonBarStyled = styled(Button, {
  shouldForwardProp: (prop) =>
    !['background_color', 'text_color', 'border_radius'].includes(prop as string),
  })
  <{ background_color: string; text_color: string; border_radius: string;}>
  (({ theme, background_color, text_color, border_radius }) => ({
  
  color: text_color,
  backgroundColor: background_color,
  borderRadius: border_radius,
  textTransform: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '8px 24px',
  boxShadow: 'none',
  width: 'auto',
  height: 'auto',
    
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.body1?.fontWeight,
  fontStyle: theme.typography.body1?.fontStyle,
  lineHeight: theme.typography.body1?.lineHeight,
  letterSpacing: theme.typography.body1?.letterSpacing,
  fontSize: theme.typography.body1?.fontSize,
  margin: theme.typography.body1?.margin,
  
  '&:hover': {
    backgroundColor: background_color,
    opacity: 0.9,
  },
}));

export interface NotificationBarProps {           
    show: boolean;    
    background_color: string;    
    background_color_button: string;
    color_button: string;
    text_button_accept: string; 
    text_button_notaccept: string;   
    children: React.ReactNode;
    border_radius_button?: string;
  }

const NotificationBar: React.FC<NotificationBarProps> = ({ show, children,  
  background_color, background_color_button, color_button, border_radius_button,
  text_button_accept, text_button_notaccept }) =>  {            

    const [showNotification, setShowNotification] = useState(show);

    const borderRadiusButton = border_radius_button ?? '0px';

    const handleAccept = () => {
      // Lógica para salvar a aceitação do usuário pode ser adicionada aqui
      show = false; 
      setShowNotification(false);     
    };

    const handleNotAccept = () => {
      // Lógica para salvar a aceitação do usuário pode ser adicionada aqui
      show = false; 
      setShowNotification(false);     
    };
    
    return (
      <Container $show={showNotification.toString()} $background_color={background_color}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="center" alignItems="center" 
          sx={{ padding: "16px", margin: { xs: "0px 16px", sm: "0px 40px" } }}> 
          
          <Box sx={{ flexGrow: 1 }}>
            {children}
          </Box>

          <Box sx={{padding: "16px"}}>
            <Stack direction='row' justifyContent="center" alignItems="center" sx={{ gap: "16px" }}>
              
              <ButtonBarStyled                 
                border_radius={borderRadiusButton}
                text_color={background_color_button} 
                background_color={color_button}                 
                onClick={handleNotAccept}>
                {text_button_notaccept}
              </ButtonBarStyled>

              <ButtonBarStyled                
                border_radius={borderRadiusButton}
                text_color={color_button} 
                background_color={background_color_button}                 
                onClick={handleAccept}>
                {text_button_accept}
              </ButtonBarStyled>
              
            </Stack>             
          </Box>       
          
        </Stack>
      </Container>);           
};

export default NotificationBar;