import styled from 'styled-components';

export const Body1Styled = styled.span`
 
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

export const Body2Styled = styled.span`
 
  font-family:  ${props => props.theme.typography.fontFamily};             
  font-weight: ${props => props.theme.typography.body2.fontWeight}; 
  font-style: ${props => props.theme.typography.body2.fontStyle};       
  line-height: ${props => props.theme.typography.body2.lineHeight};          
  letter-spacing: ${props => props.theme.typography.body2.letterSpacing};    
  font-size: ${props => props.theme.typography.body2.fontSize};
  margin: ${props => props.theme.typography.body2.margin};
  
  @media (max-width: 600px) { 
    font-size: ${(props) => props.theme.typography.body2['@media (max-width:600px)'].fontSize}; 
  } 
  
  @media (min-width: 601px) and (max-width: 960px) { 
    font-size: ${(props) => props.theme.typography.body2['@media (min-width:601px) and (max-width:960px)'].fontSize}; 
  }
`;