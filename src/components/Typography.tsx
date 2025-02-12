import styled from 'styled-components';

export const H1Styled = styled.h1`
   
  font-family:  ${props => props.theme.typography.fontFamily};  
  font-weight: ${props => props.theme.typography.h1.fontWeight}; 
  font-style: ${props => props.theme.typography.h1.fontStyle};       
  line-height: ${props => props.theme.typography.h1.lineHeight};          
  letter-spacing: ${props => props.theme.typography.h1.letterSpacing};    
  font-size: ${props => props.theme.typography.h1.fontSize}; 
  margin: ${props => props.theme.typography.h1.margin};
  
  @media (max-width: 600px) { 
    font-size: ${(props) => props.theme.typography.h1['@media (max-width:600px)'].fontSize}; 
  } 
  
  @media (min-width: 601px) and (max-width: 960px) { 
    font-size: ${(props) => props.theme.typography.h1['@media (min-width:601px) and (max-width:960px)'].fontSize}; 
  }
`;

export const H2Styled = styled.h2`
  
  font-family:  ${props => props.theme.typography.fontFamily};   
  font-weight: ${props => props.theme.typography.h2.fontWeight}; 
  font-style: ${props => props.theme.typography.h2.fontStyle};       
  line-height: ${props => props.theme.typography.h2.lineHeight};          
  letter-spacing: ${props => props.theme.typography.h2.letterSpacing};    
  font-size: ${props => props.theme.typography.h2.fontSize}; 
  margin: ${props => props.theme.typography.h2.margin};
  
  @media (max-width: 600px) { 
    font-size: ${(props) => props.theme.typography.h2['@media (max-width:600px)'].fontSize}; 
  } 
  
  @media (min-width: 601px) and (max-width: 960px) { 
    font-size: ${(props) => props.theme.typography.h2['@media (min-width:601px) and (max-width:960px)'].fontSize}; 
  }
`;

export const H3Styled = styled.h3`
   
  font-family:  ${props => props.theme.typography.fontFamily};             
  font-weight: ${props => props.theme.typography.h3.fontWeight}; 
  font-style: ${props => props.theme.typography.h3.fontStyle};       
  line-height: ${props => props.theme.typography.h3.lineHeight};          
  letter-spacing: ${props => props.theme.typography.h3.letterSpacing};    
  font-size: ${props => props.theme.typography.h3.fontSize};
  margin: ${props => props.theme.typography.h3.margin};
  
  @media (max-width: 600px) { 
    font-size: ${(props) => props.theme.typography.h3['@media (max-width:600px)'].fontSize}; 
  } 
  
  @media (min-width: 601px) and (max-width: 960px) { 
    font-size: ${(props) => props.theme.typography.h3['@media (min-width:601px) and (max-width:960px)'].fontSize}; 
  }
`;

export const H4Styled = styled.h4`
 
  font-family:  ${props => props.theme.typography.fontFamily};             
  font-weight: ${props => props.theme.typography.h4.fontWeight}; 
  font-style: ${props => props.theme.typography.h4.fontStyle};       
  line-height: ${props => props.theme.typography.h4.lineHeight};          
  letter-spacing: ${props => props.theme.typography.h4.letterSpacing};    
  font-size: ${props => props.theme.typography.h4.fontSize};
  margin: ${props => props.theme.typography.h4.margin};
  
  @media (max-width: 600px) { 
    font-size: ${(props) => props.theme.typography.h4['@media (max-width:600px)'].fontSize}; 
  } 
  
  @media (min-width: 601px) and (max-width: 960px) { 
    font-size: ${(props) => props.theme.typography.h4['@media (min-width:601px) and (max-width:960px)'].fontSize}; 
  }
`;

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