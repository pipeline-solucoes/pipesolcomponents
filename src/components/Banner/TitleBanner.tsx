import React from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { H1Styled } from '../Typography';
import styled from 'styled-components';
import ScrollToSectionButton from '../button/ScrollToSectionButton';

const Titulo = styled(H1Styled)<{color?: string}>`
          
  color: ${props => props.color};
`;

interface TitleBanner01Props {  
  children: React.ReactNode;
  color: string; 
  text_CTA?: string;  
  background_color_CTA?: string;
  color_CTA?: string; 
  sectionId?: string;
  width: string;
}

const TitleBanner: React.FC<TitleBanner01Props> = ({ children, color, text_CTA, 
    background_color_CTA, color_CTA, sectionId, width }) => {  

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
    if (isLg) return '32px';  // telas grandes 
    if (isXl) return '32px';  // telas extra grandes 
    return '100%'; 
  };  

  return (
      <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" 
        sx={{ gap: getGap(), width: {width}}}>
        <Titulo color={color}>{children}</Titulo>             
        { text_CTA && 
          <ScrollToSectionButton 
            text={text_CTA}
            color={color_CTA ? color_CTA : 'black'} 
            background_color={background_color_CTA ? background_color_CTA : 'black'} 
            sectionId={sectionId ? sectionId : " "}>
          </ScrollToSectionButton>}     
      </Stack>
  );
    
};

export default TitleBanner;