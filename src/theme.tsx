// theme.tsx
import { createGlobalStyle } from 'styled-components';
import { createTheme } from '@mui/material/styles';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    padding: ${props => props.theme.spacing(4)}px;    
  }
`;

// Definindo o tema personalizado
const themePS = createTheme({
  breakpoints: { 
    values: { 
      xs: 0, // Extra small devices (phones) 
      sm: 600, // Small devices (tablets) 
      md: 960, // Medium devices (desktops) 
      lg: 1280, // Large devices (large desktops) 
      xl: 1920, // Extra large devices (extra large desktops) 
    }, 
  },  
  shape: { 
    borderRadius: 8,  
  },
  palette: {
    primary: {
      main: '#4a90e2', // Azul personalizado
    },
    secondary: {
      main: '#d32f2f', // Vermelho personalizado
    },
    text: {
      primary: '#333',
      secondary: '#666',
      disabled: '#999',
    }, 
    background: {
      default: '#f5f5f5',
      paper: '#f5f5f5',
    },
    info: {
      main: '#4a90e2',
    },
    error: {
      main: '#4a90e2',
    }     
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { 
      fontSize: '2.5rem', // Desktop     
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,
      margin: 0,
      fontStyle: 'normal', 
      '@media (max-width:600px)': {
        fontSize: '48px', // Mobile
      },
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '40px', // Tablet
      },
    },
    h2: {
      fontSize: '2rem', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,
      margin: 0,
      fontStyle: 'normal',
      '@media (max-width:600px)': {
        fontSize: '1.25rem', // Mobile
      },
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '1.75rem', // Tablet
      },
    },
    h3: {
      fontSize: '2rem', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,
      margin: 0,
      fontStyle: 'normal',
      '@media (max-width:600px)': {
        fontSize: '1.25rem', // Mobile
      },
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '1.75rem', // Tablet
      },
    },
    h4: {
      fontSize: '2rem', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,
      margin: 0,
      fontStyle: 'normal',
      '@media (max-width:600px)': {
        fontSize: '1.25rem', // Mobile
      },
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '1.75rem', // Tablet
      },
    },
    body1: { //Normal
      fontSize: '1rem', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,      
      fontStyle: 'normal',
      '@media (max-width:600px)': {
        fontSize: '0.875rem', // Mobile
      },
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '0.95rem', // Tablet
      },
    },
    body2: { //Destaque
      fontSize: '1rem', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 600,     
      fontStyle: 'normal',
      '@media (max-width:600px)': {
        fontSize: '0.875rem', // Mobile
      },
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '0.95rem', // Tablet
      },
    },
  },
  spacing: 8,
});

export { themePS, GlobalStyle };