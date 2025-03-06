import { Stack } from '@mui/material';
import React from 'react';

interface ContainerBannerVerticalProps {  
  children: () => React.ReactNode;
}

const ContainerBannerVertical: React.FC<ContainerBannerVerticalProps> = ({children}) => {  

  return (    
    <Stack direction="column" sx={{ width: '100%', height: '100%' }}
      alignItems="flex-start">       
      {children()}
    </Stack> 
  );
};

export default ContainerBannerVertical;