import React from 'react';
import styled from 'styled-components';
import { Stack, Box } from '@mui/material';
import SpanBody1 from '../text/SpanBody1';

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
    
  <Box sx={{ width: '100%', padding: '16px 0px 0px', 
    borderTopColor: color_border, borderTopStyle: 'solid', borderTopWidth: '1px'}}>  
      <Stack direction={{xs: 'column', md: 'row' }} 
        justifyContent="center" alignItems="center" sx={{ width: '100%', gap: '16px' }}>        
        <Box>
            <SpanBody1 color={color}>
              Copyright ©{ano} todos os direitos reservados.               
            </SpanBody1>            
        </Box>
        <Box flex={1}>
            <SpanBody1 color={color}>              
              Criado por <StyledLink href='https://www.instagram.com/pipelinesolucoes/'
                target="_blank" rel="noopener noreferrer" $color={color}>
                <SpanBody1 color={color}>Pipeline Soluções</SpanBody1>
              </StyledLink>
            </SpanBody1>            
        </Box> 
        <Box>
            {children}
        </Box>               
      </Stack>
    </Box>
);



export default Copywrite;