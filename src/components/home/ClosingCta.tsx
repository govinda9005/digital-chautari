import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function ClosingCta() {
  return (
    <section className="section-standard closing-cta-section">
      <Container>
        <div className="closing-cta-panel">
          {/* Subtle background ambient overlay */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-20%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(224, 169, 48, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <Badge
              variant="gold"
              style={{
                marginBottom: '18px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }}
            >
              Start Your Collaboration
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
              Ready to build something extraordinary together?
            </h2>

            <p
              style={{
                color: '#E2E8F0',
                fontSize: '17px',
                lineHeight: '1.6',
                marginBottom: '32px',
              }}
            >
              Whether you are launching a new startup in Nepal or modernizing enterprise systems for global scale, our squad in Kathmandu is ready to accelerate your journey.
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
                Start a Project →
              </Button>
              <Button
                href="/services"
                variant="secondary"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
