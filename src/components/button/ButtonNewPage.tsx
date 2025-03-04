import React from 'react';
import styled from 'styled-components';

interface ButtonNewPageProps {
  url: string;  
  background_color?: string;
  background_color_hover?: string;
  border_radius?: string;
  children: React.ReactNode;
  width?: string;
}

const BotaoStyled = styled.button<{$background_color?: string, 
  $border_color?: string, $border_radius?: string, $background_color_hover?: string,
  $width?: string}>`

    height: auto;
    width: ${(props) => props.$width || 'auto'};  
    cursor: pointer;
    padding: 8px 24px;  
    background-color: ${(props) => props.$background_color || '#00000000'};    
    border-radius: ${(props) => props.$border_radius || '0px'};
    border: none;

    &:hover{      
      background-color: ${(props) => props.$background_color_hover || props.$background_color};
    }
`;

const ButtonNewPage: React.FC<ButtonNewPageProps> = ({ url, 
  background_color, background_color_hover, border_radius, width, children }) => {
  
  return (
    <BotaoStyled $width={width}
      $background_color={background_color} 
      $background_color_hover={background_color_hover}
      $border_radius={border_radius}    
      onClick={() => window.open(url, '_blank', 'noopener noreferrer')}>
      {children}
    </BotaoStyled>
  );
};

export default ButtonNewPage;
