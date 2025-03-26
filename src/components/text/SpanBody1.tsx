
import React from 'react';
import { Body1Styled } from '../Typography';

export interface SpanBody1Props {      
    children: React.ReactNode;
    color: string;    
}

const SpanBody1: React.FC<SpanBody1Props> = ({ children, color }) => {            

    return(
      <Body1Styled style={{ color: color }}>
        {children}
      </Body1Styled> 
    );         
};

export default SpanBody1;