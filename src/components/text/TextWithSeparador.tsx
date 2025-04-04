import React from 'react';
import { Divider } from '@mui/material';

interface TextWithSeparadorProps {  
  children: React.ReactNode;    
  color_separador: string;   
}

const TextWithSeparador: React.FC<TextWithSeparadorProps> = ({children,
  color_separador}) => {

  return (
    
    <Divider sx={{ bgcolor: 'transparent', 
      '&::before, &::after': {borderColor: color_separador },
      width: '100%', paddingTop:'16px', paddingBottom:'16px' }}>    
      {children}
    </Divider>       
  );
};

export default TextWithSeparador;