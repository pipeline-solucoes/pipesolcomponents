"use client";

import React from 'react';
import styled from 'styled-components';
import { ContainerSafe } from '../ContainerSafe';
import { useMediaQuery, useTheme } from '@mui/material';

const BannerWrapper = styled.div<{ background_image: string }>`
  width: 100%;
  height: 600px;
  background-image: url(${(props) => props.background_image});
  background-size: cover;
  background-position: center;   
`;

const BannerSombreamento = styled.div<{ background_color: string }>`
    background-color: ${props => props.background_color};                  
    height: 100%;  
    width: 100%;
    display: flex;     
    justify-content: center;            
`;

interface BannerProps {  
  background_image_1920X600: string;
  background_image_1080X600: string;  
  background_color: string;
  renderContent: () => React.ReactElement;
}

const Banner: React.FC<BannerProps> = ({ background_image_1920X600, 
  background_image_1080X600 , background_color, renderContent }) => {  

    const theme = useTheme();
  
    const isXs = useMediaQuery(theme.breakpoints.only('xs')); 
    const isSm = useMediaQuery(theme.breakpoints.only('sm')); 
    const isMd = useMediaQuery(theme.breakpoints.only('md')); 
    const isLg = useMediaQuery(theme.breakpoints.only('lg')); 
    const isXl = useMediaQuery(theme.breakpoints.only('xl'));

    const getImage = () => { 
      if (isXs) return background_image_1080X600;  // telas extra pequenas 
      if (isSm) return background_image_1080X600;  // telas pequenas 
      if (isMd) return background_image_1080X600;  // telas médias 
      if (isLg) return background_image_1920X600;  // telas grandes 
      if (isXl) return background_image_1920X600;  // telas extra grandes 
      return background_image_1920X600; 
    };

  return (
    <BannerWrapper background_image={getImage()}>
      <BannerSombreamento background_color={background_color}>
          <ContainerSafe>
             { renderContent() }
          </ContainerSafe>                 
      </BannerSombreamento>
    </BannerWrapper>);
};

export default Banner;