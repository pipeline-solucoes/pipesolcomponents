import React from 'react';
import SectionLink from '../button/SectionLink';
import PageLink from '../button/PageLink';
import { ItemMenuText } from './ItemMenuStyled';

export interface ItemMenuProps {
    sectionId?: string;
    url?: string;    
    text: string;
    color: string;
    color_hover: string;
}

const ItemMenu: React.FC<ItemMenuProps> = ({sectionId, url, text, color, color_hover}) => {
  
  if (sectionId){
    console.log("SectionLink" + text);
    return (        
        <SectionLink href={sectionId}>        
          <ItemMenuText color={color} color_hover={color_hover}>{text}</ItemMenuText>               
        </SectionLink>   
    );    
  } 
  
  else if (url){
    console.log("PageLink" + text);
    return (          
        <PageLink href={url}>        
            <ItemMenuText color={color} color_hover={color_hover}>{text}</ItemMenuText>               
        </PageLink>         
    );
  } 
  
};

export default ItemMenu;