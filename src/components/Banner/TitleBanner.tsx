import React from 'react';
import { Stack } from '@mui/material';
import { H1Styled } from '../Typography';

interface TitleBannerProps {    
  children?: React.ReactNode;
  width: string;
  textTitle: string;    
  renderSubtitle?: () => React.ReactElement;
}

const TitleBanner: React.FC<TitleBannerProps> = ({ children, textTitle,
  renderSubtitle, width }) => {  

  return (
      <Stack direction="column" justifyContent="flex-start" alignItems="center" 
        gap={{ xs: '16px', sm: '24px'}} width={width}>          
          
          <H1Styled>{textTitle}</H1Styled>
          
          {renderSubtitle && renderSubtitle()}
          
          {children}

      </Stack>
  );  
    
};

export default TitleBanner;