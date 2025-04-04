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
import styled from 'styled-components';

const CustomContainer = styled(Container)`

    margin: 0px 0px; ,
    width: '100%', 

    @media (max-width: 600px) { 
        width: calc(100% - 32px) 
    }

    @media (min-width: 600px) {
        width: calc(100% - 48px) 
    }

    @media (min-width: 960px) {
        width: calc(100% - 54px); 
    }

    @media (min-width:1280px) {
        width: 1200px; 
    }

    @media (min-width: 1920px) {
        width: 1200px; 
    }    
`;

const Bar = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['background_color'].includes(prop), })
<{background_color?: string;}>`  

  display: flex;    
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  background-color: ${props =>props.background_color || '#00000000'};
  width: 100%;
`;


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
                    color={color_menu_hamburguer} 
                    color_hover={color_hover_menu_hamburguer}
                    text_decoration="none"
                    afterNavigation={handleCloseNavMenu}>                        
                </ItemMenu>
              ))}
              <Divider variant="middle" sx={{ margin: "8px 0px" }}></Divider>
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
    <Bar background_color={background_color}>
      <CustomContainer>
        <Toolbar disableGutters sx={{ padding: 0 }}>
          {listaItemMenu !== undefined ? renderComMenu() : renderSemMenu()}         
        </Toolbar>
      </CustomContainer>
    </Bar>
  );
}

export default BarraFerramentas;
