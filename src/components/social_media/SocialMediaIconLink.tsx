import React from 'react';
import { IconButton } from '@mui/material'; 

export interface SocialMediaIconLinkProps {
  children: React.ReactNode; 
  url: string;  
}

const SocialMediaIconLink: React.FC<SocialMediaIconLinkProps> = ({ url, children }) => {
  
  return (
    <IconButton onClick={() => window.open(url, '_blank', 'noopener noreferrer')}>
      {children}
    </IconButton>
  );
};

export default SocialMediaIconLink;
