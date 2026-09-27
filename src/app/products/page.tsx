import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { IconBox } from '@/components/ui/IconBox';

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Proprietary Innovations"
        eyebrowVariant="gold"
        title={
          <>
            Modern <span className="headline-gradient">Digital Products</span>
          </>
        }
        description="Scalable SaaS platforms, developer utilities, and modern enterprise products built from the ground up in Kathmandu, Nepal."
      >
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button href="/contact" variant="primary">
            Request Product Demo →
          </Button>
          <Button href="/" variant="secondary">
            ← Return to Home
          </Button>
        </div>
      </PageHero>

      <section className="section-standard" style={{ borderTop: '1px solid var(--color-line)' }}>
        <Container>
          <Card style={{ maxWidth: '640px' }}>
            <IconBox variant="gold" style={{ marginBottom: '14px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              </svg>
            </IconBox>
            <h3 style={{ marginBottom: '8px' }}>Product Catalog Ready</h3>
            <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
              PageHero primitive and product route scaffolding verified. Product cards and technical highlights will be built in the dedicated Products stage.
            </p>
          </Card>
        </Container>
      </section>
    </main>
  );
}
