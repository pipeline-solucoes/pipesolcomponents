import React from 'react';
import styled from 'styled-components';
import { Box, Stack } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SpanBody1 from '../text/SpanBody1';
import SpanBody2 from '../text/SpanBody2';

interface TestimonialCardProps {
  children: React.ReactNode;
  name: string;
  socialMedia: string;
  background_color?: string;
  color: string;
  color_icon: string;
  height: string;
  width: string;
  color_boxshadow?: string;
}

const StyledStack = styled(Stack)<{$background_color?: string, 
  $color_boxshadow?: string, height: string, width: string}>` 
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 4px 8px ${(props) => props.$color_boxshadow ?? "#00000000"};
  background-color: ${(props) => props.$background_color ?? "#00000000"};
  width: ${(props) => props.width };
  height: ${(props) => props.height };
  gap: 16px;
`;

const QuoteIcon = styled(FormatQuoteIcon)<{$color: string}>`
  color: ${(props) => props.$color};
  font-size: 40px;
  margin-right: 10px;
`;
  
const TestimonialCard: React.FC<TestimonialCardProps> = ({ children, name, socialMedia, 
  background_color, color, color_icon, color_boxshadow, height,  width}) => {
  return (
    <StyledStack $background_color={background_color} $color_boxshadow={color_boxshadow} 
      width={width} height={height}> 
      <Box>
        <QuoteIcon $color={color_icon}></QuoteIcon>
      </Box>     
      <Box flex={1}>
        {children}
      </Box>
      <Box>
        <Stack direction='column' justifyContent="center">
          <SpanBody2 color={color}>{name}</SpanBody2>
          <SpanBody1 color={color}>{socialMedia}</SpanBody1>
        </Stack>
      </Box>      
    </StyledStack>
  );
};

export default TestimonialCard;