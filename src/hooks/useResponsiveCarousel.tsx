import { useEffect, useState } from 'react';

export interface BreakpointsCarousel {
  desktop: number;
  desktopCards: number;
  tablet: number;
  tabletCards: number;
  mobile: number;
  mobileCards: number;
  defaultCards: number;
}

const useResponsiveCarousel = ({ customBreakpoints }: { customBreakpoints: BreakpointsCarousel }) => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100);

  useEffect(() => {
    const gap = 1; // Gap fixo entre os slides em pixels

    const updateSlidesToShow = () => {
      const width = window.innerWidth;

      if (width > customBreakpoints.desktop) {
        const cardWidth =
          (100 - (customBreakpoints.desktopCards - 1) * (gap / window.innerWidth) * 100) /
          customBreakpoints.desktopCards;
        setCenterSlidePercentage(cardWidth);
      } else if (width > customBreakpoints.tablet) {
        const cardWidth =
          (100 - (customBreakpoints.tabletCards - 1) * (gap / window.innerWidth) * 100) /
          customBreakpoints.tabletCards;
        setCenterSlidePercentage(cardWidth);
      } else if (width > customBreakpoints.mobile) {
        const cardWidth =
          (100 - (customBreakpoints.mobileCards - 1) * (gap / window.innerWidth) * 100) /
          customBreakpoints.mobileCards;
        setCenterSlidePercentage(cardWidth);
      } else {
        const cardWidth =
          (100 - (customBreakpoints.defaultCards - 1) * (gap / window.innerWidth) * 100) /
          customBreakpoints.defaultCards;
        setCenterSlidePercentage(cardWidth);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);

    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, [customBreakpoints]);

  return { centerSlidePercentage };
};

export default useResponsiveCarousel;
