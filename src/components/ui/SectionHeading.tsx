import React from 'react';
import { Badge, BadgeVariant } from './Badge';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: BadgeVariant;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  style?: React.CSSProperties;
}

export function SectionHeading({
  eyebrow,
  eyebrowVariant = 'teal',
  title,
  description,
  align = 'left',
  className = '',
  style = {},
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`section-heading ${className}`.trim()}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '760px' : '680px',
        marginLeft: isCenter ? 'auto' : undefined,
        marginRight: isCenter ? 'auto' : undefined,
        marginBottom: '40px',
        ...style,
      }}
    >
      {eyebrow && (
        <div style={{ marginBottom: '14px' }}>
          <Badge variant={eyebrowVariant}>{eyebrow}</Badge>
        </div>
      )}

      <h2 style={{ marginBottom: description ? '14px' : '0' }}>{title}</h2>

      {description && (
        <p
          className="text-muted"
          style={{
            fontSize: '17px',
            lineHeight: '1.6',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
