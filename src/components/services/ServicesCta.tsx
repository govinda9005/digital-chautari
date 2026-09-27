import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function ServicesCta() {
  return (
    <section className="section-standard services-cta-section">
      <Container>
        <div className="closing-cta-panel">
          {/* Ambient glow decoration */}
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              left: '-20%',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(127, 174, 58, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <Badge
              variant="teal"
              style={{
                marginBottom: '18px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }}
            >
              Tailored Digital Strategy
            </Badge>

            <h2
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)',
                lineHeight: 1.15,
                fontWeight: 800,
                marginBottom: '18px',
                letterSpacing: '-0.03em',
              }}
            >
              Let's find the right service for you
            </h2>

            <p
              style={{
                color: '#E2E8F0',
                fontSize: '17px',
                lineHeight: '1.6',
                marginBottom: '32px',
              }}
            >
              Unsure which technology stack or marketing package matches your goals? Schedule a 30-minute discovery session with our Kathmandu leadership team.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                flexWrap: 'wrap',
              }}
            >
              <Button
                href="/contact"
                variant="primary"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-ink)',
                  borderColor: '#FFFFFF',
                  boxShadow: '0 8px 20px -4px rgba(0,0,0,0.3)',
                }}
              >
                Book a Consultation →
              </Button>
              <Button
                href="/"
                variant="secondary"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                ← Back to Home
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
