import React from 'react';
import { Stack } from '@mui/material';

interface TitleBannerProps {    
  children?: React.ReactNode;
  width: string;
  textTitle: () => React.ReactElement;    
  renderSubtitle?: () => React.ReactElement;
}

const TitleBanner: React.FC<TitleBannerProps> = ({ children, textTitle,
  renderSubtitle, width }) => {  

  return (
      <Stack direction="column" justifyContent="flex-start" alignItems="center" 
        gap={{ xs: '16px', sm: '24px'}} width={width}>          
          
          {textTitle()}
          
          {renderSubtitle && renderSubtitle()}
          
          {children}

      </Stack>
  );  
    
};

export default TitleBanner;