import React from 'react';
import { DarkSection } from '@/components/ui/DarkSection';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';

interface TrustItem {
  title: string;
  description: string;
  variant: 'teal' | 'gold' | 'leaf' | 'purple';
  icon: React.ReactNode;
}

const trustItems: TrustItem[] = [
  {
    title: 'ISO 9001 Ready',
    description: 'Structured standard operating procedures, disciplined code review cycles, and documented QA workflows across all software releases.',
    variant: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Data Protection',
    description: 'Enterprise-grade encryption at rest and in transit, strict non-disclosure agreements (NDAs), and rigorous IP ownership protection.',
    variant: 'gold',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Global Delivery',
    description: 'Reliable engineering delivery models tailored for international clients across South Asia, Australia, North America, and Europe.',
    variant: 'leaf',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Pan-Nepal Network',
    description: 'Direct infrastructure and field operations extending across the Kathmandu Valley and all seven provinces of Nepal.',
    variant: 'purple',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" x2="9" y1="3" y2="18" />
        <line x1="15" x2="15" y1="6" y2="21" />
      </svg>
    ),
  },
];

export function QualityTrust() {
  return (
    <DarkSection className="quality-trust-section">
      <div style={{ maxWidth: '740px', margin: '0 auto 48px auto', textAlign: 'center' }}>
        <Badge
          variant="gold"
          style={{
            marginBottom: '16px',
            backgroundColor: 'rgba(224, 169, 48, 0.2)',
            color: 'var(--color-accent-gold)',
            borderColor: 'rgba(224, 169, 48, 0.35)',
          }}
        >
          Security & Compliance Standards
        </Badge>
        <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw + 0.5rem, 2.5rem)', marginBottom: '14px' }}>
          Committed to <span className="headline-gradient">quality & trust</span>
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.6' }}>
          We hold our engineering, data sovereignty, and communication standards to the highest international benchmarks.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {trustItems.map((item) => (
          <Card key={item.title} variant="navy" style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <IconBox variant={item.variant} style={{ marginBottom: '16px' }}>
              {item.icon}
            </IconBox>
            <h3 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>
              {item.title}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '13.5px', lineHeight: '1.6', flex: 1 }}>
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </DarkSection>
  );
}
