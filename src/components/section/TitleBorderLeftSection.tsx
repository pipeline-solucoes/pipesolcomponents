import React from 'react';
import styled from 'styled-components';
import { H3Styled } from '../Typography';

const Title = styled(H3Styled)<{color: string, color_border: string}>`
  height: auto;
  width: 100%;
  text-align: left;        
  color: ${props => props.color};
  border-left: 4px solid ${props => props.color_border};
  padding: 16px; 
`;

interface TitleBorderLeftSectionProps {  
  title?: string;    
  color_title: string;
  color_border: string;  
}

const TitleBorderLeftSection: React.FC<TitleBorderLeftSectionProps> = ({title,
  color_title, color_border}) => {

  return (  
    <Title color={color_title} color_border={color_border}>{title}</Title>         
  );
};

export default TitleBorderLeftSection;