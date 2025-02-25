
import React from 'react';
import styled from 'styled-components';
import { ContainerSafeSemMargem } from '../ContainerSafe';


const AreaBarraFerramenta = styled.div<{$background_color: string}>`    
    height: fit-content;    
    background-color: ${(props) => props.$background_color };
    display: flex;     
    justify-content: center;
`;

interface ContainerBarraFerramentasProps {
  children: () => React.ReactNode;
  background_color: string;   
}

const ContainerBarraFerramentas: React.FC<ContainerBarraFerramentasProps> = ({ children, background_color }) => {  

  return (    
    
    <AreaBarraFerramenta $background_color={background_color}>
      <ContainerSafeSemMargem>
        {children()}
      </ContainerSafeSemMargem>      
    </AreaBarraFerramenta>           
     
  );
};

export default ContainerBarraFerramentas;