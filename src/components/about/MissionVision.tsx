import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Badge } from '@/components/ui/Badge';

export function MissionVision() {
  return (
    <section className="section-standard mission-vision-section" style={{ borderTop: '1px solid var(--color-line)' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Mission Card */}
          <Card style={{ padding: '36px', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <IconBox variant="teal" style={{ width: '52px', height: '52px' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.93 4.93 4.24 4.24" />
                  <path d="m14.83 9.17 4.24-4.24" />
                  <path d="m14.83 14.83 4.24 4.24" />
                  <path d="m9.17 14.83-4.24 4.24" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </IconBox>
              <Badge variant="teal">Our Purpose</Badge>
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '14px', lineHeight: '1.2' }}>
              Our Mission
            </h3>

            <p className="text-muted" style={{ fontSize: '15.5px', lineHeight: '1.7', flex: 1 }}>
              To empower organizations across Nepal and worldwide by engineering resilient, user-first software architectures, compelling brand narratives, and data-informed growth strategies that solve real-world problems.
            </p>
          </Card>

          {/* Vision Card */}
          <Card style={{ padding: '36px', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <IconBox variant="gold" style={{ width: '52px', height: '52px' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </IconBox>
              <Badge variant="gold">Our Horizon</Badge>
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '14px', lineHeight: '1.2' }}>
              Our Vision
            </h3>

            <p className="text-muted" style={{ fontSize: '15.5px', lineHeight: '1.7', flex: 1 }}>
              To stand as South Asia’s benchmark creative technology studio — recognized internationally for cultivating homegrown engineering talent, incubating category-defining digital products, and shaping the future of digital commerce.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
