import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconBox, PastelVariant } from '@/components/ui/IconBox';

interface DepartmentLine {
  title: string;
  email: string;
  description: string;
  variant: PastelVariant;
  icon: React.ReactNode;
}

const lines: DepartmentLine[] = [
  {
    title: 'Marketing',
    email: 'marketing@digitalchautari.com.np (Demo)',
    description: 'Ad campaigns, brand scaling, performance tracking, and SEO audits.',
    variant: 'leaf',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Content Studio',
    email: 'studio@digitalchautari.com.np (Demo)',
    description: 'Cinematic video production, short-form reels, and studio podcast booking.',
    variant: 'gold',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: 'Software Dev',
    email: 'dev@digitalchautari.com.np (Demo)',
    description: 'Next.js web apps, mobile apps, database architecture, and security reviews.',
    variant: 'teal',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Business Dev',
    email: 'partnerships@digitalchautari.com.np (Demo)',
    description: 'Enterprise RFP proposals, institutional alliances, and joint-venture inquiries.',
    variant: 'purple',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function DirectLines() {
  return (
    <section className="section-tight direct-lines-section" style={{ borderTop: '1px solid var(--color-line)' }}>
      <Container>
        <SectionHeading
          eyebrow="Department Directory"
          eyebrowVariant="teal"
          title={
            <>
              Reach the <span className="headline-gradient">right team</span>
            </>
          }
          description="Route your request directly to the appropriate practice leads for high-velocity resolution."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {lines.map((item) => (
            <Card key={item.title} style={{ padding: '22px', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <IconBox variant={item.variant} style={{ marginBottom: '14px' }}>
                {item.icon}
              </IconBox>
              <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px' }}>{item.title}</h3>
              <p className="text-muted" style={{ fontSize: '13px', lineHeight: '1.5', marginBottom: '14px', flex: 1 }}>
                {item.description}
              </p>
              <div style={{ borderTop: '1px solid var(--color-line)', paddingTop: '10px' }}>
                <a
                  href={`mailto:${item.email}`}
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--color-primary-teal)',
                    wordBreak: 'break-all',
                  }}
                >
                  {item.email}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
