import React from 'react';
import styled from 'styled-components';

const Area = styled.div`       
  height: 100%; 
  width: 100%;
  display: flex;      
  align-items: center;
  justify-content: center;
`;


interface ContainerBannerCenterProps {  
  children: () => React.ReactNode;  
}

const ContainerBannerCenter: React.FC<ContainerBannerCenterProps> = ({children}) => {  

  return (    
    <Area>      
      {children()}
    </Area> 
  );
};

export default ContainerBannerCenter;