
import React from 'react';
import { Body2Styled } from '../Typography';

export interface SpanBody2Props {      
    children: React.ReactNode;
    color: string;    
}

const SpanBody2: React.FC<SpanBody2Props> = ({ children, color }) => {            

    return(
      <Body2Styled style={{ color: color }}>
        {children}
      </Body2Styled>
    );         
};

export default SpanBody2;