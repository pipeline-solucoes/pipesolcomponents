'use client';

import React from 'react';
import styled from 'styled-components';
import { Body1Styled } from '../Typography';

const BotaoStyled = styled.button<{$color: string, $background_color?: string, 
  $border_color?: string, $border_radius: string, $background_color_hover?: string,
  $border_color_hover?: string, $width: string}>`
    height: auto;
    width: ${(props) => props.$width};  
    cursor: pointer;
    padding: 8px 24px;  
    background-color: ${(props) => props.$background_color || '#00000000'};
    color: ${(props) => props.$color};
    border-radius: ${(props) => props.$border_radius}px;
    border: 1px solid ${(props) => props.$border_color || '#00000000'};

    &:hover{
      border: 1px solid ${(props) => props.$border_color_hover || '#00000000'};
      background-color: ${(props) => props.$background_color_hover || '#00000000'};
    }
`;

export interface ScrollToSectionButtonProps {      
    text: string;
    color: string;
    sectionId: string;
    border_radius: string;
    background_color?: string;    
    border_color?: string;    
    border_color_hover?: string;
    background_color_hover?: string;
    width: string;
  }

const ScrollToSectionButton: React.FC<ScrollToSectionButtonProps> = ({ text, color, 
    background_color, sectionId, border_color, border_radius, 
    background_color_hover, border_color_hover, width}) => {            
    
   const handleClick = () => { 
      const section = document.getElementById(sectionId); 
      if (section) { 
        section.scrollIntoView({ behavior: 'smooth' }); 
      } 
    };

    return(
      <BotaoStyled $width={width}
       $color={color} $background_color={background_color}
       $border_color={border_color} $border_radius={border_radius}
       $background_color_hover={background_color_hover} 
       $border_color_hover={border_color_hover}
       onClick={handleClick}
       aria-label= {'button ' + text}
       >
        <Body1Styled>{text}</Body1Styled>
      </BotaoStyled>
    );         
};

export default ScrollToSectionButton;