import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

export function AboutStory() {
  return (
    <section className="section-standard about-story-section">
      <Container>
        <div className="about-story-grid">
          {/* Left Column: Narrative */}
          <div className="about-story-left">
            <Badge variant="teal" style={{ marginBottom: '16px' }}>
              Our Origin & Philosophy
            </Badge>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw + 0.4rem, 2.5rem)', lineHeight: '1.2', marginBottom: '20px' }}>
              From a chautari to a <span className="headline-gradient">digital powerhouse</span>
            </h2>

            <p className="text-muted" style={{ fontSize: '15.5px', lineHeight: '1.75', marginBottom: '16px' }}>
              In Nepali tradition, a <em>Chautari</em> is more than a physical resting platform under the banyan tree — it is an open ecosystem of dialogue, community wisdom, and purposeful collaboration. It is where ideas cross paths and new journeys take shape.
            </p>

            <p className="text-muted" style={{ fontSize: '15.5px', lineHeight: '1.75', marginBottom: '16px' }}>
              Founded in 2025 in Kathmandu, Digital Chautari took that age-old philosophy and brought it into the digital era. We recognized that Nepal’s burgeoning tech talent was capable of delivering world-class engineering, while local businesses urgently required high-caliber digital transformation.
            </p>

            <p className="text-muted" style={{ fontSize: '15.5px', lineHeight: '1.75' }}>
              Today, we operate as a multidisciplinary creative technology studio — incubating our own proprietary ventures like Physio@Home while delivering full-stack software and growth marketing to global enterprise clients.
            </p>
          </div>

          {/* Right Column: 2x2 Alternating Stat Tiles (Teal, Navy, White, Gold) */}
          <div className="about-story-right">
            <div className="about-tiles-grid">
              {/* Tile 1: Teal */}
              <div
                className="about-tile-item"
                style={{
                  backgroundColor: 'var(--color-primary-teal)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-card)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: '0 10px 24px -6px rgba(15, 148, 136, 0.35)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-headings)', fontSize: '36px', fontWeight: 800, lineHeight: 1.1 }}>
                  2025
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, marginTop: '4px' }}>
                  Founded in Nepal
                </div>
                <div style={{ fontSize: '12px', opacity: 0.9, marginTop: '2px' }}>
                  Born with a global digital vision
                </div>
              </div>

              {/* Tile 2: Navy */}
              <div
                className="about-tile-item"
                style={{
                  backgroundColor: 'var(--color-navy-card)',
                  color: '#FFFFFF',
                  border: '1px solid var(--color-navy-border)',
                  borderRadius: 'var(--radius-card)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: '0 10px 24px -6px rgba(11, 18, 32, 0.4)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-headings)', fontSize: '36px', fontWeight: 800, lineHeight: 1.1, color: 'var(--color-accent-gold)' }}>
                  3
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, marginTop: '4px' }}>
                  Active Products
                </div>
                <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>
                  Proprietary venture ecosystem
                </div>
              </div>

              {/* Tile 3: White */}
              <div
                className="about-tile-item"
                style={{
                  backgroundColor: 'var(--color-white)',
                  color: 'var(--color-ink)',
                  border: '1px solid var(--color-line)',
                  borderRadius: 'var(--radius-card)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: '0 10px 24px -6px rgba(16, 24, 38, 0.06)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-headings)', fontSize: '28px', fontWeight: 800, lineHeight: 1.1, color: 'var(--color-primary-dark)' }}>
                  Kathmandu
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, marginTop: '4px' }}>
                  Headquarters
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-muted)', marginTop: '2px' }}>
                  Bagmati Province, Nepal
                </div>
              </div>

              {/* Tile 4: Gold */}
              <div
                className="about-tile-item"
                style={{
                  backgroundColor: 'var(--color-pastel-gold)',
                  color: '#101826',
                  border: '1px solid rgba(224, 169, 48, 0.4)',
                  borderRadius: 'var(--radius-card)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: '0 10px 24px -6px rgba(224, 169, 48, 0.2)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-headings)', fontSize: '36px', fontWeight: 800, lineHeight: 1.1, color: '#996B07' }}>
                  7+
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, marginTop: '4px', color: '#101826' }}>
                  Team Members
                </div>
                <div style={{ fontSize: '12px', color: '#785405', marginTop: '2px' }}>
                  Engineers, designers & strategists
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
