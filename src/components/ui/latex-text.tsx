import 'katex/dist/katex.min.css';
import React from 'react';
import { InlineMath } from 'react-katex';

interface LatexTextProps {
  text: string;
  className?: string;
}

export const LatexText: React.FC<LatexTextProps> = ({ text, className = '' }) => {
  // Regex pour trouver les parties entre $...$
  const parts = text.split(/(\$[^$]+\$)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          // Retirer les $ et rendre avec Katex
          const math = part.slice(1, -1);
          return <InlineMath key={index} math={math} />;
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};
