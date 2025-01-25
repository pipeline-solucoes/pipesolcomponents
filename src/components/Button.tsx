"use client";

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string; 
}

const Texto = styled.span`
  background: #0070f3;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #005bb5;
  }
`;

const Button: React.FC<ButtonProps> = ({ label }) => (
  <Texto>{label}</Texto>
);

export default Button;