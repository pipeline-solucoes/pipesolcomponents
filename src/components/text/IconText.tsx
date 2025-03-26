import React from 'react';
import SpanBody1 from './SpanBody1';
import { Stack } from '@mui/material';


export interface SpanBody1Props {      
    children: React.ReactNode;
    color: string;
    renderIcon: () => React.ReactElement;     
}

const IconText: React.FC<SpanBody1Props> = ({ children, color, renderIcon }) => {            

    return(
        <Stack direction="row" justifyContent="flex-start" sx={{ flexGrow: 1, gap: '16px', width: 'fit-content' }}> 
            {renderIcon()}
            <SpanBody1 color={color}>{children}</SpanBody1>
        </Stack>
    );         
};

export default IconText;