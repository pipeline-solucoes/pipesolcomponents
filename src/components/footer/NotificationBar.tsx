"use client";

import styled from 'styled-components';
import { Stack, Box } from '@mui/material';
import React, {useState} from 'react';
import SpanBody2 from '../text/SpanBody2';

const Container = styled.div<{$show: string, $background_color: string}>`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.$background_color};  
  display: ${props => (props.$show == 'true' ? 'block' : 'none')};
  z-index: 4000;    
`;

const BotaoNotificationBar = styled.button<{$background_color: string,
  $color: string}>`
  background-color: ${props => props.$background_color};
  color: ${props => props.$color};
  padding: 10px 20px;
  border: none;
  border-radius: ${props => props.theme.shape.borderRadius}; 
  cursor: pointer;
  margin-left: 20px;
  height: auto;
  width: auto;
  padding: 8px 24px;  
`

export interface NotificationBarProps {           
    show: boolean;    
    background_color: string;    
    background_color_button: string;
    color_button: string;
    text_button: string;    
    children: React.ReactNode;
  }

const NotificationBar: React.FC<NotificationBarProps> = ({ show, children,  
  background_color, background_color_button, color_button, text_button }) =>  {            

    const [showNotification, setShowNotification] = useState(show);

    const handleAccept = () => {
      // Lógica para salvar a aceitação do usuário pode ser adicionada aqui
      show = false; 
      setShowNotification(false);     
    };
    
    return (
      <Container $show={showNotification.toString()} $background_color={background_color}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="center" alignItems="center" 
          sx={{ padding: "16px", 
                margin: { xs: "0px 16px", sm: "0px 40px" } }}> 
          <Box sx={{ flexGrow: 1 }}>
            {children}
          </Box>                      
          <Box sx={{padding: "16px"}}>
            <BotaoNotificationBar $color={color_button} 
              $background_color={background_color_button} onClick={handleAccept}>
              <SpanBody2 color={color_button}>{text_button}</SpanBody2>
            </BotaoNotificationBar>
          </Box>
        </Stack>
      </Container>);           
};

export default NotificationBar;