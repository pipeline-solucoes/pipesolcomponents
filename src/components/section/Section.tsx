import Image, { StaticImageData } from 'next/image';
import { ContainerSafe } from '../ContainerSafe';
import styled from 'styled-components';

const SectionStyled = styled('section') `  
  margin: '0 auto';  
  position: relative;
`;

const ContainerSection = styled.div<{$background_color?: string}>`
    background-color: ${(props) => props.$background_color || '#00000000'};
    display: flex;      
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    width: 100%;   
`; 

const BackgroundImage = styled.div`  
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; 
`;

interface SectionProps {   
  children: React.ReactNode;   
  background_color?: string; 
  background_image?: StaticImageData; 
}

const Section: React.FC<SectionProps> = ({ children,
  background_color, background_image }) => {
  
    return (
      <SectionStyled>
        { background_image &&
          <BackgroundImage>
            <Image src={background_image} alt="fundo da seção" fill 
              style={{ objectFit: 'cover', objectPosition: 'center' }}           
              quality={80} 
            />
          </BackgroundImage> 
        }
        <ContainerSection $background_color={background_color}>
          <ContainerSafe>                                   
            { children }                        
          </ContainerSafe>
        </ContainerSection>              
      </SectionStyled>
    );  
};

export default Section;
