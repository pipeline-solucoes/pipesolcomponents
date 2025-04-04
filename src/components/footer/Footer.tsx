import React from 'react';
import { Box, Container, Stack} from '@mui/material';
import { ContainerSafe } from '../ContainerSafe';

interface FooterProps {      
    background_color: string;               
    renderColuna01: () => React.ReactElement;
    renderColuna02?: () => React.ReactElement;
    renderColuna03?: () => React.ReactElement;
    renderColuna04?: () => React.ReactElement;
    renderCopywriter: () => React.ReactElement;
  }

const Footer: React.FC <FooterProps> =  ({background_color, renderColuna01, 
    renderColuna02, renderColuna03, renderColuna04, renderCopywriter}) => {

  return (
    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' 
        sx={{ backgroundColor: background_color, padding:'24px 0px 0px', width:'100%', height:'auto' }}>
        <ContainerSafe>
            <Stack direction="column" sx={{ gap: '32px' }}>
                <Box component="footer" sx={{ py: 4, paddingTop: '0px' }}>
                    <Container maxWidth="lg">                        
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>                
                            <Box textAlign={{ xs: 'center', md: 'left' }}>
                                {renderColuna01()}                                
                            </Box>                           
                            <Box textAlign={{ xs: 'center', md: 'left' }} 
                                display={renderColuna02 ? 'block' : 'none'} 
                                flex={renderColuna02 ? 1 : 0}>
                                {renderColuna02 && renderColuna02()}                                 
                            </Box>
                            <Box textAlign={{ xs: 'center', md: 'left' }} 
                                display={renderColuna03 ? 'block' : 'none'} 
                                flex={renderColuna03 ? 1 : 0}>
                                {renderColuna03 && renderColuna03()} 
                            </Box>                            
                            <Box textAlign={{ xs: 'center', md: 'left' }} 
                                display={renderColuna04 ? 'block' : 'none'} 
                                flex={renderColuna04 ? 1 : 0}>
                                {renderColuna04 && renderColuna04()}    
                            </Box>
                        </Stack>
                    </Container>
                </Box>
                <Box display='flex' flexDirection="row" alignItems="center" justifyContent="center">
                 {renderCopywriter()}
                </Box>
            </Stack>
        </ContainerSafe>
    </Box>
  );
};

export default Footer;
