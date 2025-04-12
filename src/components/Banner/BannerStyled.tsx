import { styled } from '@mui/material/styles';

export const ContentBannerCenter = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  overflow: 'hidden',
  position: 'relative',
}));

export const ContentBannerLeft = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  overflow: 'hidden',
  position: 'relative',
}));
