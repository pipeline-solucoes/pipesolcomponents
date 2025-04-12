import { styled } from "@mui/material";
import React from "react";

type VideoPlayerProps = {
  videoSrc: string; // Caminho para o vídeo
  width?: string; // Largura do vídeo (opcional)
  height?: string; // Altura do vídeo (opcional)
  controls?: boolean; // Indica se os controles devem aparecer
  autoplay?: boolean; // Indica se o vídeo deve iniciar automaticamente
  loop?: boolean; // Indica se o vídeo deve repetir
};

const Container = styled('div')(() => ({
  textAlign: 'center', // Ajustado para usar camelCase
  width: '100%', // Ajustado para usar aspas corretas
  height: '100%', // Ajustado para usar aspas corretas
}));

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  width = '100%', 
  height = '100%',
  controls = true, 
  autoplay = false, 
  loop = false, 
}) => {
  return (
    <Container>      
      <video
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        style={{ objectFit: "cover", width: width, height: height }}
      >
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
    </Container>
  );
};

export default VideoPlayer;