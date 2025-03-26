import React from 'react';
import { H2Styled } from '../Typography';
import { Divider } from '@mui/material';

interface SubTitleSeparadorBannerProps {  
  children: React.ReactNode;     
  color_separador: string;   
}

const SubTitleSeparadorBanner: React.FC<SubTitleSeparadorBannerProps> = ({children, color_separador}) => {

  return (
    <Divider sx={{ bgcolor: 'transparent', 
      '&::before, &::after': {
          borderColor: color_separador, 
        },
      width: '100%', paddingTop:'16px', paddingBottom:'16px' }}>
      <H2Styled>{children}</H2Styled>
    </Divider> 
  );
};

export default SubTitleSeparadorBanner;