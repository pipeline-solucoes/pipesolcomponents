import React from 'react';
import styled from 'styled-components';

interface SectionLinkProps {
  href: string;
  children: React.ReactNode;
}

const AStyled = styled.a`
   text-decoration: none;
`;

const SectionLink: React.FC<SectionLinkProps> = ({ href, children }) => {
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href); // Atualiza a URL sem recarregar a página
    }
  };

  return (
    <AStyled href={href} onClick={handleClick}>
      {children}
    </AStyled>
  );
};

export default SectionLink;
