import { styled } from '@mui/material/styles';

//Usado para criar a area no bannner com 1 coluna alinhada ao centro.
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

//Usado para criar a area no bannner com 1 coluna alinhada a esquerda.
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

//Usado para criar a area no banner com duas colunas. 50% cada coluna.
//Para dispositivos menores será exibido 2 linhas.
export const ContentBanner2Columns = styled('div')(({ theme }) => ({
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  gridTemplateRows: '1fr 1fr', // Padrão (xs < 600px)

  [theme.breakpoints.up('md')]: {
    gridTemplateRows: 'unset', // Remover gridTemplateRows para não conflitar
    gridTemplateColumns: '50% 50%',
  },
}));
