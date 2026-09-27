import React from 'react';
import { Card } from '@/components/ui/Card';
import { IconBox, PastelVariant } from '@/components/ui/IconBox';
import { Badge, BadgeVariant } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export interface SubService {
  title: string;
  description: string;
}

export interface ServiceRowProps {
  id: string;
  category: string;
  badgeVariant: BadgeVariant;
  title: string;
  description: string;
  iconVariant: PastelVariant;
  icon: React.ReactNode;
  subServices: SubService[];
  index: number;
}

export function ServiceRow({
  id,
  category,
  badgeVariant,
  title,
  description,
  iconVariant,
  icon,
  subServices,
  index,
}: ServiceRowProps) {
  return (
    <div id={id} className="service-row-item" style={{ paddingTop: index > 0 ? '64px' : '0' }}>
      <div className="service-row-grid">
        {/* Left Column: Main Category Overview */}
        <div className="service-row-left">
          <Badge variant={badgeVariant} style={{ marginBottom: '16px' }}>
            {category}
          </Badge>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
            <IconBox variant={iconVariant} style={{ width: '52px', height: '52px', flexShrink: 0 }}>
              {icon}
            </IconBox>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw + 0.5rem, 2.1rem)', lineHeight: '1.2' }}>
              {title}
            </h2>
          </div>

          <p className="text-muted" style={{ fontSize: '15.5px', lineHeight: '1.7', marginBottom: '28px' }}>
            {description}
          </p>

          <Button href="/contact" variant="primary">
            Request {category} →
          </Button>
        </div>

        {/* Right Column: 2x2 Sub-service Grid */}
        <div className="service-row-right">
          <div className="sub-services-grid">
            {subServices.map((sub, i) => (
              <Card key={sub.title} className="sub-service-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--color-pastel-teal)',
                      color: 'var(--color-primary-teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <h3 style={{ fontSize: '16px', fontWeight: 700 }}>{sub.title}</h3>
                </div>
                <p className="text-muted" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                  {sub.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
