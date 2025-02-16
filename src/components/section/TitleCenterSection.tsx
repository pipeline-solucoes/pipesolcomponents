import React from 'react';
import styled from 'styled-components';
import { H3Styled } from '../Typography';

const Title = styled(H3Styled)<{color: string}>`
  height: auto;
  width: 100%;
  text-align: center;        
  color: ${(props) => props.color};  
`;

interface TitleCenterSectionProps {
  text: string;    
  color: string;  
}

const TitleCenterSection: React.FC<TitleCenterSectionProps> = ({text, color}) => {

  return (  
    <Title color={color}>{text}</Title>       
  );
};

export default TitleCenterSection;