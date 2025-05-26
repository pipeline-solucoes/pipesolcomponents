import React from 'react';
import { styled } from '@mui/material/styles';
import { SvgIconComponent } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

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
  color_text: string; //cor do texto  
  Icon: SvgIconComponent; //icone 
  size_icon?: number; //tamanho do icone (padrao = 24px)
  color_icon: string;   //cor do icone
  children: React.ReactNode; //texto podendo usar tags <b>  
}

const IconText: React.FC<IconTextProps> = ({ color_text, Icon, color_icon, size_icon = 24, children }) => {            

    return(
        <DivStyled> 
            <Box fontSize={size_icon} color={color_icon}>
                <Icon/>
            </Box>
            <Typography variant="body1" component="span" color={color_text} flex={1}>
               {children}
            </Typography>
        </DivStyled>
    );
};

export default IconText;