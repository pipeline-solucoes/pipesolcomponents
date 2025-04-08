import { Container } from '@mui/material';
import styled from 'styled-components';

export const CustomContainer = styled(Container)`

    margin: 0px 0px;
    width: '100%';

    @media (max-width: 600px) {
      width: calc(100% - 32px);
    }
    
    @media (min-width: 600px) and (max-width: 960px) {
      width: calc(100% - 48px);
    }
    
    @media (min-width: 960px) {
      width: calc(100% - 54px);
    }

    @media (min-width: 1280px) {
      width: 1200px;
    }
`;

export const ContainerRedeSocialHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; 
  margin: 16px 0px;
`

export const Bar = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['background_color'].includes(prop), })
<{background_color: string;}>`  

  display: flex;    
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  background-color: ${props =>props.background_color};
  width: 100%;
`;