import { styled } from '@mui/material/styles';
import { ContainerSafeSection } from '../ContainerSafe';

const SectionStyled = styled('section', {
  shouldForwardProp: (prop) => !['background_image'].includes(prop as string),
})<{
  background_image: string;  
}>(({ background_image }) => ({
  position: 'relative',
  backgroundImage: background_image ? `url(${background_image})` : undefined,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}));



  interface SectionProps {   
    children: React.ReactNode;   
    src: string;
    section_id: string;
  }

  const SectionImage: React.FC<SectionProps> = ({ children, src, section_id}) => {
  
    return (
      <SectionStyled id={section_id} background_image={src}>        
        <ContainerSafeSection>                                   
          { children }                        
        </ContainerSafeSection>                     
      </SectionStyled>
    );  
};

export default SectionImage;
