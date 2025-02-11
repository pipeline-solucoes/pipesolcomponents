import React from 'react';
import styled from 'styled-components';
import { Body2Styled } from '../Typography';

const BotaoStyled = styled.button<{color: string, background_color: string}>`
    height: auto;
    width: auto;
    border: none;  
    cursor: pointer;
    padding: 8px 24px;  
    background-color: ${props => props.background_color};
    color: ${props => props.color};
    border-radius: ${props => props.theme.shape.borderRadius}px;          
`;

export interface ScrollToSectionButtonProps {      
    text: string;
    color: string;
    background_color: string;    
    sectionId: string;
  }

const ScrollToSectionButton: React.FC<ScrollToSectionButtonProps> = ({ text, color, 
    background_color, sectionId }) => {            
    
   const handleClick = () => { 
      const section = document.getElementById(sectionId); 
      if (section) { 
        section.scrollIntoView({ behavior: 'smooth' }); 
      } 
    };

    return(
      <BotaoStyled color={color} background_color={background_color} onClick={handleClick}>
        <Body2Styled>{text}</Body2Styled>
      </BotaoStyled>
    );         
};

export default ScrollToSectionButton;