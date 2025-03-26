import styled from 'styled-components';

export const ButtonHoverBorderBottomStyled = styled.button.withConfig({
    shouldForwardProp: (prop) =>
      !['background_color',
        'color', 
        'color_hover',          
        'padding', 
        'border_radius'].includes(prop), })
  <{
    background_color?: string;
    color: string; 
    color_hover?: string;     
    padding: 'none' | 'default',
    border_radius?: string
 }>`  
    cursor: pointer;
    text-decoration: none;
    text-transform: none;  
    border: none;
    border-bottom: 2px solid #00000000;
    margin: 0px;
    box-shadow: none;
    background-color:  ${props =>props.background_color || '#00000000'};
    color:  ${props => props.color};  
    border-radius: ${props =>props.border_radius || '0px'};    
    padding: ${(props) => (props.padding == 'default') ? '8px 24px' : '0px' };    
     
    &:hover {      
      border-bottom: 2px solid ${props => props.color_hover};
      color: ${props => props.color_hover || props.color};
    }
`;

export const ButtonHoverColorStyled = styled.button.withConfig({
    shouldForwardProp: (prop) =>
      !['background_color',
        'color', 
        'color_hover',          
        'padding', 
        'border_radius'].includes(prop), })
  <{
    background_color?: string;
    color: string; 
    color_hover?: string;     
    padding: 'none' | 'default',
    border_radius?: string
 }>`  
    cursor: pointer;
    text-decoration: none;
    text-transform: none;  
    border: none;    
    margin: 0px;
    box-shadow: none;
    background-color:  ${props =>props.background_color || '#00000000'};
    color:  ${props => props.color};  
    border-radius: ${props =>props.border_radius || '0px'};    
    padding: ${(props) => (props.padding == 'default') ? '8px 24px' : '0px' };    
     
    &:hover {            
      color: ${props => props.color_hover || props.color};
    }
`;