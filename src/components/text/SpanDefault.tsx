import React from 'react';
import styled from 'styled-components';
import { Body1Styled } from '../Typography';

export const TextoStyled = styled(Body1Styled)<{color?: string}>`
  color: ${(props) => props.color? props.color : props.theme.palette.text.primary};                 
`;

export interface SpanDefaultProps {      
    text: string;
    color?: string;    
}

const SpanDefault: React.FC<SpanDefaultProps> = ({ text, color }) => {            

    return(
      <TextoStyled color={color}>
        {text}
      </TextoStyled>
    );         
};

export default SpanDefault;