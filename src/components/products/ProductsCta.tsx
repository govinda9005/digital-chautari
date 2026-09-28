import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function ProductsCta() {
  return (
    <section className="section-standard products-cta-section">
      <Container>
        <div className="closing-cta-panel">
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              right: '-15%',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(224, 169, 48, 0.25) 0%, transparent 70%)',
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
              Venture & Product Partnerships
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
              Interested in collaborating with our ventures?
            </h2>

            <p
              style={{
                color: '#E2E8F0',
                fontSize: '17px',
                lineHeight: '1.6',
                marginBottom: '32px',
              }}
            >
              Whether you are looking to integrate our proprietary platforms, co-develop digital products, or invest in our studio roadmap, we welcome discussions.
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
                Connect with Venture Team →
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
                Explore Client Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
