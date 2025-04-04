import React from 'react';
import styled from 'styled-components';

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  width: fit-content;
  flex-grow: 1;
`;

export interface SpanBody1Props {      
    children: React.ReactNode;    
    renderIcon: () => React.ReactElement;     
}

const IconText: React.FC<SpanBody1Props> = ({ children, renderIcon }) => {            

    return(
        <DivStyled> 
            {renderIcon()}
            {children}
        </DivStyled>
    );         
};

export default IconText;