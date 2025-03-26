import React from 'react';
import GoToButton from '../button/GoToButton';
import { Body1Styled } from '../Typography';

export interface ItemMenuProps {
    sectionId?: string;
    url?: string;    
    text: string;
    color: string;
    color_hover: string;
    text_decoration: 'none' | 'underline';
    afterNavigation?: () => void;
}

const ItemMenu: React.FC<ItemMenuProps> = ({sectionId, url, text, 
  color, color_hover, text_decoration, afterNavigation}) => {
  
  if (sectionId){   
    return (        
        <GoToButton 
          id_section={sectionId} 
          color={color} 
          color_hover={color_hover} 
          text_decoration={text_decoration} 
          afterNavigation={afterNavigation}
          aria_label={'menu ' + text}
          layout='button'>
            <Body1Styled>{text}</Body1Styled>
        </GoToButton>   
    );    
  } 
  
  else if (url){    
    return (          
        <GoToButton 
          url={url} 
          color={color} 
          color_hover={color_hover} 
          text_decoration={text_decoration} 
          afterNavigation={afterNavigation} 
          aria_label={'menu ' + text}
          layout='button'>        
            <Body1Styled>{text}</Body1Styled>               
        </GoToButton>         
    );
  } 
  
};

export default ItemMenu;