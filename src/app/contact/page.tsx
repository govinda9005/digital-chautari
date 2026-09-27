import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { IconBox } from '@/components/ui/IconBox';

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Connect With Us"
        eyebrowVariant="teal"
        title={
          <>
            Let's Build Something <span className="headline-gradient">Impactful</span>
          </>
        }
        description="Whether you have a new product idea, enterprise challenge, or technical consultation in Kathmandu, Nepal, our team is ready."
      >
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </IconBox>
            <h3 style={{ marginBottom: '8px' }}>Contact Experience Ready</h3>
            <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
              PageHero primitive and form scaffolding verified. The full interactive contact form, validation, and office details will be built in the Contact stage.
            </p>
          </Card>
        </Container>
      </section>
    </main>
  );
}
