import React from 'react';
import { DarkSection } from '@/components/ui/DarkSection';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

interface WhyUsItem {
  title: string;
  description: string;
}

const whyUsPoints: WhyUsItem[] = [
  {
    title: 'Dedicated Project Manager',
    description: 'A single point of contact coordinating sprint milestones, daily updates, and transparent deliverables in real-time.',
  },
  {
    title: 'Agile Development Cycle',
    description: 'Iterative 2-week sprint cycles with continuous demo deployments, test suites, and rapid feedback loops.',
  },
  {
    title: 'Transparent Pricing',
    description: 'Honest, itemized budgets with no hidden fees, surprise scope creep, or vendor lock-in.',
  },
  {
    title: 'Post-Launch Support',
    description: 'Dedicated warranty period, performance monitoring, security patches, and ongoing proactive maintenance.',
  },
  {
    title: 'Scalable Architecture',
    description: 'Cloud-native Next.js and containerized backends designed to support high concurrent traffic and seamless feature expansion.',
  },
  {
    title: 'Cross-Platform Expertise',
    description: 'Unified product strategy spanning responsive web applications, iOS/Android mobile apps, and robust API microservices.',
  },
];

export function WhyWorkWithUs() {
  return (
    <DarkSection className="why-work-with-us-section">
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
        <Badge variant="teal" style={{ marginBottom: '16px' }}>
          The Digital Chautari Advantage
        </Badge>
        <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw + 0.5rem, 2.5rem)', marginBottom: '14px' }}>
          Why work <span className="headline-gradient">with us</span>
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.6' }}>
          We don't just write code or design graphics — we become your strategic digital engineering partner in Kathmandu, dedicated to your long-term success.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {whyUsPoints.map((item, index) => (
          <Card key={item.title} variant="navy" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(15, 148, 136, 0.15)',
                  border: '1px solid rgba(15, 148, 136, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary-teal)',
                  fontWeight: 800,
                  fontSize: '14px',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                ✓
              </div>
              <div>
                <h3 style={{ color: '#FFFFFF', fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '13.5px', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </DarkSection>
  );
}
