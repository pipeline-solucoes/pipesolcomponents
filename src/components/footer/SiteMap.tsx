'use client';

import * as React from 'react';
import { ItemMenuConfig } from '../../types/ItemMenuConfig';
import { useEffect } from 'react';
import NavigationButton from '../button/NavigationButton';
import { ContentColFooter } from './footerStyled';
import { StyledSpanBody1 } from '../text/SpanStyled';

interface SiteMapProps {    
    listaItemMenu: ItemMenuConfig[];   
    color: string;    
    color_hover: string;       
}

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
            <StyledSpanBody1 text_color={color}>{item.text}</StyledSpanBody1>
          </NavigationButton>
        ));
        setButtons(constructedButtons);
      }
  }, [listaItemMenu, color, color_hover]);

  if (buttons){
    return (                
      <ContentColFooter>
        {buttons}
      </ContentColFooter>                    
    );
  }
  else{
    <ContentColFooter>
      carregando...
    </ContentColFooter>
  }
}

export default SiteMap;
