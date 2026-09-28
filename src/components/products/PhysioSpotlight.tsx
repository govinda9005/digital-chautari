import React from 'react';
import { DarkSection } from '@/components/ui/DarkSection';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';

export function PhysioSpotlight() {
  const pillars = [
    {
      title: 'Verified Licensed Physiotherapists',
      desc: 'Rigorous credential checks, clinical background verification, and continuous training in modern rehabilitation techniques.',
      variant: 'teal' as const,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Zero-Commute Care at Home',
      desc: 'Eliminating the stress of Kathmandu traffic for elderly patients, post-surgery recovery, and mobility-impaired individuals.',
      variant: 'gold' as const,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: 'Digital Recovery Tracking',
      desc: 'Mobile exercise logs, pain scale tracking, and automated recovery milestones shared between patients and care teams.',
      variant: 'leaf' as const,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
  ];

  return (
    <DarkSection className="physio-spotlight-section">
      <div style={{ maxWidth: '780px', margin: '0 auto 48px auto', textAlign: 'center' }}>
        <Badge
          variant="gold"
          style={{
            marginBottom: '16px',
            backgroundColor: 'rgba(224, 169, 48, 0.2)',
            color: 'var(--color-accent-gold)',
            borderColor: 'rgba(224, 169, 48, 0.35)',
          }}
        >
          Proprietary HealthTech Spotlight
        </Badge>

        <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 3.8vw + 0.5rem, 2.75rem)', lineHeight: '1.2', marginBottom: '16px' }}>
          Physio@Home — <span className="headline-gradient">healthcare reimagined</span>
        </h2>

        <p style={{ color: '#CBD5E1', fontSize: '16.5px', lineHeight: '1.7' }}>
          Born out of a genuine need in Nepal’s healthcare infrastructure, Physio@Home solves the mobility barrier by digitizing therapy booking, progress logging, and tele-rehabilitation across the country.
        </p>
      </div>

      {/* 3 Value Pillars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {pillars.map((pillar) => (
          <Card key={pillar.title} variant="navy" style={{ padding: '24px' }}>
            <IconBox variant={pillar.variant} style={{ marginBottom: '16px' }}>
              {pillar.icon}
            </IconBox>
            <h3 style={{ color: '#FFFFFF', fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>
              {pillar.title}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '13.5px', lineHeight: '1.6' }}>
              {pillar.desc}
            </p>
          </Card>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <Button href="/contact" variant="primary">
          Explore Physio@Home Partnerships →
        </Button>
      </div>
    </DarkSection>
  );
}
