import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

export const CarouselStyled = styled(Carousel)<{$height: string, $width: string,
    $color_indicator_focus: string, $color_indicators: string, $margin: string }>`

  margin-top: ${(props) => props.$margin};
  margin-bottom: ${(props) => props.$margin}; 
  width: ${(props) => props.width}; 

  .carousel .slider-wrapper {
    background: #00000000 !important; 
    height:  ${(props) => props.$height};
  }

  .carousel .control-dots .dot {
    background-color: ${(props) => props.$color_indicators}; 
  }

  .carousel .control-dots .dot.selected {
    background-color: ${(props) => props.$color_indicator_focus};
  }

  .carousel .slide img {    
    object-fit: scale-down;
  }  

  .carousel .control-arrow {
    background: ${(props) => props.$color_indicator_focus};
  }

  .carousel .control-arrow:hover {
    background: ${(props) => props.$color_indicator_focus};
  }
`;