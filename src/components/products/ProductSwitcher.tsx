'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { productsData, ProductData } from './productsData';
import { ProductMockUI } from './ProductMockUI';

export function ProductSwitcher() {
  const [activeId, setActiveId] = useState<ProductData['id']>('eco-creative');

  // Derive the active product data dynamically from structured array
  const activeProduct = productsData.find((p) => p.id === activeId) || productsData[0];

  return (
    <section className="section-standard product-switcher-section">
      <Container>
        {/* Pill-Style Interactive Tab Bar */}
        <div className="product-tabs-container">
          <div className="product-tabs-wrapper" role="tablist" aria-label="Digital Chautari Ventures">
            {productsData.map((product) => {
              const isActive = product.id === activeId;
              return (
                <button
                  key={product.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${product.id}`}
                  id={`tab-${product.id}`}
                  onClick={() => setActiveId(product.id)}
                  className={`product-tab-btn ${isActive ? 'product-tab-btn-active' : ''}`}
                >
                  <span className="product-tab-dot" />
                  <span className="product-tab-text">{product.tabName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Product Interactive Panel */}
        <div
          id={`panel-${activeProduct.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeProduct.id}`}
          className="selected-product-container"
        >
          <Card className="selected-product-card" style={{ padding: 'clamp(24px, 4vw, 44px)' }}>
            <div className="selected-product-grid">
              {/* Left Column: Product Information */}
              <div className="selected-product-left">
                <div style={{ marginBottom: '14px' }}>
                  <Badge variant={activeProduct.badgeVariant}>
                    {activeProduct.category}
                  </Badge>
                </div>

                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw + 0.4rem, 2.35rem)', lineHeight: '1.2', marginBottom: '10px' }}>
                  {activeProduct.title}
                </h2>

                <p style={{ fontSize: '15.5px', fontWeight: 600, color: 'var(--color-primary-dark)', marginBottom: '16px' }}>
                  {activeProduct.tagline}
                </p>

                <p className="text-muted" style={{ fontSize: '14.5px', lineHeight: '1.7', marginBottom: '24px' }}>
                  {activeProduct.description}
                </p>

                {/* Highlight Stats Row */}
                <div className="product-stats-row">
                  {activeProduct.highlightStats.map((stat) => (
                    <div key={stat.label} className="product-stat-item">
                      <div className="product-stat-value">{stat.value}</div>
                      <div className="product-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features Checklist */}
                <div style={{ borderTop: '1px solid var(--color-line)', paddingTop: '18px', marginBottom: '28px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-ink)', marginBottom: '12px', letterSpacing: '0.04em' }}>
                    Key Platform Capabilities:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {activeProduct.features.map((feat) => (
                      <li key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--color-ink)' }}>
                        <span style={{ color: 'var(--color-primary-teal)', fontWeight: 800 }}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href={activeProduct.ctaHref} variant="primary">
                  {activeProduct.ctaText}
                </Button>
              </div>

              {/* Right Column: Mock UI Preview Panel */}
              <div className="selected-product-right">
                <ProductMockUI type={activeProduct.previewType} />
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
