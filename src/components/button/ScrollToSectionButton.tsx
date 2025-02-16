import React from 'react';
import styled from 'styled-components';
import { Body1Styled } from '../Typography';

const BotaoStyled = styled.button<{color: string, background_color?: string, 
  border_color?: string, border_radius?: string, background_color_hover?: string,
  border_color_hover?: string}>`
    height: auto;
    width: auto;
    border: none;  
    cursor: pointer;
    padding: 8px 24px;  
    background-color: ${(props) => props.background_color ? props.background_color : '#00000000'};
    color: ${(props) => props.color};
    border-radius: ${(props) => props.border_radius ? props.border_radius : 0}px;
    border: 1px solid ${(props) => props.border_color ? props.border_color : '#00000000'};

    &:hover{
      border: 1px solid ${(props) => props.border_color_hover ? props.border_color_hover : '#00000000'};
      background-color: ${(props) => props.background_color_hover ? props.background_color_hover : '#00000000'};
    }
`;

export interface ScrollToSectionButtonProps {      
    text: string;
    color: string;
    background_color?: string;
    sectionId: string;
    border_color?: string;
    border_radius?: string;
    border_color_hover?: string;
    background_color_hover?: string;
  }

const ScrollToSectionButton: React.FC<ScrollToSectionButtonProps> = ({ text, color, 
    background_color, sectionId, border_color, border_radius, background_color_hover, border_color_hover}) => {            
    
   const handleClick = () => { 
      const section = document.getElementById(sectionId); 
      if (section) { 
        section.scrollIntoView({ behavior: 'smooth' }); 
      } 
    };

    return(
      <BotaoStyled color={color} background_color={background_color}
       border_color={border_color} border_radius={border_radius}
       background_color_hover={background_color_hover} 
       border_color_hover={border_color_hover}
       onClick={handleClick}>
        <Body1Styled>{text}</Body1Styled>
      </BotaoStyled>
    );         
};

export default ScrollToSectionButton;