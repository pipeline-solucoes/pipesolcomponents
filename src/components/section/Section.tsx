import { ContainerSafe } from '../ContainerSafe';
import styled from 'styled-components';

const SectionStyled = styled('section') `  
  margin: '0 auto'  
`;

const ContainerSection = styled.div<{background_color?: string}>`
    background-color: ${(props) => props.background_color ? props.background_color : 'transparent'};
    display: flex;      
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    width: 100%;   
`; 

interface SectionProps {   
  children: () => React.ReactNode;    
  background_color?: string;  
}

const Section: React.FC<SectionProps> = ({ children,
  background_color }) => {
  
    return (
      <SectionStyled>
          <ContainerSection background_color={background_color} >
              <ContainerSafe>                                   
                { children() }                        
              </ContainerSafe>
          </ContainerSection>              
      </SectionStyled>
    );  
};

export default Section;
