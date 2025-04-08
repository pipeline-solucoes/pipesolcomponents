'use client';

import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import MenuHorizontalBarraFerramentas from './MenuHorizontalBarraFerramentas';
import { Bar, ContainerRedeSocialHorizontal, CustomContainer } from './BarraFerramentasStyled';
import styled from 'styled-components';
import { ItemMenuProps } from '../menu/ItemMenuProps';

interface BarraFerramentasProps {    
    listaItemMenu: ItemMenuProps[];   
    background_color?: string;
    color: string;    
    color_hover: string;    
    text_decoration: 'none' | 'underline';
    renderSocialMedia: () => React.ReactElement;    
}

const DivStyled = styled.div`  
  display: flex;
  flex-grow: 1;
`;

const BarraFerramentas: React.FC<BarraFerramentasProps> = ({
    listaItemMenu, 
    renderSocialMedia, 
    background_color, color, color_hover, 
    text_decoration}) => {

  const background_color_bar = background_color || 'transparent';

  return (
    <Bar background_color={background_color_bar}>
      <CustomContainer>
        <Toolbar disableGutters sx={{ padding: 0 }}>
          <DivStyled>
            <MenuHorizontalBarraFerramentas 
              listaItemMenu={listaItemMenu} 
              color={color} 
              color_hover={color_hover} 
              text_decoration={text_decoration} >
            </MenuHorizontalBarraFerramentas>

            <ContainerRedeSocialHorizontal>
              {renderSocialMedia()}
            </ContainerRedeSocialHorizontal> 
          </DivStyled>
        </Toolbar>
      </CustomContainer>
    </Bar>
  );
}

export default BarraFerramentas;
