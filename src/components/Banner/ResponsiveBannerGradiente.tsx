import React from 'react';
import { ContainerSafeSemMargem } from '../containers/ContainerSafe';
import { styled } from '@mui/material/styles';

const Container = styled('div', {
  shouldForwardProp: (prop) =>
    ![
      'height_xs', 'height_sm', 'height_md', 'height_lg', 'height_xl',
      'colorStart', 'colorMiddle', 'colorEnd',
    ].includes(prop as string),
})<{
  height_xs: string;
  height_sm: string;
  height_md: string;
  height_lg: string;
  height_xl: string;
  colorStart: string;
  colorMiddle: string;
  colorEnd: string;
}>(({ theme, height_xs, height_sm, height_md, height_lg, height_xl, colorStart, colorMiddle, colorEnd }) => ({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${colorStart}, ${colorMiddle}, ${colorEnd})`,
  transition: 'background 0.3s ease',

  [theme.breakpoints.down('sm')]: {
    height: height_xs,
  },
  [theme.breakpoints.up('sm')]: {
    height: height_sm,
  },
  [theme.breakpoints.up('md')]: {
    height: height_md,
  },
  [theme.breakpoints.up('lg')]: {
    height: height_lg,
  },
  [theme.breakpoints.up('xl')]: {
    height: height_xl,
  },
}));

interface BannerProps {
  height_xs: string;
  height_sm: string;
  height_md: string;
  height_lg: string;
  height_xl: string;
  colorStart: string;
  colorMiddle: string;
  colorEnd: string;
  children: React.ReactNode;
}

const ResponsiveBannerGradiente: React.FC<BannerProps> = ({
  height_xs, height_sm, height_md, height_lg, height_xl,
  colorStart, colorMiddle, colorEnd,
  children,
}) => {
  return (
    <Container id="ContainerResponsiveBannerGradiente" 
      height_xs={height_xs}
      height_sm={height_sm}
      height_md={height_md}
      height_lg={height_lg}
      height_xl={height_xl}
      colorStart={colorStart}
      colorMiddle={colorMiddle}
      colorEnd={colorEnd}
    >
      <ContainerSafeSemMargem id="areasafebannergradiente">
        {children}
      </ContainerSafeSemMargem>
    </Container>
  );
};

export default ResponsiveBannerGradiente;
