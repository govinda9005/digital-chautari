import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { IconBox } from '@/components/ui/IconBox';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story & Vision"
        eyebrowVariant="leaf"
        title={
          <>
            About <span className="headline-gradient">Digital Chautari</span>
          </>
        }
        description="A collective of creative technologists, software engineers, and designers in Kathmandu shaping high-impact digital experiences."
      >
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button href="/contact" variant="primary">
            Join Our Team →
          </Button>
          <Button href="/" variant="secondary">
            ← Return to Home
          </Button>
        </div>
      </PageHero>

      <section className="section-standard" style={{ borderTop: '1px solid var(--color-line)' }}>
        <Container>
          <Card style={{ maxWidth: '640px' }}>
            <IconBox variant="leaf" style={{ marginBottom: '14px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </IconBox>
            <h3 style={{ marginBottom: '8px' }}>About Platform Ready</h3>
            <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
              PageHero primitive and global layout integration verified. Company history, team profiles, and Kathmandu values will be introduced in the About stage.
            </p>
          </Card>
        </Container>
      </section>
    </main>
  );
}
