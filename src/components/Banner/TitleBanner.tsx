import React from 'react';
import { Stack } from '@mui/material';
import { H1Styled } from '../Typography';
import styled from 'styled-components';

const Title = styled(H1Styled)<{color?: string}>`
          
  color: ${props => props.color};
`;

interface TitleBannerProps {    
  children?: React.ReactNode;
  width: string;
  textTitle: string;  
  color_title: string;
  renderSubtitle?: () => React.ReactElement;
}


const TitleBanner: React.FC<TitleBannerProps> = ({ children, textTitle,
  color_title, renderSubtitle, width }) => {  

  return (
      <Stack direction="column" justifyContent="flex-start" alignItems="center" 
        gap={{ xs: '16px', sm: '24px'}} width={width}>          
          
          <Title color={color_title}>{textTitle}</Title>
          
          {renderSubtitle && renderSubtitle()}
          
          {children}

      </Stack>
  );  
    
};

export default TitleBanner;