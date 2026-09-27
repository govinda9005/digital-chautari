import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Badge } from '@/components/ui/Badge';
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
    <main style={{ paddingBottom: '80px' }}>

      {/* Hero / Header Section */}
      <section className="section-hero">
        <Container>
          <div style={{ maxWidth: '820px' }}>
            <Badge variant="gold" style={{ marginBottom: '16px' }}>
              Design Tokens & Architecture Verification
            </Badge>
            <h1 style={{ marginBottom: '20px' }}>
              Creative Technology <span className="headline-gradient">Engineered for Nepal</span> & Beyond
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--color-muted)', lineHeight: '1.6', marginBottom: '28px' }}>
              Welcome to the foundation of the Digital Chautari web platform. All design tokens, typography scales,
              curated color palettes, responsive containers, and reusable UI primitives are now configured and ready.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Button variant="primary">
                Primary Button (#0F9488)
              </Button>
              <Button variant="secondary">
                Secondary Button (White)
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Foundation Verification Grid */}
      <section className="section-standard" style={{ borderTop: '1px solid var(--color-line)' }}>
        <Container>
          <div style={{ marginBottom: '32px' }}>
            <h2>1. Centralized Brand Colors</h2>
            <p className="text-muted" style={{ marginTop: '6px' }}>
              Exact color specifications defined in CSS custom properties and TypeScript constants.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: 'var(--grid-gap)',
              marginBottom: '48px',
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
                    height: '64px',
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
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-ink)' }}>{color.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--color-muted)' }}>{color.hex}</div>
              </div>
            ))}
          </div>

          {/* Pastel Icon Chips */}
          <div style={{ marginBottom: '32px' }}>
            <h2>2. Pastel Icon Backgrounds & Icon Chips</h2>
            <p className="text-muted" style={{ marginTop: '6px' }}>
              Reusable 10px radius pastel chips for card iconography.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 'var(--grid-gap)',
              marginBottom: '48px',
            }}
          >
            {pastelSwatches.map((pastel) => (
              <Card key={pastel.hex} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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

          {/* Cards & Elevation Micro-interactions */}
          <div style={{ marginBottom: '32px' }}>
            <h2>3. Interactive Cards & Hover Elevation</h2>
            <p className="text-muted" style={{ marginTop: '6px' }}>
              1px solid #E7E5DF border, 22px padding, 12px radius, and -4.5px translateY hover effect.
            </p>
          </div>

          <div className="grid-standard" style={{ marginBottom: '48px' }}>
            <Card>
              <IconBox variant="teal" style={{ marginBottom: '16px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m9 8 6 4-6 4Z" />
                </svg>
              </IconBox>
              <h3 style={{ marginBottom: '8px' }}>Standard Card (Light)</h3>
              <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
                Hover over this card to verify the smooth translateY(-4.5px) micro-interaction and soft 0 16px 30px shadow.
              </p>
              <Badge variant="teal">12px Radius • 22px Padding</Badge>
            </Card>

            <Card variant="navy">
              <IconBox variant="gold" style={{ marginBottom: '16px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </IconBox>
              <h3 style={{ color: 'var(--color-paper)', marginBottom: '8px' }}>Navy Card Theme</h3>
              <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '16px' }}>
                Designed for dark sections (#101D2B) with 1px #223140 border and custom deep elevation.
              </p>
              <Badge variant="gold">Navy Token Variant</Badge>
            </Card>

            <Card>
              <IconBox variant="leaf" style={{ marginBottom: '16px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </IconBox>
              <h3 style={{ marginBottom: '8px' }}>Typography & Hierarchy</h3>
              <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
                Headings powered by <strong>Sora</strong> (600, 700, 800) and body copy powered by <strong>Inter</strong> (400, 500, 600).
              </p>
              <Badge variant="leaf">Next.js Font Optimization</Badge>
            </Card>
          </div>

          {/* Typography Scale Table */}
          <div style={{ marginBottom: '32px' }}>
            <h2>4. Typography System Verification</h2>
            <p className="text-muted" style={{ marginTop: '6px' }}>
              Base 16px size, 1.5 line height, #101826 body color.
            </p>
          </div>

          <Card style={{ padding: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--color-line)', paddingBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-headings)', fontSize: '28px', fontWeight: 800 }}>
                  Sora 800 — Primary Display H1
                </span>
                <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>Clamp (2rem – 3.25rem)</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--color-line)', paddingBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-headings)', fontSize: '22px', fontWeight: 700 }}>
                  Sora 700 — Section Subtitle H2
                </span>
                <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>Clamp (1.6rem – 2.25rem)</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--color-line)', paddingBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-headings)', fontSize: '18px', fontWeight: 600 }}>
                  Sora 600 — Component & Card Title H3
                </span>
                <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>Clamp (1.25rem – 1.5rem)</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 400, color: 'var(--color-ink)' }}>
                  Inter 400 / 500 / 600 — Standard Body Text (16px base, 1.5 line height, #101826)
                </span>
                <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>16px / 1.5 / #101826</span>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </main>
  );
}
