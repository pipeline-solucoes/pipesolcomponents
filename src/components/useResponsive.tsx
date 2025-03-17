import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Define os tipos para o retorno do hook
interface ResponsiveState {
    isXs: boolean; //Dispositivo Extra Pequeno - 0
    isSm: boolean; //Dispositivo Pequeno - 600
    isMd: boolean; //Dispositivo Médio - 960
    isLg: boolean; //Dispositivo Grande - 1280
    isXl: boolean; //Dispositivo Extra Grande - 1920
}

const useResponsive = (): ResponsiveState => {

    const theme = useTheme();
    
    return {
        isXs: useMediaQuery(theme.breakpoints.only('xs')),
        isSm: useMediaQuery(theme.breakpoints.only('sm')),
        isMd: useMediaQuery(theme.breakpoints.only('md')),
        isLg: useMediaQuery(theme.breakpoints.only('lg')),
        isXl: useMediaQuery(theme.breakpoints.only('xl')),
    };
};

export default useResponsive;
