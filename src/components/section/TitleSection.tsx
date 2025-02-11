import React from 'react';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import { Body1Styled, H2Styled } from '../Typography';

const Tag = styled(Body1Styled)<{color?: string}>`
  height: auto;
  width: 100%;
  text-align: left;        
  color: ${props => (props.color ? props.color : props.theme.palette.secondary.main)};     
`;

const Titulo = styled(H2Styled)<{color?: string}>`
  height: auto;
  width: 100%;
  text-align: left;        
  color: ${props => (props.color ? props.color : props.theme.palette.primary.main)};
`;


interface TitleSectionProps {
  tag?: string;
  title?: string;  
  color_tag?: string;
  color_title?: string;  
}

const TitleSection: React.FC<TitleSectionProps> = ({tag, title,
  color_tag, color_title}) => {

  return (  
    <Stack direction="column" sx={{ gap: '4px' }}>
      {tag && <Tag color={color_tag}>{tag}</Tag>}
      {title && <Titulo color={color_title}>{title}</Titulo>}      
    </Stack>    
  );
};

export default TitleSection;