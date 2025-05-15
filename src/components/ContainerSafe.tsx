import { styled } from '@mui/material/styles';

export const ContainerSafe = styled('div')(({ theme }) => ({
  margin: '48px 0px',

  // Breakpoints definidos utilizando o tema
  [theme.breakpoints.down('sm')]: {
    // Para telas menores que 600px
    width: 'calc(100% - 32px)',
  },
  [theme.breakpoints.up('sm')]: {
    // Para telas maiores que 600px
    width: 'calc(100% - 48px)',
  },
  [theme.breakpoints.up('md')]: {
    // Para telas maiores que 960px
    width: 'calc(100% - 54px)',
  },
  [theme.breakpoints.up('lg')]: {
    // Para telas maiores que 1280px
    width: '1200px',
  },
  [theme.breakpoints.up('xl')]: {
    // Para telas maiores que 1920px
    width: '1200px',
  },
}));

export const ContainerSafeSemMargem = styled('div')(({ theme }) => ({
  margin: '0px 0px',
  zIndex: 1,

  // Breakpoints para diferentes larguras de tela
  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 32px)', // Menor que 600px
  },
  [theme.breakpoints.up('sm')]: {
    width: 'calc(100% - 48px)', // Entre 600px e 960px
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% - 54px)', // Entre 960px e 1280px
  },
  [theme.breakpoints.up('lg')]: {
    width: '1200px', // Entre 1280px e 1920px
  },
  [theme.breakpoints.up('xl')]: {
    width: '1200px', // Acima de 1920px
  },
}));

export const ContainerSafeSection = styled('div', {
  shouldForwardProp: (prop) =>
    !['border_radius', 'background_color'].includes(prop as string),
})<{
  border_radius: string;
  background_color: string;    
}>(({ theme, border_radius, background_color }) => ({
    
  margin: '48px 0px',
  height: '100%',
  gap: '24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  borderRadius: border_radius,    
  backgroundColor: background_color, 

  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 32px)',
  },
  [theme.breakpoints.up('sm')]: {
    width: 'calc(100% - 48px)',
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% - 54px)',
  },
  [theme.breakpoints.up('lg')]: {
    width: '1200px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '1200px',
  },
}));