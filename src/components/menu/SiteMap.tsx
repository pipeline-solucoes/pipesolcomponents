'use client';

import * as React from 'react';
import { ItemMenuProps } from './ItemMenuProps';
import { useEffect } from 'react';
import NavigationButton from '../button/NavigationButton';
import { styled } from '@mui/material';

interface SiteMapProps {    
    listaItemMenu: ItemMenuProps[];   
    color: string;    
    color_hover: string;       
}

const ContainerMenuHorizontal = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexGrow: 1,
  gap: '16px',
}));

const SiteMap: React.FC<SiteMapProps> = ({
    listaItemMenu, color, color_hover }) => {

  const [buttons, setButtons] = React.useState<React.ReactNode[] | null>(null);
    
    useEffect(() => {
      if (listaItemMenu) {
          
        const constructedButtons = listaItemMenu.map((item) => (
              
          <NavigationButton
            key={item.url}
            url={item.url}
            color={color}
            color_hover={color_hover}
            aria_label={`item menu ${item.text}`}
            layout="link"
            width="auto"                                   
            text_decoration="none"
          >
            {item.text}
          </NavigationButton>
        ));
        setButtons(constructedButtons);
      }
  }, [listaItemMenu, color, color_hover]);

  if (buttons){
    return (                
      <ContainerMenuHorizontal>
        {buttons}
      </ContainerMenuHorizontal>                    
    );
  }
  else{
    <ContainerMenuHorizontal>
      carregando...
    </ContainerMenuHorizontal>
  }
}

export default SiteMap;
