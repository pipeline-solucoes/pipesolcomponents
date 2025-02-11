import React from 'react';
import styled from 'styled-components';

const Area = styled.div`       
  height: 100%; 
  display: grid;
  grid-template-rows: auto 1fr;     
  justify-content: center;  
  align-items: center;   
`;

const AreaMenu = styled.div<{ background_color: string }>`
    width: 100%;              
    background-color: ${(props) => props.background_color};        
`;

const AreaTexto = styled.div`
    width: 100%;    
    height: 100%; 
    display: flex;
    align-items: center;    
`;

interface AreaBannerMenuTitleProps {
  renderMenu: () => React.ReactElement;
  renderContent: () => React.ReactElement;
  background_color_menu: string;
}

const AreaBannerMenuTitle: React.FC<AreaBannerMenuTitleProps> = ({ renderMenu, renderContent, background_color_menu }) => {  

  return (    
    <Area>
      <AreaMenu background_color={background_color_menu}>
        {renderMenu()}
      </AreaMenu>                                         
      <AreaTexto>
        {renderContent()}                
      </AreaTexto>        
    </Area> 
  );
};

export default AreaBannerMenuTitle;