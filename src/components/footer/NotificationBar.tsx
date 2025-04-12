"use client";

import { Stack, Box, styled } from '@mui/material';
import React, {useState} from 'react';
import { StyledButton } from '../form/FormStyled';

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

export interface NotificationBarProps {           
    show: boolean;    
    background_color: string;    
    background_color_button: string;
    color_button: string;
    text_button_accept: string; 
    text_button_notaccept: string;   
    children: React.ReactNode;
  }

const NotificationBar: React.FC<NotificationBarProps> = ({ show, children,  
  background_color, background_color_button, color_button, 
  text_button_accept, text_button_notaccept }) =>  {            

    const [showNotification, setShowNotification] = useState(show);

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
              
              <StyledButton 
                width='auto'
                height='auto'
                border_radius='0px'
                text_color={background_color_button} 
                background_color={color_button}                 
                onClick={handleNotAccept}>
                {text_button_notaccept}
              </StyledButton>

              <StyledButton 
                width='auto'
                height='auto'
                border_radius='0px'
                text_color={color_button} 
                background_color={background_color_button}                 
                onClick={handleAccept}>
                {text_button_accept}
              </StyledButton>
              
            </Stack>             
          </Box>       
          
        </Stack>
      </Container>);           
};

export default NotificationBar;