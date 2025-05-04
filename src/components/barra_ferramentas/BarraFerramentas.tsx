'use client';

import * as React from 'react';
import { Bar, ContainerRedeSocialHorizontal, CustomToolbar } from './BarraFerramentasStyled';
import { ItemMenuProps } from '../menu/ItemMenuProps';
import { useEffect } from 'react';
import NavigationButton from '../button/NavigationButton';
import { StyledSpanBody2 } from '../text/SpanStyled';
import { styled } from '@mui/material';

interface BarraFerramentasProps {    
    listaItemMenu: ItemMenuProps[];   
    background_color?: string;
    color: string;    
    color_hover: string;    
    text_decoration: 'none' | 'underline';
    renderLogo: () => React.ReactElement;    
    renderSocialMedia: () => React.ReactElement;    
}

const DivStyled = styled('div')({
  display: 'flex',
  flex: '1',
});

const ContainerMenuHorizontal = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  gap: '16px',
});

const BarraFerramentas: React.FC<BarraFerramentasProps> = ({
    listaItemMenu,
    renderLogo, 
    renderSocialMedia, 
    background_color, color, color_hover, 
    text_decoration}) => {

  const background_color_bar = background_color || 'transparent';
  const [buttons, setButtons] = React.useState<React.ReactNode[] | null>(null);
      
    useEffect(() => {

      const borderColor = (text_decoration == 'none') ? 'transparent' : color;

      if (listaItemMenu) {
          const constructedButtons = listaItemMenu.map((item) => (
              <NavigationButton
                key={item.url}
                url={item.url}
                color={color}
                color_hover={color_hover}
                aria_label={`item menu ${item.text}`}
                layout="button"
                width="auto"
                background_color="transparent"
                border_color={borderColor}
                border_radius="0px"
                text_decoration={text_decoration}
              >
                {item.text}
              </NavigationButton>
          ));
          setButtons(constructedButtons);
      }
  }, [listaItemMenu, color, color_hover, text_decoration]);

  if (buttons){
    return (
      <Bar background_color={background_color_bar}>        
          <CustomToolbar disableGutters>
            {renderLogo()}
            <DivStyled>              
              <ContainerMenuHorizontal>
                {buttons}
              </ContainerMenuHorizontal>
              <ContainerRedeSocialHorizontal>
                {renderSocialMedia()}
              </ContainerRedeSocialHorizontal> 
            </DivStyled>
          </CustomToolbar>        
      </Bar>
    );
  }
  else{
    <Bar background_color={background_color_bar}>
      <StyledSpanBody2 text_color={color}>carregando...</StyledSpanBody2>
    </Bar>
  }
}

export default BarraFerramentas;
