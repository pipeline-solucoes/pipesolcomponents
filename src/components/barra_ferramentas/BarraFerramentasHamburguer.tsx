'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { Divider } from '@mui/material';
import ItemMenu from '../menu/ItemMenu';
import { Bar, ContainerRedeSocialHorizontal, CustomContainer } from './BarraFerramentasStyled';
import { ItemMenuProps } from '../menu/ItemMenuProps';

interface BarraFerramentasHamburguerProps {    
    listaItemMenu: ItemMenuProps[];   
    background_color?: string;
    color: string;    
    color_hover: string;   
    text_decoration: 'none' | 'underline';
    renderSocialMedia: () => React.ReactElement;       
    renderImageHamburguer: () => React.ReactElement;
}

const BarraFerramentasHamburguer: React.FC<BarraFerramentasHamburguerProps> = ({
    listaItemMenu, 
    renderSocialMedia, 
    background_color, color, color_hover,  
    renderImageHamburguer}) => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderComMenu = () => {
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
              {listaItemMenu?.map((item, index) => (                  
                <ItemMenu key={index}
                    sectionId={item.sectionId} 
                    url={item.url}
                    text={item.text} 
                    color={color} 
                    color_hover={color_hover}
                    text_decoration="none"
                    afterNavigation={handleCloseNavMenu}>                        
                </ItemMenu>
              ))}

              <Divider variant="middle" sx={{ margin: "8px 0px" }}></Divider>

              <ContainerRedeSocialHorizontal>
                {renderSocialMedia()}
              </ContainerRedeSocialHorizontal>              
            </Box>
          </Menu>            
        </Box>                 
    );
  };

  const background_color_bar = background_color || 'transparent';

  return (
    <Bar background_color={background_color_bar}>
      <CustomContainer>
        <Toolbar disableGutters sx={{ padding: 0 }}>
          { renderComMenu() }         
        </Toolbar>
      </CustomContainer>
    </Bar>
  );
}

export default BarraFerramentasHamburguer;
