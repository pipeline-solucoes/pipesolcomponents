import React from 'react';
import { styled } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

const Container = styled('div', {
  shouldForwardProp: (prop) =>
    !['text_color'].includes(prop as string),
})<{text_color: string}>(({ theme, text_color }) => ({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',    
    gap: '4px',
    width: '100%',
    color: text_color,

    // Tipografia
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.body1?.fontWeight,
    fontStyle: theme.typography.body1?.fontStyle,
    lineHeight: theme.typography.body1?.lineHeight,
    letterSpacing: theme.typography.body1?.letterSpacing,
    fontSize: theme.typography.body1?.fontSize,
    margin: theme.typography.body1?.margin,
}));

export const Endereco = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',    
    gap: '4px',
    width: '100%',        
}));

export interface LocationProps { 
    iconColor: string;
    textColor: string;
    endereco: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep:string;        
}

const Location: React.FC<LocationProps> = ({ iconColor, textColor, endereco, bairro, cidade, uf, cep }) => {            

    return(
        <Container text_color={textColor}> 
          <PlaceIcon style={{ color: iconColor, fontSize: 24 }} /> 
          <Endereco>
            <div>{endereco}</div>
            <div>{`${bairro} - ${cidade} / ${uf}`}</div>
            <div>{`CEP: ${cep}`}</div>
          </Endereco>          
        </Container>
    );
};

export default Location;