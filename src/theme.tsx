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

declare module '@mui/material/styles' {
  
  interface PaletteOptions {
    custom?: {
      backgroundSectionMain?: string;      
      backgroundSectionAlternative?: string;
      backgroundSectionHighlight?: string;

      colorSectionMain?: string;
      colorSectionAlternative?: string;
      colorSectionHighlight?: string;
    };
  }
}

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
      main: "#007E6A", // Verde Musgo
      contrastText: "#ffffff" //Branco
    },
    secondary: {
      main: '#C4A27D', // Dourado Leve
      contrastText: "#ffffff" //Branco
    },    
    text: {
      primary: '#707070',
      secondary: '#ffffff',
      disabled: '#707070',
    },       
    custom: {
      backgroundSectionMain: '#f0f8ff',
      backgroundSectionAlternative: '#ffe4e1',

      colorSectionMain:'#707070',
      colorSectionAlternative: '#707070',
    },
    info: {
      main: '#4a90e2',
    },
    error: {
      main: '#4a90e2',
    }    
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: {       
      fontSize: '58px', // Desktop     
      lineHeight: '1',
      letterSpacing: '0.01em',
      fontWeight: 600,
      margin: 0,
      fontStyle: 'normal',       
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '40px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '48px', // Mobile
      },
    },
    h2: {      
      fontSize: '16px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,
      margin: 0,      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '16px', // Tablet
      },
      fontStyle: 'normal',
      '@media (max-width:600px)': {
        fontSize: '16px', // Mobile
      },
    },
    h3: {
      fontSize: '32px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,
      margin: 0,
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '32px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '32px', // Mobile
      },
    },
    h4: {
      fontSize: '2rem', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,
      margin: 0,
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '1.75rem', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '1.25rem', // Mobile
      },
    },
    body1: { //Normal
      fontSize: '16px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,      
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '16px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '16px', // Mobile
      },
    },
    body2: { //Destaque
      fontSize: '16px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 600,     
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '16px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '16px', // Mobile
      },
    },
  },
  spacing: 8,
});

export { themePS, GlobalStyle };