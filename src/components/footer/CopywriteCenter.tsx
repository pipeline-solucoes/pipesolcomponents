import React from 'react';
import { styled } from '@mui/material';
import NavigationButton from '../button/NavigationButton';

interface StyledTextProps {
  color_border: string;
  color_text: string;
}

const ContentWrapStyled = styled('div', {
  shouldForwardProp: (prop) =>
    !['color_border','color_text'].includes(prop as string),
})<StyledTextProps>(({ theme, color_border, color_text }) => ({
  width: '100%',
  height: '100%',
  gap: '24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopStyle: 'solid',
  borderTopWidth: '1px',
  padding: '16px',
  borderTopColor: color_border,

   // Tipografia
   fontFamily: theme.typography.fontFamily,
   fontWeight: theme.typography.body1?.fontWeight,
   fontStyle: theme.typography.body1?.fontStyle,
   lineHeight: theme.typography.body1?.lineHeight,
   letterSpacing: theme.typography.body1?.letterSpacing,
   fontSize: theme.typography.body1?.fontSize,
   margin: theme.typography.body1?.margin,
   color: color_text,
}));

export interface CopywriteProps {      
    ano: string;
    color_border: string; 
    color: string;    
    color_link_pipeline: string;
  }

const CopywriteCenter: React.FC<CopywriteProps> = ({ ano, color_border, color, color_link_pipeline }) => (
    
    <ContentWrapStyled color_border={color_border} color_text={color}>        
      
        <div>
          Copyright ©{ano} todos os direitos reservados.
        </div>
            
        <div>
          Criado por <NavigationButton url='https://www.instagram.com/pipelinesolucoes/' 
            color={color_link_pipeline} aria_label='link Pipeline Soluções' 
            text_decoration='none' layout='link' width='auto'>
            @pipelinesolucoes
          </NavigationButton>
        </div>
      
    </ContentWrapStyled>
);



export default CopywriteCenter;