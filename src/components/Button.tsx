"use client";

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  texto: string;   
}

const CustomSpan = styled.span`
  color: red;
`;

const Button: React.FC<ButtonProps> = ({texto}) => {
  
  return ( 
    <CustomSpan>
      {texto}
    </CustomSpan> );
};

export default Button;