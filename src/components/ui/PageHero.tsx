import React from 'react';
import { Container } from './Container';
import { Badge, BadgeVariant } from './Badge';

interface PageHeroProps {
  eyebrow?: string;
  eyebrowVariant?: BadgeVariant;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  eyebrowVariant = 'teal',
  title,
  description,
  children,
  className = '',
}: PageHeroProps) {
  return (
    <section className={`page-hero section-hero ${className}`.trim()}>
      <Container>
        <div style={{ maxWidth: '780px' }}>
          {eyebrow && (
            <div style={{ marginBottom: '16px' }}>
              <Badge variant={eyebrowVariant}>{eyebrow}</Badge>
            </div>
          )}

          <h1 style={{ marginBottom: '18px' }}>{title}</h1>

          {description && (
            <p
              className="text-muted"
              style={{
                fontSize: '18px',
                lineHeight: '1.6',
                marginBottom: children ? '28px' : '0',
              }}
            >
              {description}
            </p>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
}
