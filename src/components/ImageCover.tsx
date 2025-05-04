import React, { useState } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material';

interface ImageCoverProps {
  width: number;
  height: number;
  src: string;
  alt: string;
}

const Container = styled('div', {
  shouldForwardProp: (prop) => !['width', 'height'].includes(prop as string),
})<{ width: number; height: number }>(({ width, height }) => ({
  width: `${width}px`,
  height: `${height}px`,
  position: 'relative',
  overflow: 'hidden',
}));

const ImageCover: React.FC<ImageCoverProps> = ({ src, alt, width, height }) => {
  
  const [loaded, setLoaded] = useState(false);

  return (
    <Container width={width} height={height}>
      {!loaded && (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ededed", // loading placeholder
          }}
        />
      )}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        onError={() => {
          console.error("Erro ao carregar a imagem:", src);
        }}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          display: loaded ? "block" : "none", // só mostra após carregar
        }}
        quality={80}
      />
    </Container>
  );
};

export default ImageCover;
