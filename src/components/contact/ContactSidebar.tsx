import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export function ContactSidebar() {
  const responseTimes = [
    { channel: 'Email', time: '24h' },
    { channel: 'Proposals', time: '2–3 days' },
    { channel: 'Urgent', time: 'Same day' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 1. Map Placeholder Card */}
      <Card style={{ padding: '24px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 800 }}>Kathmandu Valley Studio</h3>
          <Badge variant="teal">Demo Map</Badge>
        </div>

        {/* Stylized Kathmandu Map Visualization */}
        <div
          style={{
            height: '160px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #E7F2F4 0%, #E7F5EA 100%)',
            border: '1px solid var(--color-line)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
          }}
        >
          {/* Subtle topological grid lines */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle, rgba(15, 148, 136, 0.15) 1px, transparent 1px)',
              backgroundSize: '14px 14px',
            }}
          />

          {/* Central Location Pin */}
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-teal)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px auto',
                boxShadow: '0 4px 14px rgba(15, 148, 136, 0.4)',
                fontSize: '18px',
              }}
            >
              📍
            </div>
            <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-ink)', backgroundColor: '#FFFFFF', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--color-line)' }}>
              Digital Chautari HQ
            </span>
          </div>

          <span style={{ position: 'absolute', bottom: '8px', left: '10px', fontSize: '10px', color: 'var(--color-muted)', fontFamily: 'monospace' }}>
            Kathmandu, Nepal • 27.7172° N, 85.3240° E
          </span>
        </div>

        <div style={{ fontSize: '13.5px', color: 'var(--color-ink)', lineHeight: '1.5' }}>
          <strong>Physical Address:</strong> Tech Corridor, Kathmandu, Nepal (Placeholder Location).
        </div>
      </Card>

      {/* 2. Dark FAQ & Response Time Callout */}
      <Card variant="navy" style={{ padding: '26px' }}>
        <div style={{ marginBottom: '16px' }}>
          <Badge
            variant="gold"
            style={{
              backgroundColor: 'rgba(224, 169, 48, 0.2)',
              color: 'var(--color-accent-gold)',
              borderColor: 'rgba(224, 169, 48, 0.35)',
              marginBottom: '10px',
            }}
          >
            Response Time SLA
          </Badge>
          <h3 style={{ color: '#FFFFFF', fontSize: '19px', fontWeight: 800 }}>
            Standard Response Times
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
          {responseTimes.map((item) => (
            <div
              key={item.channel}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--color-navy-border)',
                fontSize: '13.5px',
              }}
            >
              <span style={{ color: '#E2E8F0', fontWeight: 600 }}>{item.channel}</span>
              <span style={{ color: 'var(--color-accent-gold)', fontWeight: 800 }}>{item.time}</span>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid var(--color-navy-border)', paddingTop: '16px' }}>
          <Link
            href="/services"
            style={{
              color: 'var(--color-primary-teal)',
              fontSize: '14px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Need quick answers? Visit FAQ page →
          </Link>
        </div>
      </Card>
    </div>
  );
}
