import { styled } from "@mui/material";

interface StyledTextProps {
    text_color: string;
  }
  
export const StyledSpanBody1 = styled('span', {
    shouldForwardProp: (prop) =>
      !['text_color'].includes(prop as string),
  })<StyledTextProps>(({ theme, text_color }) => ({
    
    color: text_color,
    
    // Tipografia
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.body1?.fontWeight,
    fontStyle: theme.typography.body1?.fontStyle,
    lineHeight: theme.typography.body1?.lineHeight,
    letterSpacing: theme.typography.body1?.letterSpacing,
    fontSize: theme.typography.body1?.fontSize,
    margin: theme.typography.body1?.margin,
  }));

  export const StyledSpanBody2 = styled('span', {
    shouldForwardProp: (prop) =>
      !['text_color'].includes(prop as string),
  })<StyledTextProps>(({ theme, text_color }) => ({
    
    color: text_color,
    
    // Tipografia
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.body2?.fontWeight,
    fontStyle: theme.typography.body2?.fontStyle,
    lineHeight: theme.typography.body2?.lineHeight,
    letterSpacing: theme.typography.body2?.letterSpacing,
    fontSize: theme.typography.body2?.fontSize,
    margin: theme.typography.body2?.margin,
  }));  
  