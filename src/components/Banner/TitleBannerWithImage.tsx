import React from 'react';
import { styled, Typography } from '@mui/material';
import ImageCover from '../ImageCover';

export const Container = styled('div', {
  shouldForwardProp: (prop) =>
    !['width'].includes(prop as string),
})<{width: string}>(({ width }) => ({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',    
  gap: '16px',
  width: width,        
}));

interface TitleBannerWithImageProps {       
  width: string; //largura do componente
  textTitle: string; //texto do Titulo   
  textSubtitle: string; //texto do Subtitulo
  src: string; //path da imagem 
  width_image: number; //largura da imagem
  height_image: number; //largura da imagem
  children?: React.ReactNode; //adicionar os botoes CTA
}

const TitleBannerWithImage: React.FC<TitleBannerWithImageProps> = ({ 
  textTitle, textSubtitle, width, src, width_image, height_image, children }) => {  

  return (
      <Container width={width}>          
          
          <Typography variant='h1' component='h1'>{textTitle}</Typography>

          <ImageCover alt='' src={src} width={width_image} height={height_image}></ImageCover>

          <Typography variant='h2' component='h2'>{textSubtitle}</Typography>          
          
          {children}

      </Container>
  );  
    
};

export default TitleBannerWithImage;