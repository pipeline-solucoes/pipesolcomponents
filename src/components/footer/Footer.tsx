import React from 'react';
import { Box, Container, Stack, styled } from '@mui/material';
import { ContainerSafe } from '../containers/ContainerSafe';

interface FooterProps {      
    background_color: string;               
    renderColunas: () => React.ReactElement;
    renderCopywriter: () => React.ReactElement;
  }

  interface FooterStyledProps {
    background_color: string;
  }

  const FooterStyled = styled('div', {
    shouldForwardProp: (prop) => !['background_color'].includes(prop as string),
  })<FooterStyledProps>(({ background_color }) => ({
  
    position: 'relative',
    backgroundColor: background_color,
    display: 'flex',     
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'auto'
}));


export const ContainerFooter = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '24px 0px 0px',
  height: 'auto',
  gap: '32px',
}));

export const ContentWrapStyled = styled('div')(() => ({
  width: '100%',
  height: '100%',
  gap: '24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
}));

const Footer: React.FC <FooterProps> =  ({ background_color, renderColunas, renderCopywriter}) => {

  return (
    <FooterStyled background_color={background_color}>        
        <ContainerSafe>
            <ContainerFooter>
                <Container maxWidth="lg">                        
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                    {renderColunas()}
                  </Stack>                    
                </Container>
                <Box display='flex' flexDirection="row" alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
                  {renderCopywriter()}
                </Box>
            </ContainerFooter>
        </ContainerSafe>
    </FooterStyled>
  );
};

export default Footer;
