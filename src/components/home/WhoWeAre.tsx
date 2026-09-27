import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';

export function WhoWeAre() {
  const checklist = [
    'Creative Strategy',
    'Brand Storytelling',
    'Full-Stack Engineering',
    'Health-Tech Expertise',
  ];

  const serviceTeasers = [
    {
      title: 'Digital Marketing',
      description: 'Data-informed campaigns, SEO, and paid performance to scale visibility.',
      variant: 'leaf' as const,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: 'Content Creation',
      description: 'High-impact multimedia, video production, copy, and editorial assets.',
      variant: 'gold' as const,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
        </svg>
      ),
    },
    {
      title: 'Software Development',
      description: 'Modern Next.js web applications, mobile platforms, and resilient APIs.',
      variant: 'teal' as const,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: 'Branding & Design',
      description: 'Memorable brand identities, design systems, and delightful UI/UX design.',
      variant: 'purple' as const,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-standard who-we-are-section" style={{ borderTop: '1px solid var(--color-line)' }}>
      <Container>
        <div className="who-we-are-grid">
          {/* Left Column: Brand Story & 2x2 Checklist */}
          <div className="who-we-are-left">
            <Badge variant="teal" style={{ marginBottom: '16px' }}>
              About Digital Chautari
            </Badge>

            <h2 className="who-we-are-title" style={{ marginBottom: '20px' }}>
              A Chautari where <span className="headline-gradient">ideas meet execution</span>
            </h2>

            <p className="who-we-are-paragraph text-muted" style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              Rooted in the Nepalese tradition of a <em>Chautari</em> — an open, communal space where thinkers, travellers, and leaders gather to share insights — Digital Chautari is a creative technology studio in Kathmandu engineering high-impact digital solutions for local and international markets.
            </p>

            <p className="who-we-are-paragraph text-muted" style={{ marginBottom: '28px', lineHeight: '1.7' }}>
              We bridge the gap between creative imagination and rigorous engineering. By uniting brand strategists, full-stack engineers, and product designers under one roof, we transform complex business challenges into seamless, scalable software experiences.
            </p>

            {/* 2x2 Checklist */}
            <div className="checklist-grid" style={{ marginBottom: '36px' }}>
              {checklist.map((item) => (
                <div key={item} className="checklist-item">
                  <div className="checklist-check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="checklist-label">{item}</span>
                </div>
              ))}
            </div>

            <Button href="/about" variant="primary">
              Meet the Team →
            </Button>
          </div>

          {/* Right Column: 2x2 Service Teaser Cards */}
          <div className="who-we-are-right">
            <div className="teaser-cards-grid">
              {serviceTeasers.map((service) => (
                <Card key={service.title} className="teaser-card">
                  <IconBox variant={service.variant} style={{ marginBottom: '14px' }}>
                    {service.icon}
                  </IconBox>
                  <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>{service.title}</h3>
                  <p className="text-muted" style={{ fontSize: '13px', lineHeight: '1.6', marginBottom: '12px' }}>
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--color-primary-teal)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    Learn more →
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
