import { styled } from '@mui/material/styles';

const SectionStyled = styled('section', {
  shouldForwardProp: (prop) => !['color1', 'color2', 'color3'].includes(prop as string),
})<{
  color1: string;
  color2: string;
  color3: string;
}>(({ color1, color2, color3 }) => ({
  position: 'relative',
  background: `linear-gradient(to bottom, ${color1}, ${color2}, ${color3})`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}));

export const ContainerSafe = styled('div')(({ theme }) => ({
  margin: '48px 0px',
  height: '100%',
  gap: '24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%', // Default width for all screens

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

  interface SectionProps {   
    children: React.ReactNode;   
    color1: string;
    color2: string;
    color3: string;
    section_id: string;
  }

  const SectionGradiente: React.FC<SectionProps> = ({ children, color1, color2, color3, section_id}) => {
  
    return (
      <SectionStyled id={section_id} color1={color1} color2={color2} color3={color3}>        
        <ContainerSafe>                                   
          { children }                        
        </ContainerSafe>                     
      </SectionStyled>
    );  
};

export default SectionGradiente;
