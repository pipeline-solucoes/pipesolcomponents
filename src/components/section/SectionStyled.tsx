import { styled } from '@mui/material/styles';

export const ContentSectionWrapStyled = styled('div', {
  shouldForwardProp: (prop) =>
    !['marginTop', 'marginBottom'].includes(prop as string),
})<{marginTop?: string; marginBottom?: string}>(({ marginTop = '0px', marginBottom = '0px' }) => ({
  width: '100%',
  height: '100%',
  gap: '24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginTop: marginTop,
  marginBottom: marginBottom
}));

export const ContentSectionWrapCenterStyled = styled('div')(() => ({
  width: '100%',
  height: '100%',
  gap: '24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const SectionTextColumnStyle = styled('div', {
  shouldForwardProp: (prop) =>
    !['textColor'].includes(prop as string),
})<{textColor: string}>(({ theme, textColor }) => ({

    width: '100%',    
    color: textColor,
    flex: '1',
    minWidth: '340px',

    // Tipografia
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.body1?.fontWeight,
    fontStyle: theme.typography.body1?.fontStyle,
    lineHeight: theme.typography.body1?.lineHeight,
    letterSpacing: theme.typography.body1?.letterSpacing,
    fontSize: theme.typography.body1?.fontSize,
    margin: theme.typography.body1?.margin,
}));

export default ContentSectionWrapStyled;