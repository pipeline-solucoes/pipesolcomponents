
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

export const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  margin: '0px',
  padding: '0px',
  width: '100%',

  [theme.breakpoints.down('sm')]: {
    // Máximo de 600px
    width: 'calc(100% - 32px)',
  },

  [theme.breakpoints.between('sm', 'md')]: {
    // Entre 601px e 960px
    width: 'calc(100% - 48px)',
  },

  [theme.breakpoints.up('md')]: {
    // A partir de 960px
    width: 'calc(100% - 54px)',
  },

  [theme.breakpoints.up('lg')]: {
    // A partir de 1280px
    width: '1200px',
  },
}));

export const ContainerRedeSocialHorizontal = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center', 
  margin: '16px 0px',
});


interface BarProps {
  background_color: string;
}

export const Bar = styled('div', {
  shouldForwardProp: (prop) => !['background_color'].includes(prop as string),
})<BarProps>(({ background_color }) => ({
  display: 'flex',
  flexDirection: 'column', // Layout flex vertical
  alignItems: 'center', // Centraliza horizontalmente
  justifyContent: 'center', // Centraliza verticalmente
  backgroundColor: background_color, // Define a cor de fundo
  width: '100%', // Largura total
}));