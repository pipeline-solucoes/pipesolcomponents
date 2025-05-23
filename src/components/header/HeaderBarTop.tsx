'use cliente';

import { Box, styled } from '@mui/material';
import React from 'react';

const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    !['height_xs', 'height_sm', 'height_md', 'height_lg', 'height_xl'].includes(prop as string),
})<{  
  height_xs: string;
  height_sm: string;
  height_md: string;
  height_lg: string;
  height_xl: string;
}>(({ theme, height_xs, height_sm, height_md, height_lg, height_xl }) => ({
  
  width: '100%',  
  backgroundColor:'#ededed', 

   // Breakpoints para diferentes larguras de tela
  [theme.breakpoints.between(0, 'sm')]: {
    height: height_xs, // Menor que 600px
  },
  [theme.breakpoints.up('sm')]: {
    height: height_sm, // Entre 600px e 960px
  },
  [theme.breakpoints.up('md')]: {
    height: height_md, // Entre 960px e 1280px
  },
  [theme.breakpoints.up('lg')]: {
    height: height_lg, // Entre 1280px e 1920px
  },
  [theme.breakpoints.up('xl')]: {
    height: height_xl, // Acima de 1920px
  },
}));


interface HeaderBarTopProps {    
  height_xs?: string;
  height_sm?: string;
  height_md?: string;
  height_lg?: string;
  height_xl?: string;  
  renderBar: () => React.ReactElement;    
  renderBanner: () => React.ReactElement;
}

const HeaderBarTop: React.FC<HeaderBarTopProps> = ({ renderBar,
    renderBanner, height_xs = "880px", height_sm = "680px", height_md = "680px", height_lg = "680px",
    height_xl = "680px" }) => {  

  return (
      <Container height_xs={height_xs} height_sm={height_sm} 
        height_md={height_md} height_lg={height_lg} height_xl={height_xl}>        
        {renderBar()}       
        {renderBanner()}                
      </Container>
  );  
    
};

export default HeaderBarTop;