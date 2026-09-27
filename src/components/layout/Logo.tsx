import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
}

export function Logo({
  variant = 'light',
  showTagline = true,
  className = '',
}: LogoProps) {
  const isDark = variant === 'dark';

  return (
    <Link
      href="/"
      className={`logo-link ${className}`.trim()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
      }}
      aria-label="Digital Chautari Home"
    >
      {/* Rounded Square DC Mark with Teal Gradient */}
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, var(--color-primary-teal) 0%, var(--color-primary-dark) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontFamily: 'var(--font-headings)',
          fontWeight: 800,
          fontSize: '17px',
          letterSpacing: '-0.04em',
          boxShadow: '0 4px 12px -2px rgba(15, 148, 136, 0.35)',
          flexShrink: 0,
        }}
      >
        DC
      </div>

      {/* Wordmark and Tagline */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span
          style={{
            fontFamily: 'var(--font-headings)',
            fontWeight: 700,
            fontSize: '17px',
            letterSpacing: '-0.02em',
            color: isDark ? '#FFFFFF' : 'var(--color-ink)',
            transition: 'color 0.2s ease',
          }}
        >
          Digital Chautari
        </span>
        {showTagline && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 500,
              color: isDark ? '#94A3B8' : 'var(--color-muted)',
              letterSpacing: '0.01em',
              marginTop: '2px',
            }}
          >
            Creative Tech • Kathmandu
          </span>
        )}
      </div>
    </Link>
  );
}
