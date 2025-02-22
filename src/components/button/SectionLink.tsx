import React from 'react';

interface SectionLinkProps {
  href: string;
  children: React.ReactNode;
}

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
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SectionLink;
