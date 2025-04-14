'use client';

import React from 'react';
import { ButtonHoverBorderBottomStyled, ButtonHoverColorStyled } from './ButtonStyled';

interface NavigationHamburguerButtonProps {
  url: string;
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
  afterNavigation: () => void;   
}

const NavigationHamburguerButton: React.FC<NavigationHamburguerButtonProps> = ({ 
  url, aria_label, background_color,
  color, color_hover, border_radius, border_color, text_decoration, 
  layout, width, children, afterNavigation }) => {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

      e.preventDefault();
      
      if (url.indexOf('#') != -1){
        const targetElement = document.querySelector(url);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', url); // Atualiza a URL sem recarregar a página
        }
      }
      else if (url.indexOf('http') == -1)
        window.open(url, '_blank', 'noopener noreferrer');            
      else
        window.location.href = url; // Redireciona para outra página na mesma aba

      
      afterNavigation(); // Chama a função após a navegação      
    };

  if (text_decoration === 'underline'){
    return (
      <ButtonHoverBorderBottomStyled width={width}
        background_color={background_color}
        color={color} 
        color_hover={color_hover}
        border_radius={border_radius}
        border_color={border_color}
        type_padding={layout === 'button' ? 'default' : 'none'}
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
        type_padding={layout === 'button' ? 'default' : 'none'}
        aria-label= {aria_label}
        onClick={handleClick}>        
          {children}             
      </ButtonHoverColorStyled>
    );  
  }
};

export default NavigationHamburguerButton;