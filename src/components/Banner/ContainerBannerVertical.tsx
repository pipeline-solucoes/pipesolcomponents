import { Stack } from '@mui/material';
import React from 'react';

interface ContainerBannerVerticalProps {  
  children: () => React.ReactNode;
  align : 'center' | 'flex-start'
}

const ContainerBannerVertical: React.FC<ContainerBannerVerticalProps> = ({children, align}) => {  

  return (    
    <Stack direction="column" sx={{ width: '100%', height: '100%' }}
      alignItems={align}>       
      {children()}
    </Stack> 
  );
};

export default ContainerBannerVertical;