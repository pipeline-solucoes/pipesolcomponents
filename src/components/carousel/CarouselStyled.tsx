import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

export const CarouselStyled = styled(Carousel).withConfig({
  shouldForwardProp: (prop) =>
    !['width',
      'height',
      'margin',        
      'color_indicators',
      'color_indicator_focus'
    ].includes(prop), })
<{
  width?: string;
  height: string;
  margin: string;   
  color_indicators: string;
  color_indicator_focus: string;
}>`  
  margin-top: ${(props) => props.margin};
  width: ${(props) => props.width || 'auto'};
  max-width: 100%;

  .carousel .slider-wrapper {
    background: #00000000 !important; 
    height:  ${(props) => props.height};
  }

  .carousel .control-dots .dot {
    background-color: ${(props) => props.color_indicators}; 
  }

  .carousel .control-dots .dot.selected {
    background-color: ${(props) => props.color_indicator_focus};
  }

  .carousel .slide img {    
    object-fit: scale-down;
  }  

  .carousel .control-arrow {
    background-color: ${(props) => props.color_indicator_focus};
  }

  .carousel .control-arrow:hover {
    background-color: ${(props) => props.color_indicator_focus};
  }
`;