import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaVariant: 'primary' | 'secondary';
  cardVariant: 'standard' | 'navy';
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 'Rs 15,000',
    period: '/mo',
    description: 'Essential digital marketing and technical maintenance designed for emerging ventures and local businesses.',
    features: [
      'Basic SEO & Keyword Strategy',
      'Monthly Content Calendar',
      '8 Curated Social Media Graphics',
      'Bi-weekly Performance Analytics',
      'Standard Email & Chat Support',
    ],
    ctaText: 'Get Started',
    ctaVariant: 'secondary',
    cardVariant: 'standard',
  },
  {
    name: 'Professional',
    price: 'Rs 45,000',
    period: '/mo',
    badge: 'Most Popular',
    isPopular: true,
    description: 'Comprehensive software development, multimedia video production, and aggressive growth marketing for scaling brands.',
    features: [
      'Full-Funnel Digital Marketing & SEO',
      'Next.js Web App Updates & Maintenance',
      '16 Multimedia Video Reels & Graphics',
      'Paid Ads Campaign Management (Meta/Google)',
      'Dedicated Account Manager in Kathmandu',
      'Weekly Progress Sprints & Analytics',
      'Priority Response & Bug Resolution',
    ],
    ctaText: 'Start Professional →',
    ctaVariant: 'primary',
    cardVariant: 'navy',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Bespoke full-stack engineering squads, dedicated software architecture, and 24/7 mission-critical SLA support.',
    features: [
      'Dedicated Engineering Squad (PM, Devs, Designer)',
      'Custom Web & Mobile App Development',
      'Cloud DevOps & High-Availability Hosting',
      'Custom API & Payment Gateway Integrations',
      'Strict Security, NDA & IP Protection',
      '99.9% Uptime & 24/7 Dedicated Support SLA',
    ],
    ctaText: 'Contact Sales →',
    ctaVariant: 'secondary',
    cardVariant: 'standard',
  },
];

export function PricingSection() {
  return (
    <section className="section-standard pricing-section" style={{ borderTop: '1px solid var(--color-line)' }}>
      <Container>
        <SectionHeading
          eyebrow="Transparent Investment"
          eyebrowVariant="teal"
          title={
            <>
              Predictable pricing for <span className="headline-gradient">every growth stage</span>
            </>
          }
          description="Choose a transparent engagement model tailored to your requirements, with zero hidden fees and direct access to Kathmandu’s premier technology squad."
          align="center"
        />

        <div className="pricing-grid">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              variant={tier.cardVariant}
              className={`pricing-card ${tier.isPopular ? 'pricing-card-popular' : ''}`}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: tier.cardVariant === 'navy' ? '#FFFFFF' : 'var(--color-ink)' }}>
                  {tier.name}
                </h3>
                {tier.badge && (
                  <Badge variant="gold" style={{ fontSize: '12px', fontWeight: 700 }}>
                    ★ {tier.badge}
                  </Badge>
                )}
              </div>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '14px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-headings)',
                    fontSize: '34px',
                    fontWeight: 800,
                    color: tier.cardVariant === 'navy' ? '#FFFFFF' : 'var(--color-primary-teal)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span style={{ fontSize: '14px', color: tier.cardVariant === 'navy' ? '#94A3B8' : 'var(--color-muted)' }}>
                    {tier.period}
                  </span>
                )}
              </div>

              <p
                style={{
                  fontSize: '13.5px',
                  lineHeight: '1.6',
                  color: tier.cardVariant === 'navy' ? '#CBD5E1' : 'var(--color-muted)',
                  marginBottom: '24px',
                  minHeight: '44px',
                }}
              >
                {tier.description}
              </p>

              {/* Checklist */}
              <div style={{ borderTop: `1px solid ${tier.cardVariant === 'navy' ? 'var(--color-navy-border)' : 'var(--color-line)'}`, paddingTop: '20px', marginBottom: '28px', flex: 1 }}>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: tier.cardVariant === 'navy' ? 'var(--color-accent-gold)' : 'var(--color-ink)',
                    marginBottom: '14px',
                    letterSpacing: '0.04em',
                  }}
                >
                  What is included:
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {tier.features.map((feature) => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px' }}>
                      <span
                        style={{
                          color: tier.cardVariant === 'navy' ? 'var(--color-primary-teal)' : 'var(--color-leaf-green)',
                          fontWeight: 800,
                          fontSize: '15px',
                          lineHeight: '1.2',
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ color: tier.cardVariant === 'navy' ? '#E2E8F0' : 'var(--color-ink)', lineHeight: '1.4' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button
                href="/contact"
                variant={tier.ctaVariant}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                {tier.ctaText}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
