import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="section-hero">
      <Container>
        <Badge variant="leaf" style={{ marginBottom: '16px' }}>
          About Digital Chautari
        </Badge>
        <h1 style={{ marginBottom: '16px' }}>
          About <span className="headline-gradient">Our Company</span>
        </h1>
        <p className="text-muted" style={{ fontSize: '18px', maxWidth: '640px', marginBottom: '32px' }}>
          Digital Chautari is a creative technology studio in Kathmandu, Nepal bringing together modern design and robust engineering.
        </p>

        <Card style={{ maxWidth: '600px' }}>
          <h3 style={{ marginBottom: '8px' }}>Route Navigation Verified</h3>
          <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
            You navigated to <code>/about</code>. Global Header and Footer seamlessly frame this page.
          </p>
          <Button href="/" variant="secondary">
            ← Return to Home
          </Button>
        </Card>
      </Container>
    </div>
  );
}
