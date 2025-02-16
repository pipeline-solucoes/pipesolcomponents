import React from 'react';
import { H4Styled } from '../Typography';
import { Divider } from '@mui/material';


interface SubTitleSeparadorSectionProps {  
  title?: string;    
  color: string;   
}

const SubTitleSeparadorSection: React.FC<SubTitleSeparadorSectionProps> = ({title,
  color}) => {

  return (
    <Divider sx={{ bgcolor: {color}, width: '100%', paddingTop:'16px', paddingBottom:'16px' }}>
      <H4Styled>{title}</H4Styled>
    </Divider> 
  );
};

export default SubTitleSeparadorSection;