import React from 'react';
import { DarkSection } from '@/components/ui/DarkSection';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'We analyze your strategic objectives, audience behavior, domain constraints, and technical roadmap to define clear milestones.',
    deliverables: ['Stakeholder Workshops', 'Architecture Blueprint', 'Project Scope'],
  },
  {
    number: '02',
    title: 'Design',
    description: 'We translate strategy into elegant interfaces, intuitive user journeys, interactive wireframes, and production-ready design systems.',
    deliverables: ['Figma UI Systems', 'Clickable Prototypes', 'UX Research Validation'],
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Our engineering squad builds responsive web applications, secure APIs, and database schemas with modern TypeScript and Next.js.',
    deliverables: ['Clean Codebase', 'API Integrations', 'Automated QA & Security'],
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'We orchestrate zero-downtime deployments, perform rigorous performance and SEO audits, and provide dedicated post-launch support.',
    deliverables: ['Cloud Deployment', 'SEO Optimization', 'Ongoing Maintenance'],
  },
];

export function FourStepProcess() {
  return (
    <DarkSection className="process-section">
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
        <Badge variant="teal" style={{ marginBottom: '16px' }}>
          Proven Execution Methodology
        </Badge>
        <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw + 0.5rem, 2.5rem)', marginBottom: '14px' }}>
          Our <span className="headline-gradient">4-step process</span>
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.6' }}>
          A structured, battle-tested framework ensuring predictable delivery, technical excellence, and transparent progress at every phase.
        </p>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <Card key={step.number} variant="navy" className="process-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-headings)',
                  fontSize: '28px',
                  fontWeight: 800,
                  color: 'var(--color-primary-teal)',
                  letterSpacing: '-0.03em',
                }}
              >
                {step.number}
              </span>
              <span
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
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                ✓
              </span>
            </div>

            <h3 style={{ color: '#FFFFFF', fontSize: '20px', marginBottom: '10px' }}>
              {step.title}
            </h3>

            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.6', marginBottom: '18px', flex: 1 }}>
              {step.description}
            </p>

            <div style={{ borderTop: '1px solid var(--color-navy-border)', paddingTop: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-accent-gold)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                Key Deliverables
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {step.deliverables.map((item) => (
                  <li key={item} style={{ fontSize: '12px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: 'var(--color-leaf-green)' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </DarkSection>
  );
}
