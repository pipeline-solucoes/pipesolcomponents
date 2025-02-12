import { Box, Stack } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Area = styled.div`       
  height: 100%; 
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;       
  align-items: center;
`;

const AreaMenu = styled.div`
    width: 100%;                          
`;

interface AreaBannerMenuTitleImageProps {
  renderMenu: () => React.ReactElement;
  renderTitle: () => React.ReactElement;
  image: StaticImageData;  
  altimage: string;
}

const AreaBannerMenuTitleImage: React.FC<AreaBannerMenuTitleImageProps> = ({ renderMenu, renderTitle, image, altimage }) => {  

  return (    
    <Area>
      <AreaMenu>
        {renderMenu()}
      </AreaMenu>
      <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' spacing={4}>                   
        <Box flex={1}>
          {renderTitle()}
        </Box>
        <Box flex={1}>
          <Image
            src={image} 
            alt={altimage}
            style={{ objectFit: 'cover', objectPosition: 'center' }}           
            quality={100} 
            priority
          />
        </Box>
      </Stack>          
    </Area> 
  );
};

export default AreaBannerMenuTitleImage;