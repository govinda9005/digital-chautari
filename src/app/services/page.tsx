import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ServicesPage() {
  return (
    <div className="section-hero">
      <Container>
        <Badge variant="teal" style={{ marginBottom: '16px' }}>
          Digital Chautari Services
        </Badge>
        <h1 style={{ marginBottom: '16px' }}>
          Our <span className="headline-gradient">Services & Solutions</span>
        </h1>
        <p className="text-muted" style={{ fontSize: '18px', maxWidth: '640px', marginBottom: '32px' }}>
          Custom software engineering, cloud solutions, and UI/UX design crafted from Kathmandu, Nepal. Full interactive service catalog will be introduced in subsequent stages.
        </p>

        <Card style={{ maxWidth: '600px' }}>
          <h3 style={{ marginBottom: '8px' }}>Route Navigation Verified</h3>
          <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
            You navigated to <code>/services</code>. The global Header and Footer are persistent and responsive.
          </p>
          <Button href="/" variant="secondary">
            ← Return to Home
          </Button>
        </Card>
      </Container>
    </div>
  );
}
