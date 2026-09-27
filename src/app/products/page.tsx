import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ProductsPage() {
  return (
    <div className="section-hero">
      <Container>
        <Badge variant="gold" style={{ marginBottom: '16px' }}>
          Digital Chautari Products
        </Badge>
        <h1 style={{ marginBottom: '16px' }}>
          Innovative <span className="headline-gradient">Digital Products</span>
        </h1>
        <p className="text-muted" style={{ fontSize: '18px', maxWidth: '640px', marginBottom: '32px' }}>
          Scalable SaaS platforms, developer tooling, and enterprise products built for modern workflows.
        </p>

        <Card style={{ maxWidth: '600px' }}>
          <h3 style={{ marginBottom: '8px' }}>Route Navigation Verified</h3>
          <p className="text-muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
            You navigated to <code>/products</code>. Header active state is active on "Products".
          </p>
          <Button href="/" variant="secondary">
            ← Return to Home
          </Button>
        </Card>
      </Container>
    </div>
  );
}
