import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { StatBar } from '@/components/ui/StatBar';

export function HomeHero() {
  return (
    <section className="home-hero-section">
      <Container>
        <div className="home-hero-content">
          {/* Eyebrow */}
          <div className="home-hero-eyebrow">
            <Badge variant="teal">
              🚀 Welcome to Digital Chautari
            </Badge>
          </div>

          {/* H1 Headline */}
          <h1 className="home-hero-title">
            We build <span className="headline-gradient">digital bridges</span> between ideas and impact
          </h1>

          {/* Lead Paragraph */}
          <p className="home-hero-lead">
            We are a creative technology studio based in Kathmandu, Nepal. We combine thoughtful design with modern engineering to craft high-impact web applications, digital products, and cloud architectures.
          </p>

          {/* CTA Buttons */}
          <div className="home-hero-actions">
            <Button href="/services" variant="primary" className="hero-primary-btn">
              Explore Services →
            </Button>
            <Button href="/products" variant="secondary" className="hero-secondary-btn">
              View Products
            </Button>
          </div>

          {/* Home Stat Bar */}
          <div className="home-hero-stats">
            <StatBar />
          </div>
        </div>
      </Container>
    </section>
  );
}
