import { styled } from "@mui/material/styles";

interface TitleFooterStyleProps {
  textColor: string;
}

export const TitleFooterStyle = styled('div', {
  shouldForwardProp: (prop) =>
    !['textColor'].includes(prop as string),
})<TitleFooterStyleProps>(({ theme, textColor }) => ({

    width: '100%',
    textAlign: 'left',
    color: textColor,

    // Tipografia
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.body2?.fontWeight,
    fontStyle: theme.typography.body2?.fontStyle,
    lineHeight: theme.typography.body2?.lineHeight,
    letterSpacing: theme.typography.body2?.letterSpacing,
    fontSize: theme.typography.body2?.fontSize,
    margin: theme.typography.body2?.margin,
}));

export const TitleFooterCenterToMobileStyle = styled('div', {
  shouldForwardProp: (prop) =>
    !['textColor'].includes(prop as string),
})<TitleFooterStyleProps>(({ theme, textColor }) => ({
    
  width: '100%',
  textAlign: 'center',
  color: textColor,

  // Tipografia
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.body2?.fontWeight,
  fontStyle: theme.typography.body2?.fontStyle,
  lineHeight: theme.typography.body2?.lineHeight,
  letterSpacing: theme.typography.body2?.letterSpacing,
  fontSize: theme.typography.body2?.fontSize,
  margin: theme.typography.body2?.margin,

  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  }
}));

export const ContentColFooter = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexGrow: 1,
    gap: '16px',
    width: '100%',    
}));

export const ContentColCenterToMobileFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  gap: '16px',
  width: '100%',

  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
  },
}));