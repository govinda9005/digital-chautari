import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { IconBox } from '@/components/ui/IconBox';

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Capabilities"
        eyebrowVariant="teal"
        title={
          <>
            Strategic <span className="headline-gradient">Services & Engineering</span>
          </>
        }
        description="From Kathmandu to global markets, we design, engineer, and deploy high-performance software and cloud architectures."
      >
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button href="/contact" variant="primary">
            Start a Project →
          </Button>
          <Button href="/" variant="secondary">
            ← Return to Home
          </Button>
        </div>
      </PageHero>

      <section className="section-standard" style={{ borderTop: '1px solid var(--color-line)' }}>
        <Container>
          <Card style={{ maxWidth: '640px' }}>
            <IconBox variant="teal" style={{ marginBottom: '14px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </IconBox>
            <h3 style={{ marginBottom: '8px' }}>Services Architecture Ready</h3>
            <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
              PageHero primitive and global layout integration verified. The full interactive service catalog will be built in the upcoming services stage.
            </p>
          </Card>
        </Container>
      </section>
    </main>
  );
}
