import React from 'react';
import styled from 'styled-components';

interface SectionLinkProps {
  href: string;
  children: React.ReactNode;
}

const AStyled = styled.a`
   text-decoration: none;
`;

const PageLink: React.FC<SectionLinkProps> = ({ href, children }) => {
  
  return (
    <AStyled href={href}>
      {children}
    </AStyled>
  );
};

export default PageLink;
