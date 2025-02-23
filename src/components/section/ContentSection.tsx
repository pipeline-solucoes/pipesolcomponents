import React from 'react';
import { Stack, Box } from '@mui/material';

interface ContentSectionProps { 
  id_section: string;
  typeDirection: 'column' | 'row'; 
  renderCol1: () => React.ReactElement;
  renderCol2: () => React.ReactElement; 
  col1AutoSize?: boolean;
  col2AutoSize?: boolean; 
}

const ContentSection: React.FC<ContentSectionProps> = ({id_section, typeDirection, renderCol1, 
  renderCol2, col1AutoSize, col2AutoSize}) => {
    
    return (             
      <Stack id={id_section} direction={typeDirection === "column" ? { xs: 'column', md: 'row' } : 'column'} 
        justifyContent="center" spacing={4}>                   
        <Box flex={col1AutoSize === true ? 0 : 1} display={col1AutoSize === true ? 'inline-flex' : 'block'}>{renderCol1()}</Box>
        <Box flex={col2AutoSize === true ? 0 : 1} display={col2AutoSize === true ? 'inline-flex' : 'block'}>{renderCol2()}</Box>
      </Stack>                                   
    );
};

export default ContentSection;