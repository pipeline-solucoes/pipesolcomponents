import { styled } from '@mui/material/styles';

export const ContentSectionWrapStyled = styled('div')(() => ({
  width: '100%',
  height: '100%',
  gap: '24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'center',
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

export default ContentSectionWrapStyled;