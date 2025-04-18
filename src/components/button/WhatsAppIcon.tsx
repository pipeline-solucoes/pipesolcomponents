'use client';

import React from 'react';
import { Box, IconButton, styled } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => !['background_color'].includes(prop as string),
})<{ background_color: string }>(({ background_color }) => ({
  backgroundColor: background_color,
  padding: '4px',
  borderRadius: '50%',
  display: 'inline-block',
  border: '2px solid transparent',
}));


export interface WhatsAppIconProps {
  whatsapp: string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ whatsapp }) => {
  
  return (
    <StyledBox background_color='#25D366'>
      <IconButton aria-label='icone whatsapp' 
        onClick={() => window.open(`https://wa.me/${whatsapp}`, '_blank', 'noopener noreferrer')}>
        <WhatsApp sx={{ color: 'white', fontSize: 24 }} ></WhatsApp>
      </IconButton> 
    </StyledBox>  
  );

};

export default WhatsAppIcon;
