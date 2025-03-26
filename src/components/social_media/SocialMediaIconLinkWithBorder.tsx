'use client';

import React from 'react';
import { Box, IconButton } from '@mui/material';
import styled from 'styled-components'; 

export interface SocialMediaIconLinkWithBorderProps {
  children: React.ReactNode; 
  url: string;
  background_color: string;
  aria_label: string;
}

const StyledBox = styled(Box).withConfig({
  shouldForwardProp: (prop) =>
    !['background_color'].includes(prop)})
  <{background_color: string}>`
  background-color: ${(props) => props.background_color};
  padding: 4px;
  border-radius: 50%; 
  display: inline-block;
  border: 2px solid #00000000;
`;

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
