import React from 'react';
import VideoPlayer from '../VideoPlayer';
import { styled } from '@mui/material/styles';

const Container = styled('div')(() => ({
  width: '100%',
  height: '600px',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '24px',
  alignItems: 'center',
  justifyContent: 'center',
}));

interface BannerProps {  
  src_video: string; 
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ src_video, children }) => {  

  return (
    <Container>
      {children}      
      <VideoPlayer videoSrc={src_video}></VideoPlayer>                
    </Container>    
  );
};

export default Banner;