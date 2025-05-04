'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const MotionButtonStyled = motion.create(
  styled('a', {
    shouldForwardProp: (prop) =>
      ![
        'background_color',
        'background_color_hover',
        'color',
        'color_hover',
        'padding',
        'border_radius',
        'border_color',
        'border_color_underline',
        'width',
        'height',
        'margin',
      ].includes(prop as string),
  })<{
    background_color: string;
    background_color_hover: string;
    color: string;
    color_hover: string;
    padding: string;
    border_radius: string;
    border_color: string;
    border_color_underline: string;
    width: string;
    height: string;
    margin: string;
  }>(({
    background_color,
    background_color_hover,
    color,
    color_hover,
    padding,
    border_radius,
    border_color,
    border_color_underline,
    width,
    height,
    margin,
  }) => ({
    width: width,
    height: height,
    cursor: 'pointer',
    textDecoration: 'none',
    textTransform: 'none',
    textAlign: 'center',
    boxShadow: 'none',
    backgroundColor: background_color,
    color: color,
    border: `1px solid ${border_color}`,
    borderRadius: border_radius,
    padding: padding,
    margin: margin,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      backgroundColor: background_color_hover,
      borderBottom: `1px solid ${border_color_underline}`,
      color: color_hover,
    },
  }))
);

interface NavigationButtonProps {
  url: string;
  aria_label: string;
  background_color?: string;
  background_color_hover?: string;
  color: string;
  color_hover?: string;
  border_color?: string;
  border_radius?: string;
  text_decoration: 'none' | 'underline';
  layout: 'button' | 'link';
  width: string;
  height?: string;
  margin?: string;
  children: React.ReactNode;
}

const NavigationButtonMotion: React.FC<NavigationButtonProps> = ({
  url,
  aria_label,
  background_color,
  background_color_hover,
  color,
  color_hover,
  border_radius,
  border_color,
  text_decoration = 'none',
  layout,
  width,
  height = 'auto',
  margin,
  children,
}) => {
  const backgroundColor: string = background_color ?? 'transparent';
  const backgroundColorHover: string = background_color_hover ?? backgroundColor;
  const colorHover: string = color_hover ?? color;
  const borderRadius: string = border_radius ?? '0px';
  const padding: string = layout === 'button' ? '8px 24px' : '0px';

  const borderColor: string =
    text_decoration === 'underline' ? 'transparent' : border_color ?? 'transparent';
  const borderColorUnderline: string =
    text_decoration === 'underline' ? color : border_color ?? 'transparent';
  const marginButton: string = margin ?? '0px';

  const motionProps = {
    whileFocus: {
      scale: 1.1,
      transition: { type: 'spring', stiffness: 300 },
    },
    whileHover: {
      scale: 1.05,
    },
  };

  return (
    <MotionButtonStyled
      href={url}
      width={width}
      height={height}
      background_color={backgroundColor}
      background_color_hover={backgroundColorHover}
      color={color}
      color_hover={colorHover}
      border_radius={borderRadius}
      border_color={borderColor}
      border_color_underline={borderColorUnderline}
      padding={padding}
      margin={marginButton}
      aria-label={aria_label}
      target={url.startsWith('http') ? '_blank' : undefined}
      rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...motionProps}
    >
      {children}
    </MotionButtonStyled>
  );
};

export default NavigationButtonMotion;
