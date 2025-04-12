
import { styled } from '@mui/material/styles';

const SectionStyled = styled('section', {
  shouldForwardProp: (prop) => !['background_color'].includes(prop as string),
})<{
  background_color: string;
}>(({ background_color }) => ({
  position: 'relative',
  backgroundColor: background_color,
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
  width: '100%', // Default width

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
  section_id: string; 
  background_color: string; 
  children: React.ReactNode;   
}

const Section: React.FC<SectionProps> = ({ section_id, background_color, children }) => {
  
    return (
      <SectionStyled id={section_id} background_color={background_color}>                
        <ContainerSafe>
          { children }
        </ContainerSafe>
      </SectionStyled>
    );  
};

export default Section;
