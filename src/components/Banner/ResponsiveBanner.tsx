import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { ContainerSafeSemMargem } from '../ContainerSafe';
import { styled } from '@mui/material/styles';

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.only('xs')]: {
    height: '800px',
  },
  [theme.breakpoints.up('sm')]: {
    height: '600px',
  },
}));

interface BannerSources {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface BannerProps {
  srcSet: BannerSources;
  children: React.ReactNode;
}

const ResponsiveBanner: React.FC<BannerProps> = ({ srcSet, children }) => {
  const theme = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    if (img.complete) {
      setIsLoaded(true);
    } else {
      const handleLoad = () => setIsLoaded(true);
      img.addEventListener('load', handleLoad);
      return () => img.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <Container>
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            color: '#ededed',
            fontSize: '1.2rem',
          }}
        >
          Carregando imagem...
        </div>
      )}

      <picture
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',          
        }}
      >
        <source
          media={`(min-width: ${theme.breakpoints.values.xs}px) and (max-width: ${theme.breakpoints.values.sm - 1}px)`}
          srcSet={srcSet.xs}
        />
        <source
          media={`(min-width: ${theme.breakpoints.values.sm}px) and (max-width: ${theme.breakpoints.values.md - 1}px)`}
          srcSet={srcSet.sm}
        />
        <source
          media={`(min-width: ${theme.breakpoints.values.md}px) and (max-width: ${theme.breakpoints.values.lg - 1}px)`}
          srcSet={srcSet.md}
        />
        <source
          media={`(min-width: ${theme.breakpoints.values.lg}px) and (max-width: ${theme.breakpoints.values.xl - 1}px)`}
          srcSet={srcSet.lg}
        />
        <img
          ref={imgRef}
          src={srcSet.xl}
          alt="Banner"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',            
            display: isLoaded ? 'block' : 'none',
          }}
        />
      </picture>

      {isLoaded && (
        <ContainerSafeSemMargem id="areasafebanner">
          {children}
        </ContainerSafeSemMargem>
      )}
    </Container>
  );
};

export default ResponsiveBanner;
