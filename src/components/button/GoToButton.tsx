'use client';

import React from 'react';
import { ButtonHoverBorderBottomStyled, ButtonHoverColorStyled } from './ButtonStyled';

interface GoToButtonButtonProps {
  id_section?: string;
  url?: string;
  aria_label: string;
  background_color?: string;
  color: string;
  color_hover?: string; 
  border_color?: string;
  border_radius?: string; 
  text_decoration: 'none' | 'underline';
  layout: 'button' | 'link';
  width: string;
  children: React.ReactNode;
  afterNavigation?: () => void;   
}

const GoToButton: React.FC<GoToButtonButtonProps> = ({ 
  id_section, url, aria_label, background_color,
  color, color_hover, border_radius, border_color, text_decoration, 
  layout, width, children, afterNavigation }) => {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {      
      e.preventDefault();
      if (url){
          if (url.indexOf('http') == -1)        
            window.location.href = url; // Redireciona para outra página na mesma aba
          else
            window.open(url, '_blank', 'noopener noreferrer');
      }
      else if (id_section){
        const targetElement = document.querySelector(id_section);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', id_section); // Atualiza a URL sem recarregar a página
        }
      }
      if (afterNavigation) {
        afterNavigation(); // Chama a função após a navegação
      }
    };

  if (text_decoration === 'underline'){
    return (
      <ButtonHoverBorderBottomStyled width={width}
        background_color={background_color}
        color={color} 
        color_hover={color_hover}
        border_radius={border_radius}
        border_color={border_color}
        padding={layout === 'button' ? 'default' : 'none'}
        aria-label= {aria_label}
        onClick={handleClick}>        
          {children}             
      </ButtonHoverBorderBottomStyled>
    );  
  }
  else if (text_decoration === 'none'){
    return (
      <ButtonHoverColorStyled width={width}
        background_color={background_color}
        color={color} 
        color_hover={color_hover}
        border_radius={border_radius} 
        border_color={border_color}    
        padding={layout === 'button' ? 'default' : 'none'}
        aria-label= {aria_label}
        onClick={handleClick}>        
          {children}             
      </ButtonHoverColorStyled>
    );  
  }
};

export default GoToButton;