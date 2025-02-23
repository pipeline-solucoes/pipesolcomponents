import React from 'react';
import styled from 'styled-components';
import { Body2Styled } from '../Typography';

export const TextoStyled = styled(Body2Styled)<{color: string}>`
  color: ${(props) => props.color};                 
`;

export interface SpanBody2Props {      
    children: React.ReactNode;
    color: string;    
}

const SpanBody2: React.FC<SpanBody2Props> = ({ children, color }) => {            

    return(
      <TextoStyled color={color}>
        {children}
      </TextoStyled>
    );         
};

export default SpanBody2;