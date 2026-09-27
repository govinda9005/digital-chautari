import React from 'react';
import { Container } from './Container';

interface DarkSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  tight?: boolean;
}

export function DarkSection({
  children,
  className = '',
  tight = false,
  ...props
}: DarkSectionProps) {
  return (
    <section
      className={`dark-section ${tight ? 'section-tight' : 'section-standard'} ${className}`.trim()}
      style={{
        backgroundColor: 'var(--color-navy)',
        color: '#FFFFFF',
        borderTop: '1px solid var(--color-navy-border)',
        borderBottom: '1px solid var(--color-navy-border)',
      }}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
