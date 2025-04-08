import React from 'react';
import styled from 'styled-components';
import VideoPlayer from '../VideoPlayer';

const Container = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;


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