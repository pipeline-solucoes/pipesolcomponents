import styled from 'styled-components';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)<{$background_color?: string, 
    $border_radius: string, $color: string}>`

  & .MuiInputBase-root {
    background-color: ${(props) => props.$background_color || '#00000000'};
    border-radius:${(props) => props.$border_radius};
    color: ${(props) => props.$color };
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }

  font-family:  ${props => props.theme.typography.fontFamily};             
  font-weight: ${props => props.theme.typography.body1.fontWeight}; 
  font-style: ${props => props.theme.typography.body1.fontStyle};       
  line-height: ${props => props.theme.typography.body1.lineHeight};          
  letter-spacing: ${props => props.theme.typography.body1.letterSpacing};    
  font-size: ${props => props.theme.typography.body1.fontSize};
  margin: ${props => props.theme.typography.body1.margin};
  color: ${(props) => props.$color };

  @media (max-width: 600px) { 
    font-size: ${(props) => props.theme.typography.body1['@media (max-width:600px)'].fontSize}; 
  } 
  
  @media (min-width: 601px) and (max-width: 960px) { 
    font-size: ${(props) => props.theme.typography.body1['@media (min-width:601px) and (max-width:960px)'].fontSize}; 
  }    
`;