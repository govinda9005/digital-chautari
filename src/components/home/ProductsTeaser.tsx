import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Badge } from '@/components/ui/Badge';

interface ProductItem {
  title: string;
  category: string;
  badgeVariant: 'leaf' | 'gold' | 'teal';
  description: string;
  iconVariant: 'leaf' | 'gold' | 'teal';
  icon: React.ReactNode;
}

const products: ProductItem[] = [
  {
    title: 'Eco Creative Marketing Agency',
    category: 'Marketing & Brand Strategy',
    badgeVariant: 'leaf',
    description: 'Data-driven growth marketing, sustainability-focused brand campaigns, and high-ROI multi-channel digital performance.',
    iconVariant: 'leaf',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'One Content Creation Studio',
    category: 'Media & Production Studio',
    badgeVariant: 'gold',
    description: 'Full-service multimedia production delivering cinematic brand documentaries, viral short-form video, and podcast audio.',
    iconVariant: 'gold',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: 'Physio@Home',
    category: 'Health-Tech Digital Platform',
    badgeVariant: 'teal',
    description: "Nepal's pioneer at-home physiotherapy and tele-rehabilitation platform connecting licensed therapists with patients across Kathmandu.",
    iconVariant: 'teal',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

export function ProductsTeaser() {
  return (
    <section className="section-standard products-teaser-section" style={{ borderTop: '1px solid var(--color-line)' }}>
      <Container>
        <SectionHeading
          eyebrow="Proprietary Ventures"
          eyebrowVariant="gold"
          title={
            <>
              Three ventures, <span className="headline-gradient">one vision</span>
            </>
          }
          description="In addition to client engineering, Digital Chautari conceives, launches, and operates its own high-impact technology products and media platforms."
          align="center"
        />

        <div className="products-grid">
          {products.map((product) => (
            <Card key={product.title} className="product-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                <IconBox variant={product.iconVariant} style={{ width: '48px', height: '48px' }}>
                  {product.icon}
                </IconBox>
                <Badge variant={product.badgeVariant}>
                  {product.category}
                </Badge>
              </div>

              <h3 style={{ fontSize: '20px', marginBottom: '12px', lineHeight: '1.3' }}>
                {product.title}
              </h3>

              <p className="text-muted" style={{ fontSize: '14px', lineHeight: '1.65', marginBottom: '24px', flex: 1 }}>
                {product.description}
              </p>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-line)' }}>
                <Link
                  href="/products"
                  className="product-learn-more"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--color-primary-teal)',
                    transition: 'transform 0.2s ease, color 0.2s ease',
                  }}
                >
                  Learn more →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
