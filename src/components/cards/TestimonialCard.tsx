import React from 'react';
import { styled } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { StyledSpanBody1, StyledSpanBody2 } from '../text/SpanStyled';

interface TestimonialCardProps {  
  background_color?: string;
  color: string;
  color_icon: string;
  height: string;
  width: string;
  color_boxshadow?: string;
  children: React.ReactNode;
  name: string;
  socialMedia: string;
}

interface ContainerStyledProps {
  color_boxshadow: string;
  background_color: string;
  width: string;
  height: string;
}

export const ContainerStyled = styled('div', {
  shouldForwardProp: (prop) =>
    !['color_boxshadow', 'background_color', 'width', 'height'].includes(prop as string),
})<ContainerStyledProps>(({ color_boxshadow, background_color, width, height }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Centraliza os itens horizontalmente
  justifyContent: 'center', // Centraliza os itens verticalmente
  margin: '20px auto',
  padding: '20px',
  boxShadow: `0 4px 8px ${color_boxshadow}`, // Corrigido para usar camelCase
  backgroundColor: background_color, // Corrigido para usar camelCase
  width: width,
  height: height,
  gap: '16px',
}));

const ContentFooterStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
  justifyContent: 'center', 
});

const ContentMessageStyled = styled('div')({
  flex: '1',
});


const QuoteIcon = styled(FormatQuoteIcon, {
  shouldForwardProp: (prop) => !['$color'].includes(prop as string),
})<{ $color: string }>(({ $color }) => ({
  color: $color,
  fontSize: '40px',
  marginRight: '10px',
}));

  
const TestimonialCard: React.FC<TestimonialCardProps> = ({ children, name, socialMedia, 
  background_color, color, color_icon, color_boxshadow, height,  width}) => {

  const card_background_color: string = background_color ?? "transparent";
  const card_color_boxshadow : string = color_boxshadow ?? 'transparent';

  return (
    <ContainerStyled background_color={card_background_color} color_boxshadow={card_color_boxshadow} 
      width={width} height={height}> 
      <QuoteIcon $color={color_icon}></QuoteIcon>         
      <ContentMessageStyled>
        {children}
      </ContentMessageStyled>
      <ContentFooterStyled>        
        <StyledSpanBody2 text_color={color}>{name}</StyledSpanBody2>
        {socialMedia && <StyledSpanBody1 text_color={color}>{socialMedia}</StyledSpanBody1>}
      </ContentFooterStyled>      
    </ContainerStyled>
  );
};

export default TestimonialCard;