import React from 'react';
import { Stack } from '@mui/material';
import styled from 'styled-components';

interface CardSectionProps {  
  renderTitle: () => React.ReactElement; 
  renderContent: () => React.ReactElement;
}

const StyledStack = styled(Stack)` 
    gap: 24px, 
    flexDirection: 'column',
    padding: ${props => props.theme.spacing(4, 2)},    
`;

const CardSection: React.FC<CardSectionProps> = ({renderTitle, 
  renderContent}) => {

  return (  
      <StyledStack>
        { renderTitle && renderTitle() }         
        { renderContent && renderContent() }       
      </StyledStack>                                
  );
};

export default CardSection;