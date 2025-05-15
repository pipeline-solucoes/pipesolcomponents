import { styled } from '@mui/material/styles';
import { ContainerSafeSection } from '../ContainerSafe';

const SectionStyled = styled('section', {
  shouldForwardProp: (prop) => !['color1', 'color2', 'color3'].includes(prop as string),
})<{
  color1: string;
  color2: string;
  color3: string;
}>(({ color1, color2, color3 }) => ({
  position: 'relative',
  background: `linear-gradient(to bottom, ${color1}, ${color2}, ${color3})`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}));

  interface SectionProps {   
    children: React.ReactNode;   
    color1: string;
    color2: string;
    color3: string;
    section_id: string;
  }

  const SectionGradiente: React.FC<SectionProps> = ({ children, color1, color2, color3, section_id}) => {
  
    return (
      <SectionStyled id={section_id} color1={color1} color2={color2} color3={color3}>        
        <ContainerSafeSection border_radius='0px' background_color='transparent'>                                   
          { children }                        
        </ContainerSafeSection>                     
      </SectionStyled>
    );  
};

export default SectionGradiente;
