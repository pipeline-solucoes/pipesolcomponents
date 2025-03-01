import React from 'react';
import styled from 'styled-components';
import { Stack, Box } from '@mui/material';
import SpanBody1 from '../text/SpanBody1';


const Container = styled.div<{$color_border: string}>`  
  width: 100%;
  padding: 16px 0px 0px;
  border-top: 1px solid ${props => props.$color_border};
`;

const StyledLink = styled.a<{$color: string}>`
  color: ${props => props.$color}; 
`;

export interface CopywriteProps {      
    ano: string;
    color_border: string; 
    color: string;
    children?: React.ReactNode;
  }

const Copywrite: React.FC<CopywriteProps> = ({ ano, color_border, color, children }) => (
    
  <Container $color_border={color_border}>  
      <Stack direction={{xs: 'column', md: 'row' }} 
        justifyContent="center" alignItems="center" sx={{ width: '100%', gap: '16px' }}>        
        <Box flex={1}>
            <SpanBody1 color={color}>
              Copyright ©{ano} todos os direitos reservados. | Criado por <StyledLink href='https://www.instagram.com/pipelinesolucoes/'
                target="_blank" rel="noopener noreferrer" $color={color}>
                <SpanBody1 color={color}>Pipeline Soluções</SpanBody1>
              </StyledLink>             
            </SpanBody1>            
        </Box> 
        <Box>
            {children}
        </Box>               
      </Stack>
    </Container>
);



export default Copywrite;