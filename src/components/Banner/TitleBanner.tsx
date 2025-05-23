import React from 'react';
import { Stack, Typography } from '@mui/material';

interface TitleBannerProps {      
  width: string;
  textTitle: string;    
  textSubTitle?: string;
  textAlign: 'left' | 'center';
  children?: React.ReactNode;
}

const TitleBanner: React.FC<TitleBannerProps> = ({ children, textTitle,
  textSubTitle, width, textAlign }) => {  

  const alignItems = textAlign == 'left' ? 'flex-start' : 'center';   

  return (
      <Stack direction="column" justifyContent='flex-start' alignItems={alignItems} 
        gap={{ xs: '16px', sm: '24px'}} width={width}>          
          
          <Typography variant='h1' component='h1' textAlign={textAlign} sx={{ width:'100%' }}>{textTitle}</Typography>
          
          {textSubTitle && <Typography variant='h2' component='h2' textAlign={textAlign} sx={{ width:'100%' }}>{textSubTitle}</Typography> }
          
          {children}

      </Stack>
  );  
    
};

export default TitleBanner;