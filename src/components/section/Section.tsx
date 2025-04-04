
import styled from 'styled-components';

const SectionStyled = styled('section').withConfig({
  shouldForwardProp: (prop) =>
    !['background_color'].includes(prop)})
  <{background_color: string}>`

  position: relative;
  background-color: ${(props) => props.background_color};
  display: flex;      
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 100%;   
`;

export const ContainerSafe = styled.div`
        
    margin: 48px 0px; 
    height: 100%;
    gap: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 600px) { 
        width: calc(100% - 32px) 
    }

    @media (min-width: 600px) {
        width: calc(100% - 48px) 
    }

    @media (min-width: 960px) {
        width: calc(100% - 54px); 
    }

    @media (min-width:1280px) {
        width: 1200px; 
    }

    @media (min-width: 1920px) {
        width: 1200px; 
    }    
`; 
 

interface SectionProps { 
  section_id: string; 
  background_color: string; 
  children: React.ReactNode;   
}

const Section: React.FC<SectionProps> = ({ section_id, background_color, children }) => {
  
    return (
      <SectionStyled id={section_id} background_color={background_color}>                
        <ContainerSafe>
          { children }
        </ContainerSafe>
      </SectionStyled>
    );  
};

export default Section;
