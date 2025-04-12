import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled } from '@mui/material/styles';


export const CarouselStyled = styled(Carousel, {
  shouldForwardProp: (prop) =>
    !['width', 'height', 'margin', 'color_indicators', 'color_indicator_focus'].includes(prop as string),
})<{
  width: string;
  height: string;
  margin: string;
  color_indicators: string;
  color_indicator_focus: string;
}>(({ width, height, margin, color_indicators, color_indicator_focus }) => ({
  marginTop: margin,
  width: width,
  maxWidth: '100%',
  '& .carousel .slider-wrapper': {
    backgroundColor: '#00000000 !important',
    height: height,
  },
  '& .carousel .control-dots .dot': {
    backgroundColor: color_indicators,
  },
  '& .carousel .control-dots .dot.selected': {
    backgroundColor: color_indicator_focus,
  },
  '& .carousel .slide img': {
    objectFit: 'scale-down',
  },
  '& .carousel .control-arrow': {
    backgroundColor: color_indicators,
  },
  '& .carousel .control-arrow:hover': {
    backgroundColor: color_indicator_focus,
  },
}));

export default CarouselStyled;