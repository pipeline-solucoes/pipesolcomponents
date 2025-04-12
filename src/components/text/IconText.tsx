import React from 'react';
import { styled } from '@mui/material/styles';

const DivStyled = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  boxSizing: 'border-box',
  overflow: 'hidden',
  position: 'relative',
  width: 'fit-content',
  flexGrow: 1,
}));


export interface IconTextProps {      
    children: React.ReactNode;    
    renderIcon: () => React.ReactElement;     
}

const IconText: React.FC<IconTextProps> = ({ children, renderIcon }) => {            

    return(
        <DivStyled> 
            {renderIcon()}
            {children}
        </DivStyled>
    );         
};

export default IconText;