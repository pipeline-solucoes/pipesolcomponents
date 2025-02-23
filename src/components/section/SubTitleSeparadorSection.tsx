import React from 'react';
import { H4Styled } from '../Typography';
import { Divider } from '@mui/material';


interface SubTitleSeparadorSectionProps {  
  children: React.ReactNode;    
  color: string;   
}

const SubTitleSeparadorSection: React.FC<SubTitleSeparadorSectionProps> = ({children,
  color}) => {

  return (
    <Divider sx={{ bgcolor: {color}, width: '100%', paddingTop:'16px', paddingBottom:'16px' }}>
      <H4Styled>{children}</H4Styled>
    </Divider> 
  );
};

export default SubTitleSeparadorSection;