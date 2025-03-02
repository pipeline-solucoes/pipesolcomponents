"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

const ButtonStyled = styled(IconButton)<{$show: string, 
  $background_color?: string, $border_radius: string, 
  $background_color_hover?: string}>`

  display: ${(props) => ((props.$show == 'true') ? 'flex' : 'none')};
  position: fixed;
  bottom: 165px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;
  width: auto;
  height: auto;
  border: 1px solid ${(props) => props.$background_color || '#00000000'};
  background-color: ${(props) => props.$background_color || '#00000000'};
  border-radius: ${(props) => props.$border_radius};

  &:hover{
    background-color: ${(props) => props.$background_color_hover || props.$background_color};
  }
`;

export interface ScrollToTopButtonProps {   
    show: boolean;            
    border_radius: string;
    background_color: string;        
    background_color_hover: string;
    children: React.ReactNode;
  }

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({show, border_radius, 
    background_color, background_color_hover, children}) => {

        const [showButton, setshowButton] = useState(show);

        const handleScroll = () => {

          setshowButton(window.scrollY > 0);
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        };
      
        return (
          <ButtonStyled 
            $background_color={background_color}
            $border_radius={border_radius}
            $background_color_hover={background_color_hover}             
            onClick={scrollToTop} aria-label="ir para o topo" 
            $show={showButton.toString()}>
            {children}
          </ButtonStyled>
        );
};

export default ScrollToTopButton;



