'use client';

import React from 'react';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface SocialMediaIconLinkWithBorderProps {
  children: React.ReactNode; 
  url: string;
  background_color: string;
  aria_label: string;
}

export const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => !['background_color'].includes(prop as string),
})<{ background_color: string }>(({ background_color }) => ({
  backgroundColor: background_color,
  padding: '4px',
  borderRadius: '50%',
  display: 'inline-block',
  border: '2px solid transparent',
}));

const SocialMediaIconLinkWithBorder: React.FC<SocialMediaIconLinkWithBorderProps> = ({ url,
   background_color, aria_label, children }) => {
  
  return (   
      <StyledBox background_color={background_color}>
        <IconButton aria-label={aria_label} 
          onClick={() => window.open(url, '_blank', 'noopener noreferrer')}>
          {children}
        </IconButton> 
      </StyledBox>   
  );
};

export default SocialMediaIconLinkWithBorder;
