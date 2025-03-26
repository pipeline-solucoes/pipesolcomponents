'use client';

import React, { useRef, useEffect, useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import styled from 'styled-components';
import { StyledTextField } from './FormStyled';
import { Body1Styled } from '../Typography';

const FormContainer = styled(Container)`

  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin: auto;
  padding: 0px;
`;

const StyledButton = styled(Button)<{$background_color?: string, 
    $border_radius: string, $color: string}>`

  color: ${(props) => props.$color };
  background-color: ${(props) => props.$background_color || '#00000000'};
  border-radius:${(props) => props.$border_radius};
  text-transform: none;
  border: none;  
  cursor: pointer;
  padding: 8px 24px;
  box-shadow: none;

  font-family:  ${props => props.theme.typography.fontFamily};             
  font-weight: ${props => props.theme.typography.body1.fontWeight}; 
  font-style: ${props => props.theme.typography.body1.fontStyle};       
  line-height: ${props => props.theme.typography.body1.lineHeight};          
  letter-spacing: ${props => props.theme.typography.body1.letterSpacing};    
  font-size: ${props => props.theme.typography.body1.fontSize};
  margin: ${props => props.theme.typography.body1.margin};     
  @media (max-width: 600px) { 
    font-size: ${(props) => props.theme.typography.body1['@media (max-width:600px)'].fontSize}; 
  } 
  
  @media (min-width: 601px) and (max-width: 960px) { 
    font-size: ${(props) => props.theme.typography.body1['@media (min-width:601px) and (max-width:960px)'].fontSize}; 
  }    
`;

const FixedSizeTextField = styled(TextField)<{$background_color?: string, 
    $border_radius: string, $color: string}>`

  & .MuiInputBase-root {   
    width: 100%;         
    overflow-y: auto;  
    height: 150px;
    background-color: ${(props) => props.$background_color || '#00000000'};
    border-radius:${(props) => props.$border_radius};
    color: ${(props) => props.$color };
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }  
`;

export interface FormProps {                    
    color: string;
    background_color?: string; 
    border_radius: string;
    color_button: string;
    background_color_button: string;
    border_radius_button: string;
    text_button: string;
    token: string;
  }

const Form: React.FC<FormProps> = ({ color, background_color, border_radius, color_button,
    background_color_button, border_radius_button, text_button, token }) => {

  const [mensagemApi, setMensagemApi] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const telefoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (telefoneRef.current) {
      telefoneRef.current.focus();
    }
  }, []);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validateTelefone = (telefone: string) => /^\(\d{2}\) \d{5}-\d{4}$/.test(telefone);

  const handleBlur = (field: string) => {
    switch (field) {
      case 'email':
        setErrors(prevErrors => ({
          ...prevErrors,
          email: !validateEmail(email),
        }));
        break;
      case 'telefone':
        setErrors(prevErrors => ({
          ...prevErrors,
          telefone: !validateTelefone(telefone),
        }));
        break;
      default:
        setErrors(prevErrors => ({
          ...prevErrors,
          [field]: !Boolean(eval(field)),
        }));
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors = Object.keys(errors).some((key) => errors[key]);

    if (!hasErrors) {
      
      try {
        
        const formData = new FormData();
        formData.append('nome', nome); 
        formData.append('email', email); 
        formData.append('telefone', telefone); 
        formData.append('mensagem', mensagem); 

        const response = await fetch('https://api.pipelinesolucoes.com.br/fale-conosco/envia-email?token='+token, {
          method: 'POST',              
          body: formData,
        });        

        if (response.status === 200){  
          setMensagemApi('Dados enviados com sucesso!');
        } else {
          setMensagemApi('Erro ao enviar dados.');
          console.log('Erro ao enviar dados:', response.statusText);
        }
      } catch (error) {
        setMensagemApi('Erro ao enviar dados.');
        console.log('Erro na solicitação:', error);
      }
    } else {
      setMensagemApi('Formulário contém erros');
    }
  };

  return (
    <FormContainer>
      <StyledTextField
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        onBlur={() => handleBlur('nome')}
        error={errors.nome}        
        required
        $background_color={background_color}
        $color={color}
        $border_radius={border_radius}
      />
      <StyledTextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => handleBlur('email')}
        error={errors.email}
        helperText={errors.email && 'Email inválido'}        
        required
        $background_color={background_color}
        $color={color}
        $border_radius={border_radius}
      />
      <StyledTextField
        label="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        onBlur={() => handleBlur('telefone')}
        error={errors.telefone}
        helperText={errors.telefone && 'Telefone inválido'}
        required
        placeholder="(99) 99999-9999"
        $background_color={background_color}
        $color={color}
        $border_radius={border_radius}
      />      
      <FixedSizeTextField
        label="Mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        onBlur={() => handleBlur('mensagem')}
        error={errors.mensagem}
        required
        multiline
        $background_color={background_color}
        $color={color}
        $border_radius={border_radius}
      />
      <StyledButton variant="contained" onClick={handleSubmit}  
        $background_color={background_color_button} $color={color_button}
        $border_radius={border_radius_button}>
        {text_button}
      </StyledButton>
      {mensagemApi && <Body1Styled>{mensagemApi}</Body1Styled>}
    </FormContainer>
     );
    };
  
export default Form;