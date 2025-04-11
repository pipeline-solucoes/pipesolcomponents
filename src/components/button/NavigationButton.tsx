'use client';

import React from 'react';
import styled from 'styled-components';

interface NavigationButtonProps {  
  url: string;
  aria_label: string;
  background_color?: string;
  background_color_hover?: string;
  color: string;
  color_hover?: string; 
  border_color?: string;
  border_radius?: string;
  text_decoration: 'none' | 'underline';  
  layout: 'button' | 'link';
  width: string;
  margin?: string;
  children: React.ReactNode;     
}

const ButtonStyled = styled.a.withConfig({
  shouldForwardProp: (prop) =>
    !['background_color',
      'background_color_hover',
      'color', 
      'color_hover',          
      'padding', 
      'border_radius',
      "border_color",
      "border_color_underline",
      'width', 'margin'].includes(prop), })
<{
  background_color: string;
  background_color_hover: string;
  color: string; 
  color_hover: string;     
  padding: string;  
  border_radius: string;
  border_color: string;
  border_color_underline: string;
  width: string;
  margin: string;
}>`  
  width: ${props => props.width}; 
  cursor: pointer;
  text-decoration: none;
  text-transform: none;
  text-align: center;    
  margin: 0px;
  box-shadow: none;
  background-color:  ${props => props.background_color};
  color:  ${props => props.color};  
  border: none;
  border-radius: ${props => props.border_radius}; 
  border-top: ${props => `1px solid ${props.border_color}`}; 
  border-left: ${props => `1px solid ${props.border_color}`}; 
  border-right: ${props => `1px solid ${props.border_color}`}; 
  border-bottom: ${props => `1px solid ${props.border_color}`};     
  padding: ${ (props) => props.padding };
  margin: ${ (props) => props.margin };    
   
  &:hover {
    background-color:  ${props => props.background_color_hover};      
    border-bottom: 1px solid ${props => props.border_color_underline};
    color: ${props => props.color_hover};
  }
`;

const NavigationButton: React.FC<NavigationButtonProps> = ({ 
  url, aria_label, background_color, background_color_hover,
  color, color_hover, border_radius, border_color, text_decoration = 'none',
  layout, width, margin, children }) => {
  
    const backgroundColor : string = background_color ?? 'transparent';
    const backgroundColorHover : string = background_color_hover ?? backgroundColor;
    const colorHover : string = color_hover ?? color;    
    const borderRadius : string = border_radius ?? '0px';
    const padding : string = layout == 'button' ? '8px 24px' : 'none';

    const borderColor : string = text_decoration == 'underline' ? 'transparent' : (border_color ?? 'transparent');
    const borderColorUnderline : string = (text_decoration == 'underline') ? color : (border_color ?? 'transparent');
    const marginButton : string = margin ?? '0px'; 
    
    if (url.indexOf('http') != -1) {

      return (
        <ButtonStyled 
          href={url}
          width={width}
          background_color={backgroundColor}
          background_color_hover={backgroundColorHover}
          color={color} 
          color_hover={colorHover}
          border_radius={borderRadius}
          border_color={borderColor}
          border_color_underline={borderColorUnderline}
          padding={padding}
          margin={marginButton}
          aria-label= {aria_label}  
          target="_blank"
          rel="noopener noreferrer">
          {children}
        </ButtonStyled>
      );    
    }
    else{

      return (
        <ButtonStyled
          href={url} 
          width={width}
          background_color={backgroundColor}
          background_color_hover={backgroundColorHover}
          color={color} 
          color_hover={colorHover}
          border_radius={borderRadius}
          border_color={borderColor}
          border_color_underline={borderColorUnderline}
          padding={padding}
          margin={marginButton}
          aria-label= {aria_label}              
        >
          {children}
        </ButtonStyled>
      );  
    }        
};

export default NavigationButton;