import React from 'react';
import ItemMenu from '../menu/ItemMenu';
import styled from 'styled-components';
import { ItemMenuProps } from '../menu/ItemMenuProps';

interface MenuHorizontalBarraFerramentasProps {    
    listaItemMenu: ItemMenuProps[];      
    color: string;    
    color_hover: string;    
    text_decoration: 'none' | 'underline';
}

const ContainerMenuHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 16px;
`

const MenuHorizontalBarraFerramentas: React.FC<MenuHorizontalBarraFerramentasProps> = ({ listaItemMenu, color,
    color_hover, text_decoration }) => {
  return (

    <ContainerMenuHorizontal>

        {listaItemMenu?.map((item) => (                              
            <ItemMenu key={item.sectionId ?? item.url}
                sectionId={item.sectionId} 
                url={item.url}
                text={item.text} 
                color={color} 
                color_hover={color_hover}
                text_decoration={text_decoration}
            >                        
            </ItemMenu> 
        ))}

    </ContainerMenuHorizontal>

  );
};

export default MenuHorizontalBarraFerramentas;