import { Box, Stack } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Area = styled.div`       
  height: 100%; 
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;       
  align-items: center;
`;

const AreaMenu = styled.div`
    width: 100%;                          
`;

interface ContainerBannerProps {
  renderBarraFerramenta: () => React.ReactElement;
  renderCol1: () => React.ReactElement;
  renderCol2?: () => React.ReactElement; 
}

const ContainerBanner: React.FC<ContainerBannerProps> = ({ renderBarraFerramenta, renderCol1, renderCol2 }) => {  

  return (    
    <Area>
      <AreaMenu>
        {renderBarraFerramenta()}
      </AreaMenu>
      <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' spacing={4}>                   
        <Box flex={1}>
          {renderCol1()}
        </Box>
        <Box flex={1}>
          {renderCol2 && renderCol2()}
        </Box>
      </Stack>          
    </Area> 
  );
};

export default ContainerBanner;