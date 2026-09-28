import React from 'react';
import { DarkSection } from '@/components/ui/DarkSection';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

interface RoadmapMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
}

const roadmapData: RoadmapMilestone[] = [
  {
    year: '2025',
    title: 'The Idea',
    subtitle: 'Conception & Cultural Philosophy',
    description: 'The founding team conceptualized Digital Chautari in Kathmandu, seeking to combine the communal wisdom of a traditional Nepali Chautari with modern web and software engineering standards.',
    achievements: ['Core philosophy defined', 'Kathmandu founder squad assembled', 'Initial tech stack standardized'],
  },
  {
    year: '2025',
    title: 'First Products',
    subtitle: 'Agency & Multimedia Incubation',
    description: 'Launched our initial creative ventures — Eco Creative Marketing Agency and One Content Creation Studio — delivering high-ROI growth and 4K media production for early clients.',
    achievements: ['Eco Creative brand launched', 'One Content Studio studio operational', 'First 50+ client projects delivered'],
  },
  {
    year: '2026',
    title: 'Health-Tech Entry',
    subtitle: 'Physio@Home Pilot & Architecture',
    description: 'Identified a critical accessibility gap in home rehabilitation across Kathmandu. Engineered the Physio@Home tele-rehab web portal and verified licensed therapist network.',
    achievements: ['Physio@Home web application deployed', '35+ licensed therapists onboarded', '1,800+ patients served'],
  },
  {
    year: '2026',
    title: 'Company Registration',
    subtitle: 'Formal Incorporation & Global Scale',
    description: 'Completed formal registration as Digital Chautari Pvt. Ltd. in Kathmandu. Expanded full-stack Next.js client engineering, enterprise cloud solutions, and international contracts.',
    achievements: ['Formal corporate registration in Nepal', 'Expanded 7+ specialist core team', 'Global client delivery in South Asia & APAC'],
  },
];

export function AboutRoadmap() {
  return (
    <DarkSection className="about-roadmap-section">
      <div style={{ maxWidth: '720px', margin: '0 auto 56px auto', textAlign: 'center' }}>
        <Badge
          variant="gold"
          style={{
            marginBottom: '16px',
            backgroundColor: 'rgba(224, 169, 48, 0.2)',
            color: 'var(--color-accent-gold)',
            borderColor: 'rgba(224, 169, 48, 0.35)',
          }}
        >
          Evolution & Milestones
        </Badge>
        <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw + 0.5rem, 2.5rem)', marginBottom: '14px' }}>
          Our journey & <span className="headline-gradient">growth roadmap</span>
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.6' }}>
          From early conceptual discussions under the hills of Kathmandu to an integrated digital powerhouse with proprietary ventures.
        </p>
      </div>

      {/* Interactive Timeline Container */}
      <div className="roadmap-timeline">
        {/* Center Vertical Line */}
        <div className="roadmap-line" />

        {roadmapData.map((milestone, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={milestone.title}
              className={`roadmap-item ${isLeft ? 'roadmap-item-left' : 'roadmap-item-right'}`}
            >
              {/* Green Center Dot */}
              <div className="roadmap-dot" />

              {/* Milestone Card */}
              <div className="roadmap-card-wrapper">
                <Card variant="navy" className="roadmap-card">
                  {/* Header: Gold Year Pill & Title */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h3 style={{ color: '#FFFFFF', fontSize: '19px', fontWeight: 800 }}>
                      {milestone.title}
                    </h3>
                    <span className="roadmap-year-pill">
                      {milestone.year}
                    </span>
                  </div>

                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-accent-gold)', marginBottom: '10px' }}>
                    {milestone.subtitle}
                  </p>

                  <p style={{ color: '#94A3B8', fontSize: '13.5px', lineHeight: '1.65', marginBottom: '16px' }}>
                    {milestone.description}
                  </p>

                  {/* Achievements */}
                  <div style={{ borderTop: '1px solid var(--color-navy-border)', paddingTop: '12px' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {milestone.achievements.map((item) => (
                        <li key={item} style={{ fontSize: '12px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ color: 'var(--color-leaf-green)', fontWeight: 800 }}>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </DarkSection>
  );
}
