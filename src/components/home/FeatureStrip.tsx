import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';

interface FeatureItem {
  title: string;
  description: string;
  variant: 'leaf' | 'gold' | 'teal' | 'purple';
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: 'Growth-Driven',
    description: 'Engineered to accelerate your market traction, user engagement, and measurable business growth.',
    variant: 'leaf',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 7-8.5 8.5-5-5L2 17" />
        <path d="M16 7h6v6" />
      </svg>
    ),
  },
  {
    title: 'Creative-First',
    description: 'Distinctive visual identity, thoughtful UI/UX, and impactful storytelling that captures audience attention.',
    variant: 'gold',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 9.17 4.24-4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="m9.17 14.83-4.24 4.24" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: 'Tech-Powered',
    description: 'High-performance Next.js architectures, resilient cloud infrastructure, and modern engineering standards.',
    variant: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m9 8 6 4-6 4Z" />
      </svg>
    ),
  },
  {
    title: 'Client-Centric',
    description: 'Collaborative development, transparent communication, and dedicated long-term technical partnerships.',
    variant: 'purple',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

export function FeatureStrip() {
  return (
    <section className="section-standard feature-strip-section">
      <Container>
        <div className="feature-strip-grid">
          {features.map((feature) => (
            <Card key={feature.title} className="feature-strip-card">
              <IconBox variant={feature.variant} className="feature-icon">
                {feature.icon}
              </IconBox>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description text-muted">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
