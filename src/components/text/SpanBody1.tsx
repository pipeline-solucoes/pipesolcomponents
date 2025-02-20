import React from 'react';
import styled from 'styled-components';
import { Body1Styled } from '../Typography';

export const TextoStyled = styled(Body1Styled)<{color: string}>`
  color: ${(props) => props.color};                 
`;

export interface SpanBody1Props {      
    children: React.ReactNode;
    color: string;    
}

const SpanBody1: React.FC<SpanBody1Props> = ({ children, color }) => {            

    return(
      <TextoStyled color={color}>
        {children}
      </TextoStyled>
    );         
};

export default SpanBody1;