
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
  section_id: string; 
  background_color: string; 
  children: React.ReactNode;   
}

const Section: React.FC<SectionProps> = ({ section_id, background_color, children }) => {
  
    return (
      <SectionStyled id={section_id} background_color={background_color}>                
        <ContainerSafeSection>
          { children }
        </ContainerSafeSection>
      </SectionStyled>
    );  
};

export default Section;
