import React from 'react';
import { Box } from '@mui/material';
import { ContainerSafe } from '../ContainerSafe';
import styled from 'styled-components';

interface FooterProps {      
    background_color: string;               
    renderColunas: () => React.ReactElement;
    renderCopywriter: () => React.ReactElement;
  }

  const FooterStyled = styled('footer').withConfig({
    shouldForwardProp: (prop) =>
      !['background_color'].includes(prop)})
    <{background_color: string}>`
  
    position: relative;
    background-color: ${(props) => props.background_color};
    display: flex;      
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    width: 100%;   
`;

const ContainerFooter = styled.div`  
    position: relative;
    display: flex;      
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    width: 100%; 
    padding: 24px 0px 0px;  
    height: auto;
    gap: 32px;
`;

const ContentWrapStyled = styled.div`
  width: 100%;      
  height: 100%;
  gap: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;  

const Footer: React.FC <FooterProps> =  ({ background_color, renderColunas, renderCopywriter}) => {

  return (
    <FooterStyled background_color={background_color}>        
        <ContainerSafe>
            <ContainerFooter>
                <ContentWrapStyled>                
                    {renderColunas()}                                    
                </ContentWrapStyled>
                <Box display='flex' flexDirection="row" alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
                    {renderCopywriter()}
                </Box>
            </ContainerFooter>
        </ContainerSafe>
    </FooterStyled>
  );
};

export default Footer;
