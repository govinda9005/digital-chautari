import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { IconBox, PastelVariant } from '@/components/ui/IconBox';

interface ContactInfoItem {
  title: string;
  value: string;
  detail: string;
  variant: PastelVariant;
  icon: React.ReactNode;
}

const contactChannels: ContactInfoItem[] = [
  {
    title: 'Address',
    value: 'Kathmandu, Nepal',
    detail: 'Tech Corridor, Bagmati Province',
    variant: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'hello@digitalchautari.com.np',
    detail: 'Demo Channel • Inquiries & Support',
    variant: 'gold',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    title: 'Phone',
    value: '+977 1 4200000',
    detail: 'Demo Line • Mon – Fri (NPT)',
    variant: 'leaf',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Business Hours',
    value: 'Sun – Fri: 9:00 AM – 6:00 PM',
    detail: 'Nepal Time (GMT+5:45) • Demo Schedule',
    variant: 'purple',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export function ContactInfoCards() {
  return (
    <section className="section-tight contact-info-section">
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {contactChannels.map((item) => (
            <Card key={item.title} style={{ padding: '22px' }}>
              <IconBox variant={item.variant} style={{ marginBottom: '14px' }}>
                {item.icon}
              </IconBox>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                {item.title}
              </h3>
              <div style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '4px' }}>
                {item.value}
              </div>
              <p style={{ fontSize: '12px', color: 'var(--color-muted)' }}>
                {item.detail}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
