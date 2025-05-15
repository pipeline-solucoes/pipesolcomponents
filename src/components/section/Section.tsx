
import { styled } from '@mui/material/styles';
import { ContainerSafeSection } from '../ContainerSafe';

const SectionStyled = styled('section', {
  shouldForwardProp: (prop) => !['background_color'].includes(prop as string),
})<{
  background_color: string;
}>(({ background_color }) => ({
  position: 'relative',
  backgroundColor: background_color,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}));
 

interface SectionProps { 
  section_id: string; //identificador da seção
  background_color: string; //cor de fundo da secao       
  background_color_container_safe?: string; // cor de fundo da area de segurança. (padrao: transparente)
  border_radius_container_safe?: string; //arredondamento da borda da area de seguranca. (padrao: 0px)
  children: React.ReactNode; //compnentes que serão exibidos na secao
}

const Section: React.FC<SectionProps> = ({ 
    section_id, 
    background_color, 
    background_color_container_safe = 'transparent', 
    border_radius_container_safe = '0px',  children }) => {
  
    return (
      <SectionStyled id={section_id} background_color={background_color}>                
        <ContainerSafeSection border_radius={border_radius_container_safe} background_color={background_color_container_safe}>
          { children }
        </ContainerSafeSection>
      </SectionStyled>
    );  
};

export default Section;
