import styled from 'styled-components';
import { Body1Styled } from '../Typography';

export const ItemMenuText = styled(Body1Styled)<{ color: string, color_hover: string }>`         
    color: ${props => props.color};    
                
    &:hover {                        
        color: ${props => props.color_hover};        
    }
`;