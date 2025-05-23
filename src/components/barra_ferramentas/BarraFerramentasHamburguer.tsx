'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { Bar, ContainerRedeSocialHorizontal, CustomToolbar } from './BarraFerramentasStyled';
import { ItemMenuConfig } from '../../types/ItemMenuConfig';
import NavigationHamburguerButton from '../button/NavigationHamburguerButton';
import { StyledSpanBody1 } from '../text/SpanStyled';

interface BarraFerramentasHamburguerProps {    
    listaItemMenu: ItemMenuConfig[];   
    background_color?: string;
    color: string;    
    color_hover: string;       
    renderSocialMedia: () => React.ReactElement;       
    renderImageHamburguer: () => React.ReactElement;
    renderLogo: () => React.ReactElement; 
}

const BarraFerramentasHamburguer: React.FC<BarraFerramentasHamburguerProps> = ({
    listaItemMenu, renderSocialMedia, 
    background_color, color, color_hover,  
    renderImageHamburguer, renderLogo}) => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderMenu = () => {
    return(        
        <Box>            
          <IconButton
            size="large"
            aria-label="menu hamburguer"            
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            {renderImageHamburguer()}
          </IconButton>

          <Menu            
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <Box display='flex' flexDirection='column' sx={{ padding: "8px" }}>   
              {listaItemMenu?.map((item) => (                                  
                <NavigationHamburguerButton 
                  key={item.url}
                  width='auto'
                  url={item.url} 
                  color={color} 
                  color_hover={color_hover} 
                  text_decoration="none" 
                  afterNavigation={handleCloseNavMenu}
                  aria_label={'menu ' + item.text}
                  layout='button'>
                  <StyledSpanBody1 text_color={color}>{item.text}</StyledSpanBody1>
                </NavigationHamburguerButton>   
              ))}             
            </Box>
          </Menu>            
        </Box>                 
    );
  };

  const background_color_bar = background_color || 'transparent';

  return (
    <Bar background_color={background_color_bar}>      
      <CustomToolbar disableGutters>
        <Box>
          { listaItemMenu.length > 0 && renderMenu() }
        </Box>
        <Box flex={1} display="flex" alignItems="center" justifyContent="center">
          { renderLogo() }
        </Box>        
        <ContainerRedeSocialHorizontal>
          {renderSocialMedia()}
        </ContainerRedeSocialHorizontal>          
      </CustomToolbar>      
    </Bar>
  );
}

export default BarraFerramentasHamburguer;
