import { styled } from '@mui/material/styles';
import { ContainerSafeSection } from '../containers/ContainerSafe';

const SectionStyled = styled('section', {
  shouldForwardProp: (prop) => !['background_image'].includes(prop as string),
})<{
  background_image: string;  
}>(({ background_image }) => ({
  position: 'relative',
  backgroundImage: `url(${background_image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
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
        <ContainerSafeSection border_radius='0px' background_color='transparent'>                                   
          { children }                        
        </ContainerSafeSection>                     
      </SectionStyled>
    );  
};

export default SectionImage;
