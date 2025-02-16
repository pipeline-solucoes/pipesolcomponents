import React from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { H1Styled, H2Styled } from '../Typography';
import styled from 'styled-components';

const Title = styled(H1Styled)<{color?: string}>`
          
  color: ${props => props.color};
`;

const SubTitle = styled(H2Styled)<{color?: string}>`
          
  color: ${props => props.color};
  width: 100%;
  text-align: center;
`;

interface TitleBannerProps {    
  children: React.ReactNode;
  textTitle: string;
  textSubTitle?: string;
  color_title: string;
  color_subtitle: string;  
}


const TitleBanner: React.FC<TitleBannerProps> = ({ children, textTitle, textSubTitle,
  color_title, color_subtitle }) => {  

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs')); 
  const isSm = useMediaQuery(theme.breakpoints.only('sm')); 
  const isMd = useMediaQuery(theme.breakpoints.only('md')); 
  const isLg = useMediaQuery(theme.breakpoints.only('lg')); 
  const isXl = useMediaQuery(theme.breakpoints.only('xl'));
  
  const getGap = () => { 
    if (isXs) return '16px'; // telas extra pequenas 
    if (isSm) return '24px'; // telas pequenas 
    if (isMd) return '24px';  // telas médias 
    if (isLg) return '24px';  // telas grandes 
    if (isXl) return '24px';  // telas extra grandes 
    return '100%'; 
  };  

  return (
      <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" 
        sx={{ gap: getGap(), width: 'fit-content'}}>          
        <Title color={color_title}>{textTitle}</Title>
        {textSubTitle && <SubTitle color={color_subtitle}>{textSubTitle}</SubTitle>}
        {children}
      </Stack>
  );
    
};

export default TitleBanner;