import React from 'react';
import { Box, IconButton } from '@mui/material';
import styled from 'styled-components'; 

export interface SocialMediaIconLinkWithBorderProps {
  children: React.ReactNode; 
  url: string;
  background_color: string
}

const StyledBox = styled(Box)<{$background_color: string}>`   
  background-color: ${(props) => props.$background_color};
  padding: 4px;
  border-radius: 50%; 
  display: inline-block;
  border: 2px solid #00000000;
`;

const SocialMediaIconLinkWithBorder: React.FC<SocialMediaIconLinkWithBorderProps> = ({ url, background_color, children }) => {
  
  return (   
      <StyledBox $background_color={background_color}>
        <IconButton onClick={() => window.open(url, '_blank', 'noopener noreferrer')}>
          {children}
        </IconButton> 
      </StyledBox>   
  );
};

export default SocialMediaIconLinkWithBorder;
