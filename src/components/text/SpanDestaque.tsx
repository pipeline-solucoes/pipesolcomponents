import React from 'react';
import styled from 'styled-components';
import { Body2Styled } from '../Typography';

export const TextoStyled = styled(Body2Styled)<{color?: string}>`
  color: ${(props) => props.color? props.color : props.theme.text.primary};    
`;

export interface SpanDestaqueProps {      
    text: string;
    color?: string;    
}

const SpanDestaque: React.FC<SpanDestaqueProps> = ({ text, color }) => {            

    return(
      <TextoStyled color={color}>
        {text}
      </TextoStyled>
    );         
};

export default SpanDestaque;