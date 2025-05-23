import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { ContainerSafeSemMargem } from '../containers/ContainerSafe';
import { styled } from '@mui/material/styles';
import { BannerResponsiveConfig } from '@/types/BannerResponsiveConfig';

const Container = styled('div', {
  shouldForwardProp: (prop) =>
    !['height_xs', 'height_sm', 'height_md', 'height_lg', 'height_xl'].includes(prop as string),
})<{  
  height_xs: string;
  height_sm: string;
  height_md: string;
  height_lg: string;
  height_xl: string;
}>(({ theme, height_xs, height_sm, height_md, height_lg, height_xl }) => ({

  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  // Breakpoints para diferentes larguras de tela
  [theme.breakpoints.down('sm')]: {
    height: height_xs, // Menor que 600px
  },
  [theme.breakpoints.up('sm')]: {
    height: height_sm, // Entre 600px e 960px
  },
  [theme.breakpoints.up('md')]: {
    height: height_md, // Entre 960px e 1280px
  },
  [theme.breakpoints.up('lg')]: {
    height: height_lg, // Entre 1280px e 1920px
  },
  [theme.breakpoints.up('xl')]: {
    height: height_xl, // Acima de 1920px
  },
}));

interface BannerSources {
  xs: BannerResponsiveConfig;
  sm: BannerResponsiveConfig;
  md: BannerResponsiveConfig;
  lg: BannerResponsiveConfig;
  xl: BannerResponsiveConfig;
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
    <Container height_xs={srcSet.xs.height} height_sm={srcSet.sm.height} 
      height_md={srcSet.md.height} height_lg={srcSet.lg.height} 
      height_xl={srcSet.xl.height}>
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
          srcSet={srcSet.xs.image}
        />
        <source
          media={`(min-width: ${theme.breakpoints.values.sm}px) and (max-width: ${theme.breakpoints.values.md - 1}px)`}
          srcSet={srcSet.sm.image}
        />
        <source
          media={`(min-width: ${theme.breakpoints.values.md}px) and (max-width: ${theme.breakpoints.values.lg - 1}px)`}
          srcSet={srcSet.md.image}
        />
        <source
          media={`(min-width: ${theme.breakpoints.values.lg}px) and (max-width: ${theme.breakpoints.values.xl - 1}px)`}
          srcSet={srcSet.lg.image}
        />
        <img
          ref={imgRef}
          src={srcSet.xl.image}
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
