'use cliente';

import { Box, styled } from '@mui/material';
import React from 'react';


const Container = styled(Box)(({ theme }) => ({
  
  width: '100%',  
  backgroundColor:'#ededed', 

  [theme.breakpoints.only('xs')]: {
    height: '880px',
  },
  [theme.breakpoints.up('sm')]: {
    height: '680px',
  },
}));


interface HeaderBarTopProps {      
  renderBar: () => React.ReactElement;    
  renderBanner: () => React.ReactElement;
}

const HeaderBarTop: React.FC<HeaderBarTopProps> = ({ renderBar,
    renderBanner}) => {  

  return (
      <Container>        
        {renderBar()}       
        {renderBanner()}                
      </Container>
  );  
    
};

export default HeaderBarTop;