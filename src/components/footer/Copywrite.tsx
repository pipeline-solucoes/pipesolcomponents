import React from 'react';
import { Box, styled } from '@mui/material';
import { StyledSpanBody1 } from '../text/SpanStyled';
import NavigationButton from '../button/NavigationButton';

interface StyledTextProps {
  color_border: string;
}

const ContentWrapStyled = styled('div', {
  shouldForwardProp: (prop) =>
    !['color_border'].includes(prop as string),
})<StyledTextProps>(({ color_border }) => ({
  width: '100%',
  height: '100%',
  gap: '24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'center',
  borderTopStyle: 'solid',
  borderTopWidth: '1px',
  padding: '16px 0px 0px',
  borderTopColor: color_border,
}));

export interface CopywriteProps {      
    ano: string;
    color_border: string; 
    color: string;
    children?: React.ReactNode;
  }

const Copywrite: React.FC<CopywriteProps> = ({ ano, color_border, color, children }) => (
    
    <ContentWrapStyled color_border={color_border}>        
      <Box>
        <StyledSpanBody1 text_color={color}>
          Copyright ©{ano} todos os direitos reservados.
        </StyledSpanBody1>
      </Box>
        
      <Box flex={1}>
        <StyledSpanBody1 text_color={color}>
          Criado por <NavigationButton url='https://www.instagram.com/pipelinesolucoes/' 
            color={color} aria_label='link Pipeline Soluções' 
            text_decoration='none' layout='link' width='auto'>
            Pipeline Soluções
          </NavigationButton>
        </StyledSpanBody1>
      </Box>

      <Box>        
        {children}
      </Box>    
    </ContentWrapStyled>
);



export default Copywrite;