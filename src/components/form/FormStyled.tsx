import styled from 'styled-components';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField).withConfig({
  shouldForwardProp: (prop) =>
    !["backgroundColor", "color", "borderRadius"].includes(prop),
})<{
  backgroundColor?: string;
  color: string;
  borderRadius?: string;
}>`

  /* Estilos gerais */
  & .MuiInputLabel-root {
    color: ${(props) => props.color};
  }

  & .MuiInputBase-input::placeholder {
    color: ${(props) => props.color};
    opacity: 1; /* Garantir visibilidade total do placeholder */
  }

  & .MuiInputBase-root {
    background-color: ${(props) => props.backgroundColor || "transparent"};
    border-radius: ${(props) => props.borderRadius || "0px"}; /* Valor padrão */
    color: ${(props) => props.color};
    transition: background-color 0.3s ease, color 0.3s ease; /* Transições suaves */
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }

  /* Tipografia dinâmica */
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  font-weight: ${(props) => props.theme.typography.body1.fontWeight};
  font-style: ${(props) => props.theme.typography.body1.fontStyle};
  line-height: ${(props) => props.theme.typography.body1.lineHeight};
  letter-spacing: ${(props) => props.theme.typography.body1.letterSpacing};
  margin: ${(props) => props.theme.typography.body1.margin};

  /* Responsividade */
  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.typography.body1["@media (max-width:600px)"].fontSize};
  }

  @media (min-width: 601px) and (max-width: 960px) {
    font-size: ${(props) => props.theme.typography.body1["@media (min-width:601px) and (max-width:960px)"].fontSize};
  }
`;