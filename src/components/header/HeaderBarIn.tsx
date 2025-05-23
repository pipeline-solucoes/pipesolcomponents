'use client';
import { Box, styled } from '@mui/material';
import React from 'react';

const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    !['height_xs', 'height_sm', 'height_md', 'height_lg', 'height_xl', 'background_color', 'border_radius'].includes(prop as string),
})<{
  height_xs: string;
  height_sm: string;
  height_md: string;
  height_lg: string;
  height_xl: string;
  background_color: string;
  border_radius: string;
}>(({ theme, height_xs, height_sm, height_md, height_lg, height_xl, background_color, border_radius }) => ({
  
  width: '100%',
  backgroundColor: background_color,
  borderRadius: border_radius,
  position: 'relative',

  [theme.breakpoints.between(0, 'sm')]: {
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

const BarWrapper = styled(Box, {
  shouldForwardProp: (prop) =>
    !['top'].includes(prop as string),
})<{top: string;}>(({ top }) => ({

  position: 'absolute',
  top: top,
  left: 0,
  right: 0,
  zIndex: 2,
}));

interface HeaderBarInProps {
  height_xs?: string;
  height_sm?: string;
  height_md?: string;
  height_lg?: string;
  height_xl?: string;
  background_color: string;
  border_radius?: string;
  top_bar: string;
  renderBar: () => React.ReactElement;
  renderBanner: () => React.ReactElement;
}

const HeaderBarIn: React.FC<HeaderBarInProps> = ({
  renderBar,
  renderBanner,
  height_xs = "880px",
  height_sm = "680px",
  height_md = "680px",
  height_lg = "680px",
  height_xl = "680px",
  background_color,
  border_radius = '0px',
  top_bar = '10px'
}) => {
  return (
    <Container
      height_xs={height_xs}
      height_sm={height_sm}
      height_md={height_md}
      height_lg={height_lg}
      height_xl={height_xl}
      background_color={background_color}
      border_radius={border_radius}      
    >
      <BarWrapper top={top_bar}>
        {renderBar()}
      </BarWrapper>

      {renderBanner()}
    </Container>
  );
};

export default HeaderBarIn;
