import React from 'react';
import { HomeHero } from '@/components/home/HomeHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DarkSection } from '@/components/ui/DarkSection';
import { colors, pastelIconColors } from '@/lib/design-system';

export default function Home() {
  const brandSwatches = [
    { name: 'Primary Teal', hex: colors.primaryTeal, textDark: false },
    { name: 'Primary Dark', hex: colors.primaryDark, textDark: false },
    { name: 'Gold / Accent', hex: colors.accentGold, textDark: true },
    { name: 'Leaf Green', hex: colors.leafGreen, textDark: false },
    { name: 'Ink', hex: colors.ink, textDark: false },
    { name: 'Navy', hex: colors.navy, textDark: false },
    { name: 'Navy Card', hex: colors.navyCard, textDark: false },
    { name: 'Navy Border', hex: colors.navyBorder, textDark: false },
    { name: 'Paper', hex: colors.paper, textDark: true },
    { name: 'Line', hex: colors.line, textDark: true },
    { name: 'Muted', hex: colors.muted, textDark: false },
  ];

  const pastelSwatches = [
    { name: 'Leaf Pastel', hex: pastelIconColors.leaf, variant: 'leaf' as const },
    { name: 'Teal Pastel', hex: pastelIconColors.teal, variant: 'teal' as const },
    { name: 'Gold Pastel', hex: pastelIconColors.gold, variant: 'gold' as const },
    { name: 'Purple Pastel', hex: pastelIconColors.purple, variant: 'purple' as const },
    { name: 'Rose Pastel', hex: pastelIconColors.rose, variant: 'rose' as const },
  ];

  return (
    <main>
      {/* 1. HOME HERO SECTION & STAT BAR */}
      <HomeHero />

      {/* 2. REUSABLE COMPONENT & DESIGN SYSTEM SHOWCASE */}
      <section className="section-standard">
        <Container>
          <SectionHeading
            eyebrow="Reusable Architecture"
            eyebrowVariant="teal"
            title={
              <>
                Building Blocks of <span className="headline-gradient">Digital Chautari</span>
              </>
            }
            description="Our modular component library provides responsive, high-performance UI primitives across the entire application."
          />

          {/* Cards & Micro-interactions Grid */}
          <div className="grid-standard" style={{ marginBottom: '48px' }}>
            <Card>
              <IconBox variant="teal" style={{ marginBottom: '16px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m9 8 6 4-6 4Z" />
                </svg>
              </IconBox>
              <h3 style={{ marginBottom: '8px' }}>Interactive Cards</h3>
              <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
                1px #E7E5DF border, 22px padding, 12px radius, and smooth -4.5px translateY hover elevation.
              </p>
              <Badge variant="teal">12px Radius • 22px Padding</Badge>
            </Card>

            <Card>
              <IconBox variant="gold" style={{ marginBottom: '16px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </IconBox>
              <h3 style={{ marginBottom: '8px' }}>Component Library</h3>
              <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
                Pre-built SectionHeading, PageHero, StatBar, Button, Badge, and DarkSection primitives.
              </p>
              <Badge variant="gold">Zero CSS Bloat</Badge>
            </Card>

            <Card>
              <IconBox variant="leaf" style={{ marginBottom: '16px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </IconBox>
              <h3 style={{ marginBottom: '8px' }}>Typography & Hierarchy</h3>
              <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
                Headings powered by <strong>Sora</strong> (600/700/800) and body copy powered by <strong>Inter</strong> (400/500/600).
              </p>
              <Badge variant="leaf">Next.js Font Optimization</Badge>
            </Card>
          </div>
        </Container>
      </section>

      {/* 3. DARK SECTION PRIMITIVE DEMO */}
      <DarkSection>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <Badge variant="gold" style={{ marginBottom: '12px' }}>
              DarkSection Primitive
            </Badge>
            <h3 style={{ color: '#FFFFFF', fontSize: '24px', marginBottom: '8px' }}>
              Engineered for Enterprise Reliability in Nepal
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '15px', maxWidth: '580px' }}>
              Reusable navy container with #0B1220 background and isolated borders for high-impact CTA sections and dark features.
            </p>
          </div>
          <Button href="/contact" variant="primary">
            Schedule a Consultation →
          </Button>
        </div>
      </DarkSection>

      {/* 4. DESIGN TOKENS PALETTE INSPECTION */}
      <section className="section-standard">
        <Container>
          <SectionHeading
            eyebrow="Design Tokens"
            eyebrowVariant="leaf"
            title="Palette & Typography Token Inspection"
            description="Centralized color specifications and 5 pastel icon variants configured according to assignment design tokens."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
              gap: 'var(--grid-gap)',
              marginBottom: '40px',
            }}
          >
            {brandSwatches.map((color) => (
              <div
                key={color.hex}
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-line)',
                  borderRadius: 'var(--radius-card)',
                  overflow: 'hidden',
                  padding: '12px',
                }}
              >
                <div
                  style={{
                    backgroundColor: color.hex,
                    height: '56px',
                    borderRadius: '8px',
                    marginBottom: '10px',
                    border: color.hex === colors.paper ? '1px solid var(--color-line)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: color.textDark ? '#101826' : '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '13px',
                  }}
                >
                  {color.hex}
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)' }}>{color.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--color-muted)' }}>{color.hex}</div>
              </div>
            ))}
          </div>

          {/* Pastel Swatches */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
              gap: 'var(--grid-gap)',
            }}
          >
            {pastelSwatches.map((pastel) => (
              <Card key={pastel.hex} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px' }}>
                <IconBox variant={pastel.variant}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </IconBox>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>{pastel.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-muted)' }}>{pastel.hex}</div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
