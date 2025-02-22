import React from 'react';

interface SectionLinkProps {
  href: string;
  children: React.ReactNode;
}

const PageLink: React.FC<SectionLinkProps> = ({ href, children }) => {
  
  return (
    <a href={href}>
      {children}
    </a>
  );
};

export default PageLink;
