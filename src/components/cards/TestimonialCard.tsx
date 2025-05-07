import React from 'react';
import { styled } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import NavigationButton from '../button/NavigationButton';

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

const ContentFooterStyled = styled('div', {
  shouldForwardProp: (prop) =>
    !['text_color'].includes(prop as string),
})<{text_color: string}>(({ theme, text_color }) => ({

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
  justifyContent: 'center', 
  gap:'8px',
  color: text_color, 

  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.body2?.fontWeight,
  fontStyle: theme.typography.body2?.fontStyle,
  lineHeight: theme.typography.body2?.lineHeight,
  letterSpacing: theme.typography.body2?.letterSpacing,
  fontSize: theme.typography.body2?.fontSize,
  margin: theme.typography.body2?.margin,
}));

const ContentMessageStyled = styled('div')(({ theme }) => ({ 

  flex: '1',
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.body1?.fontWeight,
  fontStyle: theme.typography.body1?.fontStyle,
  lineHeight: theme.typography.body1?.lineHeight,
  letterSpacing: theme.typography.body1?.letterSpacing,
  fontSize: theme.typography.body1?.fontSize,
  margin: theme.typography.body1?.margin,
}));


const QuoteIcon = styled(FormatQuoteIcon, {
  shouldForwardProp: (prop) => !['$color'].includes(prop as string),
})<{ $color: string }>(({ $color }) => ({
  color: $color,
  fontSize: '40px',
  marginRight: '10px',
}));

interface TestimonialCardProps {  
  background_color?: string; //cor de fundo do card
  color: string; //cor do texto do depoimento
  color_icon: string; //cor do icone
  height: string; //altura do card
  width: string; //largura do card
  color_boxshadow?: string;  //cor do sombreamento do card
  name: string; //nome de quem fez o depoimento
  socialMedia?: string; //@ da rede social 
  urlSocialMedia?: string; //url da rede social
  children: React.ReactNode; //texto do depoimento - tipografia padrao body1
}
  
const TestimonialCard: React.FC<TestimonialCardProps> = ({ children, name, socialMedia, 
  background_color, color, color_icon, color_boxshadow, height,  width, urlSocialMedia}) => {

  const card_background_color: string = background_color ?? "transparent";
  const card_color_boxshadow : string = color_boxshadow ?? 'transparent';

  return (
    <ContainerStyled background_color={card_background_color} color_boxshadow={card_color_boxshadow} 
      width={width} height={height}> 
      <QuoteIcon $color={color_icon}></QuoteIcon>         
      <ContentMessageStyled>
        {children}
      </ContentMessageStyled>
      <ContentFooterStyled text_color={color}>        
        {name}
        {socialMedia && urlSocialMedia &&
         <NavigationButton 
          url={urlSocialMedia} 
          color={color} 
          layout='link' 
          aria_label={`link para ${socialMedia}`}
          width='100%'
          text_decoration='none'>
            {socialMedia}
         </NavigationButton>
        }
        
      </ContentFooterStyled>      
    </ContainerStyled>
  );
};

export default TestimonialCard;