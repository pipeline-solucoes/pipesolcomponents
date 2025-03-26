'use client';

import React from 'react';
import { IconButton } from '@mui/material'; 

export interface SocialMediaIconLinkProps {
  children: React.ReactNode; 
  url: string;
  aria_label: string;
}

const SocialMediaIconLink: React.FC<SocialMediaIconLinkProps> = ({ url, children,
  aria_label}) => {
  
  return (    
      <IconButton aria-label={aria_label}
        onClick={() => window.open(url, '_blank', 'noopener noreferrer')}>
        {children}
      </IconButton>    
  );
};

export default SocialMediaIconLink;
