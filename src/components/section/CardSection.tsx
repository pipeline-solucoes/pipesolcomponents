import React from 'react';
import SpanDefault from '../text/SpanDefault';
import { Stack } from '@mui/material';
import styled from 'styled-components';

interface CardSectionProps {
  description: string[];
  renderTitle?: () => React.ReactElement; 
  renderContent?: () => React.ReactElement;
}

const StyledStack = styled(Stack)` 
    gap: 24px, 
    flexDirection: 'column',
    padding: ${props => props.theme.spacing(4, 2)},    
`;

const CardSection: React.FC<CardSectionProps> = ({renderTitle, description, 
  renderContent}) => {

  return (  
      <StyledStack>
        { renderTitle && renderTitle() }
        <div>        
          {description.map((item, index) => ( 
            <p>
              <SpanDefault key={index} text={item}></SpanDefault> 
            </p>            
          ))}
        </div>     
        {renderContent && renderContent()}      
      </StyledStack>                                
  );
};

export default CardSection;