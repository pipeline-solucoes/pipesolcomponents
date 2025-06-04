'use client';

import React, { useRef, useState, useEffect } from 'react';
import { styled } from '@mui/material';

const Container = styled('div', {
  shouldForwardProp: (prop) =>
    !['background_color', 'width_card', 'flex_direction'].includes(prop as string),
})<{
  background_color: string;
  width_card: string;
  flex_direction: 'row' | 'column';
}>(({ background_color, width_card, flex_direction }) => ({
  display: 'flex',
  flexDirection: flex_direction,
  width: width_card,
  backgroundColor: background_color,
  height: 'fit-content',
  overflow: 'hidden',
  borderRadius: '20px',
}));

const VideoWrapper = styled('div', {
  shouldForwardProp: (prop) => !['width', 'height'].includes(prop as string),
})<{ width: string; height: string }>(({ width, height }) => ({
  width,
  height,
  position: 'relative',
  borderRadius: '20px',
  overflow: 'hidden',
}));

const Thumbnail = styled('div')({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const PlayButton = styled('div')({
  width: 60,
  height: 60,
  backgroundColor: 'rgba(0,0,0,0.6)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: 30,
  zIndex: 2,
});

const Content = styled('div')({
  height: 'auto',
  padding: '20px 8px',
});

interface YoutubeCardProps {
  srcYoutube: string; // ex: https://www.youtube.com/embed/VIDEO_ID
  width: string;
  height_video: string;
  border_radius?: string;
  background_color?: string;
  flex_direction: 'row' | 'column';
  children: React.ReactNode;
  lazyLoad?: boolean; // atraso no carregamento por visibilidade
  useFacade?: boolean; // atraso no clique com thumbnail
}

const getYoutubeId = (url: string) => {
  const match = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

const YoutubeCard: React.FC<YoutubeCardProps> = ({
  srcYoutube,
  width,
  height_video,
  background_color = 'transparent',
  flex_direction = 'row',
  children,
  lazyLoad = false,
  useFacade = false,
}) => {
  const [isVisible, setIsVisible] = useState(!lazyLoad);
  const [clicked, setClicked] = useState(!useFacade);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const videoId = getYoutubeId(srcYoutube);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  // Observer para lazyLoad baseado na visibilidade
  useEffect(() => {
    if (!lazyLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazyLoad]);

  const shouldLoadIframe = isVisible && clicked;

  return (
    <Container
      ref={containerRef}
      background_color={background_color}
      width_card={width}
      flex_direction={flex_direction}
    >
      <VideoWrapper width={width} height={height_video}>
        {shouldLoadIframe ? (
          <iframe
            src={srcYoutube}
            title="YouTube video player"
            style={{
              width: '100%',
              height: '100%',
              border: 0,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <Thumbnail
            style={{ backgroundImage: `url(${thumbnail})` }}
            onClick={() => setClicked(true)}
          >
            {useFacade && <PlayButton>▶</PlayButton>}
          </Thumbnail>
        )}
      </VideoWrapper>
      <Content>{children}</Content>
    </Container>
  );
};

export default YoutubeCard;


