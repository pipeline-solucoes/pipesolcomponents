'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { Divider, Stack } from '@mui/material';
import ItemMenu from '../menu/ItemMenu';


export interface ItemMenuProps {
    sectionId?: string;
    url?: string;    
    text: string;   
} 

interface BarraFerramentasProps {    
    listaItemMenu?: ItemMenuProps[];   
    background_color: string;
    color: string;    
    color_hover: string;
    color_menu_hamburguer: string;
    color_hover_menu_hamburguer: string;
    text_decoration: 'none' | 'underline';
    renderSocialMedia: () => React.ReactElement;
    renderSocialMediaMenuHamburguer: () => React.ReactElement; 
    renderLogo?: () => React.ReactElement;
    renderImageHamburguer: () => React.ReactElement;
}

const BarraFerramentas: React.FC<BarraFerramentasProps> = ({listaItemMenu, 
    renderSocialMedia, renderSocialMediaMenuHamburguer, 
    background_color, color, color_hover, color_menu_hamburguer, 
    color_hover_menu_hamburguer, renderLogo, renderImageHamburguer,
    text_decoration}) => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderComMenu = () => {
    return(
      <>
        {/* Logo  */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
          {renderLogo && renderLogo()}
        </Box>

        {/* Logo  */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, mr: 1 }}>
          {renderLogo && renderLogo()}
        </Box>          

        {/*  Menu Hamburguer  */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>            
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            {renderImageHamburguer()}
          </IconButton>

          <Menu
            id="menu-appbar"
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
                    color={color_menu_hamburguer} 
                    color_hover={color_hover_menu_hamburguer}
                    text_decoration={text_decoration}
                    afterNavigation={handleCloseNavMenu}>                        
                </ItemMenu>                 
              ))}
              <Divider variant="middle" sx={{ margin: "8px 0px" }}/>
              {renderSocialMediaMenuHamburguer && renderSocialMediaMenuHamburguer()}
            </Box>
          </Menu>            
        </Box>                 

        {/* Menu Horizontal */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          <Stack direction="row" justifyContent="center" alignItems="center" sx={{ flexGrow: 1, gap: '16px' }}>            
            {listaItemMenu?.map((item, index) => (              
                <ItemMenu key={index}
                  sectionId={item.sectionId} 
                  url={item.url}
                  text={item.text} 
                  color={color} 
                  color_hover={color_hover}
                  text_decoration={text_decoration}
                  afterNavigation={handleCloseNavMenu}>                        
                </ItemMenu> 
            ))}
          </Stack>
          
          <Stack direction="row" justifyContent="flex-end" sx={{  margin: '16px 0px' }}>
            {renderSocialMedia && renderSocialMedia()}
          </Stack> 

        </Box>

      </>
    );
  };

  const renderSemMenu = () => {
    return(
    <>        
        <Box sx={{ mr: 1 }}>
          {renderLogo && renderLogo()}
        </Box> 

        <Box sx={{ flexGrow: 1 }}>                                
          <Stack direction="row" justifyContent="flex-end"
              sx={{ flexGrow: 1, margin: '16px 0px' }}>
              {renderSocialMedia && renderSocialMedia()}
          </Stack>            
        </Box>
    </>);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: background_color }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ padding: 0 }}>
          {listaItemMenu !== undefined ? renderComMenu() : renderSemMenu()}         
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default BarraFerramentas;
