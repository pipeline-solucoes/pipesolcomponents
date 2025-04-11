'use cliente';

import React from 'react';
import { Box } from '@mui/material';

interface HeaderBarTopProps {    
  height: string;
  renderBar: () => React.ReactElement;    
  renderBanner: () => React.ReactElement;
}

const HeaderBarTop: React.FC<HeaderBarTopProps> = ({ height, renderBar,
    renderBanner}) => {  

  return (
      <Box sx={{height: height, width: '100%', backgroundColor:'#ededed'}}>
        {renderBar()}
        {renderBanner()}          
      </Box>
  );  
    
};

export default HeaderBarTop;