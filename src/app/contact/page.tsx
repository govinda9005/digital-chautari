import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <div className="section-hero">
      <Container>
        <Badge variant="teal" style={{ marginBottom: '16px' }}>
          Get in Touch
        </Badge>
        <h1 style={{ marginBottom: '16px' }}>
          Contact <span className="headline-gradient">Digital Chautari</span>
        </h1>
        <p className="text-muted" style={{ fontSize: '18px', maxWidth: '640px', marginBottom: '32px' }}>
          Let us discuss your project, product vision, or technical partnership in Kathmandu, Nepal.
        </p>

        <Card style={{ maxWidth: '600px' }}>
          <h3 style={{ marginBottom: '8px' }}>Route Navigation Verified</h3>
          <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
            You navigated to <code>/contact</code> via the navigation or the "Contact Us" CTA button.
          </p>
          <Button href="/" variant="secondary">
            ← Return to Home
          </Button>
        </Card>
      </Container>
    </div>
  );
}
