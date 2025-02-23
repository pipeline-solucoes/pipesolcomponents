import { ContainerSafe } from '../ContainerSafe';
import styled from 'styled-components';

const SectionStyled = styled('section') `  
  margin: '0 auto'  
`;

const ContainerSection = styled.div<{$color1: string, $color2: string}>`
    background: linear-gradient(to bottom, ${(props) => props.$color1}, ${(props) => props.$color1}, ${(props) => props.$color2});
    display: flex;      
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    width: 100%;   
`; 

interface SectionProps {   
  children: React.ReactNode;   
  color1: string;
  color2: string;
}

const SectionGradiente: React.FC<SectionProps> = ({ children, color1, color2}) => {
  
    return (
      <SectionStyled>
        <ContainerSection $color1={color1} $color2={color2}>
          <ContainerSafe>                                   
            { children }                        
          </ContainerSafe>
        </ContainerSection>              
      </SectionStyled>
    );  
};

export default SectionGradiente;
