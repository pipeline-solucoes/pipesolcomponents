
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  texto: string;   
}

const CustomSpan = styled.span`
  color:  ${props => props.theme.palette.primary.main};
`;

const Button: React.FC<ButtonProps>= ({texto}) => {

  return ( <CustomSpan>{texto}</CustomSpan> );
};

export default Button;