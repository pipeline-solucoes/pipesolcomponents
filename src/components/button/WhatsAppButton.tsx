'use client';

import React from 'react';
import { Fab } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import styled from 'styled-components';

const StyledFab = styled(Fab)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: #25D366; 
  color: white;

  &:hover {
    background-color: #1EBE5D;
  }
`;


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

