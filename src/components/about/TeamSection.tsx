import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge, BadgeVariant } from '@/components/ui/Badge';
import { PastelVariant } from '@/components/ui/IconBox';

interface TeamRole {
  role: string;
  department: string;
  badgeVariant: BadgeVariant;
  iconVariant: PastelVariant;
  focus: string;
  responsibilities: string[];
  initials: string;
}

const teamRoles: TeamRole[] = [
  {
    role: 'Founder & CEO',
    department: 'Executive Leadership',
    badgeVariant: 'gold',
    iconVariant: 'gold',
    focus: 'Strategic Vision & Company Direction',
    responsibilities: ['Company roadmap & capital allocation', 'Venture incubation (Physio@Home)', 'High-level stakeholder alliances'],
    initials: 'FC',
  },
  {
    role: 'Co-Founder & COO',
    department: 'Operations & Strategy',
    badgeVariant: 'teal',
    iconVariant: 'teal',
    focus: 'Operational Excellence & Delivery',
    responsibilities: ['Cross-functional sprint coordination', 'Client onboarding & SLA oversight', 'Process optimization & talent growth'],
    initials: 'CO',
  },
  {
    role: 'Front-End Developer',
    department: 'Engineering Squad',
    badgeVariant: 'teal',
    iconVariant: 'teal',
    focus: 'Modern Web & Next.js Architecture',
    responsibilities: ['Component systems & responsive CSS', 'Performance optimization & Core Web Vitals', 'Interactive state & UI/UX fidelity'],
    initials: 'FE',
  },
  {
    role: 'Back-End Developer',
    department: 'Engineering Squad',
    badgeVariant: 'leaf',
    iconVariant: 'leaf',
    focus: 'Cloud Infrastructure & API Systems',
    responsibilities: ['Scalable PostgreSQL/Prisma backends', 'Authentication, security & encryption', 'CI/CD pipelines & Docker deployments'],
    initials: 'BE',
  },
  {
    role: 'Marketing Lead',
    department: 'Growth & Strategy',
    badgeVariant: 'gold',
    iconVariant: 'gold',
    focus: 'Growth Marketing & Storytelling',
    responsibilities: ['Multi-channel acquisition campaigns', 'Editorial direction for One Content Studio', 'SEO architecture & ROI analytics'],
    initials: 'ML',
  },
  {
    role: 'Sales Executive',
    department: 'Client Partnerships',
    badgeVariant: 'leaf',
    iconVariant: 'leaf',
    focus: 'Client Solutions & Discovery',
    responsibilities: ['Discovery consultations & scoping', 'Client requirements analysis & proposals', 'Long-term relationship management'],
    initials: 'SE',
  },
  {
    role: 'Business Development Officer',
    department: 'Market Expansion',
    badgeVariant: 'teal',
    iconVariant: 'teal',
    focus: 'Strategic Alliances & Ecosystem Growth',
    responsibilities: ['B2B corporate & institutional partnerships', 'Regional market expansion in South Asia', 'Joint-venture contract negotiations'],
    initials: 'BD',
  },
];

export function TeamSection() {
  return (
    <section className="section-standard team-section" style={{ borderTop: '1px solid var(--color-line)' }}>
      <Container>
        <SectionHeading
          eyebrow="Multidisciplinary Talent"
          eyebrowVariant="teal"
          title={
            <>
              Our squad & <span className="headline-gradient">organizational structure</span>
            </>
          }
          description="A specialized collective of creative thinkers, software architects, and growth strategists united to build impactful technology."
          align="center"
        />

        {/* Role-Based Disclosure Notice */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--color-muted)',
              backgroundColor: 'rgba(16, 24, 38, 0.04)',
              padding: '6px 14px',
              borderRadius: '12px',
              border: '1px solid var(--color-line)',
            }}
          >
            Role-Based Organizational Structure • Portfolio Demonstration
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {teamRoles.map((member) => (
            <Card key={member.role} style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%' }}>
              {/* Header with Avatar & Department */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, var(--color-primary-teal) 0%, var(--color-primary-dark) 100%)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-headings)',
                    fontWeight: 800,
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(15, 148, 136, 0.25)',
                  }}
                >
                  {member.initials}
                </div>
                <Badge variant={member.badgeVariant}>
                  {member.department}
                </Badge>
              </div>

              {/* Role Title & Focus */}
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '4px' }}>
                {member.role}
              </h3>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary-teal)', marginBottom: '14px' }}>
                {member.focus}
              </p>

              {/* Responsibilities */}
              <div style={{ borderTop: '1px solid var(--color-line)', paddingTop: '12px', flex: 1 }}>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '8px', letterSpacing: '0.04em' }}>
                  Core Focus:
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {member.responsibilities.map((resp) => (
                    <li key={resp} style={{ fontSize: '12.5px', color: 'var(--color-ink)', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                      <span style={{ color: 'var(--color-leaf-green)', fontWeight: 800 }}>•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
