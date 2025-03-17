import styled from 'styled-components';
import { Tab, Tabs } from '@mui/material';

export const TabsStyled = styled(Tabs)`
     
  .MuiTabs-indicator {
    background-color: #00000000;
  }
`;

export const TabStyled = styled(Tab)<{ selected: boolean, 
    $color: string, $background_color: string }>`
  
  font-family:  ${props => props.theme.typography.fontFamily};             
  font-weight: ${props => props.theme.typography.h4.fontWeight}; 
  font-style: ${props => props.theme.typography.h4.fontStyle};       
  line-height: ${props => props.theme.typography.h4.lineHeight};          
  letter-spacing: ${props => props.theme.typography.h4.letterSpacing};    
  font-size: ${props => props.theme.typography.h4.fontSize};
  margin: ${props => props.theme.typography.h4.margin};
  border-radius: 0px;
  margin-right: 8px;
  text-transform: none;

  flex: 1; 
  background-color: ${(props) => props.$background_color};
  color: ${(props) => props.$color};
  &:hover {
    color: ${(props) => props.$color};    
  }
  &.Mui-selected {    
    color: ${(props) => props.$color};
    background-color:${(props) => props.$background_color};
    border-bottom: 4px solid ${(props) => props.$color}; 
    
  @media (max-width: 600px) { 
    font-size: ${(props) => props.theme.typography.h4['@media (max-width:600px)'].fontSize}; 
  } 
  
  @media (min-width: 601px) and (max-width: 960px) { 
    font-size: ${(props) => props.theme.typography.h4['@media (min-width:601px) and (max-width:960px)'].fontSize}; 
  }    
`;