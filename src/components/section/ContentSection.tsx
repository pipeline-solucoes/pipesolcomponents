import React from 'react';
import { Stack, Box } from '@mui/material';

interface ContentSectionProps { 
  typeDirection: 'column' | 'row'; 
  renderCol1: () => React.ReactElement;
  renderCol2: () => React.ReactElement;  
}

const ContentSection: React.FC<ContentSectionProps> = ({typeDirection, renderCol1, 
  renderCol2}) => {
    
    return (             
      <Stack direction={typeDirection === "column" ? { xs: 'column', md: 'row' } : 'column'} 
        justifyContent="center" spacing={4}>                   
        <Box flex={1}>
          {renderCol1()}
        </Box>
        <Box flex={1}>
          {renderCol2()}
        </Box>
      </Stack>                                   
    );
};

export default ContentSection;