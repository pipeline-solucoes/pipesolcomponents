import React from 'react';
import Box from '@mui/material/Box';

interface LogoComponentProps {
  renderLogo: () => React.ReactElement;
}

const LogoBarraFerramentas: React.FC<LogoComponentProps> = ({ renderLogo }) => {
  return (
    <>
      {/* Logo para telas maiores */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
        {renderLogo()}
      </Box>

      {/* Logo para telas menores */}
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, mr: 1 }}>
        {renderLogo()}
      </Box>
    </>
  );
};

export default LogoBarraFerramentas;