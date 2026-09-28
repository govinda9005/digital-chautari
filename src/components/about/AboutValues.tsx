import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconBox, PastelVariant } from '@/components/ui/IconBox';

interface ValueItem {
  title: string;
  description: string;
  variant: PastelVariant;
  icon: React.ReactNode;
}

const coreValues: ValueItem[] = [
  {
    title: 'Passion',
    description: 'A genuine devotion to our craft. We approach every line of code, design mockup, and marketing campaign with boundless enthusiasm.',
    variant: 'rose',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    title: 'Creativity',
    description: 'Unconventional thinking and distinctive visual aesthetics that cut through digital noise and engage audiences deeply.',
    variant: 'gold',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'Uncompromising engineering standards, rigorous automated testing, and sub-millisecond performance in every delivery.',
    variant: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: 'Collaboration',
    description: 'Embodying the true spirit of a Chautari — radical transparency, shared ownership, and empathetic client partnerships.',
    variant: 'leaf',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function AboutValues() {
  return (
    <section className="section-standard about-values-section" style={{ borderTop: '1px solid var(--color-line)' }}>
      <Container>
        <SectionHeading
          eyebrow="Guiding Principles"
          eyebrowVariant="leaf"
          title={
            <>
              The values that <span className="headline-gradient">guide our craft</span>
            </>
          }
          description="Our culture is built on four core tenets that shape how we engineer software, nurture our squad, and communicate with partners."
          align="center"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {coreValues.map((val) => (
            <Card key={val.title} style={{ padding: '28px', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <IconBox variant={val.variant} style={{ marginBottom: '18px' }}>
                {val.icon}
              </IconBox>
              <h3 style={{ fontSize: '19px', fontWeight: 700, marginBottom: '10px' }}>
                {val.title}
              </h3>
              <p className="text-muted" style={{ fontSize: '14px', lineHeight: '1.6', flex: 1 }}>
                {val.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
