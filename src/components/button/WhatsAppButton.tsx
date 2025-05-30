'use client';

import React from 'react';
import { WhatsApp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';

const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  backgroundColor: '#25D366',
  color: 'white',

  '&:hover': {
    backgroundColor: '#1EBE5D',
  },
});

interface WhatsAppButtonProps {
  whatsapp: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ whatsapp }) => {
  
  const handleClick = () => {
    window.open(`https://wa.me/${whatsapp}`, '_blank');
  };

  return (
    <StyledFab aria-label="button whatsapp" onClick={handleClick}>
      <WhatsApp />
    </StyledFab>
  );
};

export default WhatsAppButton;

