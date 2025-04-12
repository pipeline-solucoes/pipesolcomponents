'use client';

import React, { useRef, useEffect, useState } from 'react';
import { FixedSizeTextField, StyledButton, StyledTextField } from './FormStyled';

import { styled } from '@mui/material/styles';
import { StyledSpanBody1 } from '../text/SpanStyled';

const FormContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
  margin: 'auto',
  padding: '0px',
}));

export interface FormProps {                       
    color: string;
    background_color?: string; 
    border_radius?: string;
    color_button: string;
    background_color_button?: string;
    border_radius_button?: string;
    text_button: string;
    token: string;
    color_message_sucess: string;
    color_message_erro: string;
    message_sucess: string;
  }

  const Form: React.FC<FormProps> = ({
    color,
    background_color = 'transparent',
    border_radius = '0px',
    color_button,
    background_color_button = 'transparent',
    border_radius_button = '0px',
    text_button,
    token,
    color_message_sucess,
    color_message_erro,
    message_sucess
  }) => {
    const [mensagemApi, setMensagemApi] = useState('');
    const [corMensagemApi, setCorMensagemApi] = useState(color_message_erro);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
    const [isLoading, setIsLoading] = useState(false);
    const telefoneRef = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      if (telefoneRef.current) {
        telefoneRef.current.focus();
      }
    }, []);
  
    const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
    const validateTelefone = (telefone: string) => /^\d{2}\d{9}$/.test(telefone);
  
    const handleBlur = (field: string) => {
      switch (field) {
        case 'email':
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: !validateEmail(email),
          }));
          break;
        case 'telefone':
          setErrors((prevErrors) => ({
            ...prevErrors,
            telefone: !validateTelefone(telefone),
          }));
          break;
        default:
          setErrors((prevErrors) => ({
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
        setIsLoading(true); // Inicia o estado de loading
        try {
          const formData = new FormData();
          formData.append('nome', nome);
          formData.append('email', email);
          formData.append('telefone', telefone);
          formData.append('mensagem', mensagem);
  
          const response = await fetch(
            `https://api.pipelinesolucoes.com.br/fale-conosco/envia-email?token=${token}`,
            {
              method: 'POST',
              body: formData,
            }
          );
  
          if (response.status === 200) {
            setCorMensagemApi(color_message_sucess);
            setMensagemApi(message_sucess);
            setNome('');
            setEmail('');
            setTelefone('');
            setMensagem('');            
          } else {
            setCorMensagemApi(color_message_erro);
            setMensagemApi(`Houve um problema ao enviar sua mensagem. Por favor, verifique sua conexão e tente novamente mais tarde. 
            Caso o erro persista, saiba que você também pode nos contatar pelos outros canais disponíveis.`);
            console.log('Erro ao enviar dados:', response.statusText);
          }
        } catch (error) {
          setCorMensagemApi(color_message_erro);
          setMensagemApi(`Houve um problema ao enviar sua mensagem. Por favor, verifique sua conexão e tente novamente mais tarde. 
            Caso o erro persista, saiba que você também pode nos contatar pelos outros canais disponíveis.`);
          console.log('Erro na solicitação:', error);
        } finally {
          setIsLoading(false); 
        }
      } else {
        setCorMensagemApi(color_message_erro);
        setMensagemApi(`Alguns dos dados fornecidos estão inválidos. 
          Por favor, revise as informações preenchidas e 
          corrija os campos destacados antes de tentar enviar o formulário novamente.`);
      }
    };
  
    return (
      <FormContainer>
        <StyledTextField
          id='nome'
          label="Nome"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          onBlur={() => handleBlur('nome')}
          error={errors.nome}
          required={true}
          background_color={background_color}
          text_color={color}
          border_radius={border_radius}
        ></StyledTextField>
        <StyledTextField
          id="email"
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email')}
          error={errors.email}
          helperText={errors.email && 'Email inválido'}
          required={true}
          background_color={background_color}
          text_color={color}
          border_radius={border_radius}
        ></StyledTextField>
        <StyledTextField
          id="telefone"
          label="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          onBlur={() => handleBlur('telefone')}
          error={errors.telefone}
          helperText={errors.telefone && 'Telefone inválido'}
          required={true}
          placeholder="21999999999"
          background_color={background_color}
          text_color={color}
          border_radius={border_radius}
        ></StyledTextField>
        <FixedSizeTextField
          id="mensagem"
          label="Mensagem"
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          onBlur={() => handleBlur('mensagem')}
          error={errors.mensagem}
          required={true}
          multiline
          background_color={background_color}
          text_color={color}
          border_radius={border_radius}
        ></FixedSizeTextField>
        <StyledButton    
          width='100%'
          height='100%'      
          onClick={handleSubmit}
          background_color={background_color_button}
          text_color={color_button}
          border_radius={border_radius_button}
          disabled={isLoading}
        >
          {text_button}
        </StyledButton>
        { mensagemApi &&          
          <StyledSpanBody1 text_color={corMensagemApi}>{isLoading ? 'Enviando...' : mensagemApi}</StyledSpanBody1>
        }
      </FormContainer>
    );
  };
  
export default Form;




