import styled from 'styled-components';

const SectionStyled = styled('section').withConfig({
  shouldForwardProp: (prop) =>
    !['color1', 'color2', 'color3' ].includes(prop)})
  <{color1: string; color2: string; color3: string}>`  

  position: relative;
  background: linear-gradient(to bottom, ${(props) => props.color1}, ${(props) => props.color2}, ${(props) => props.color3});
  display: flex;      
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 100%;     
`;

 const ContainerSafe = styled.div`
        
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
    children: React.ReactNode;   
    color1: string;
    color2: string;
    color3: string;
    section_id: string;
  }

  const SectionGradiente: React.FC<SectionProps> = ({ children, color1, color2, color3, section_id}) => {
  
    return (
      <SectionStyled id={section_id} color1={color1} color2={color2} color3={color3}>        
        <ContainerSafe>                                   
          { children }                        
        </ContainerSafe>                     
      </SectionStyled>
    );  
};

export default SectionGradiente;
