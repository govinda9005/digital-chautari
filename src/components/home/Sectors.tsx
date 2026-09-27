import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconBox, PastelVariant } from '@/components/ui/IconBox';

interface SectorItem {
  name: string;
  description: string;
  variant: PastelVariant;
  icon: React.ReactNode;
}

const sectors: SectorItem[] = [
  {
    name: 'Healthcare',
    description: 'Telemedicine apps, patient scheduling, electronic health records, and home rehabilitation systems.',
    variant: 'rose',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    name: 'E-Commerce',
    description: 'High-conversion storefronts, multi-vendor marketplaces, eSewa/Khalti payment gateways, and inventory sync.',
    variant: 'gold',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    name: 'Real Estate',
    description: 'Interactive property catalogs, neighborhood mapping, agent management, and automated client lead funnels.',
    variant: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: 'Education',
    description: 'Scalable Learning Management Systems (LMS), student portals, live classroom integration, and grading tools.',
    variant: 'leaf',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    ),
  },
  {
    name: 'Tourism & Hospitality',
    description: 'Direct booking engines, Himalayan trekking logistics platforms, hotel CRMs, and immersive tour portfolios.',
    variant: 'gold',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
  },
  {
    name: 'Media & Publishing',
    description: 'High-speed editorial publishing platforms, content distribution networks, video streaming, and paywalls.',
    variant: 'purple',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8V6Z" />
      </svg>
    ),
  },
];

export function Sectors() {
  return (
    <section className="section-standard sectors-section" style={{ borderTop: '1px solid var(--color-line)' }}>
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          eyebrowVariant="teal"
          title={
            <>
              Deep expertise across <span className="headline-gradient">key sectors</span>
            </>
          }
          description="We bring domain-specific insights and battle-tested engineering architectures to industry leaders throughout Nepal and international ecosystems."
          align="center"
        />

        <div className="sectors-grid">
          {sectors.map((sector) => (
            <Card key={sector.name} className="sector-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                <IconBox variant={sector.variant}>
                  {sector.icon}
                </IconBox>
                <h3 style={{ fontSize: '18px' }}>{sector.name}</h3>
              </div>
              <p className="text-muted" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                {sector.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
