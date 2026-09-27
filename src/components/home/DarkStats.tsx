import React from 'react';
import { DarkSection } from '@/components/ui/DarkSection';
import { IconBox } from '@/components/ui/IconBox';

interface StatBlock {
  value: string;
  label: string;
  sublabel: string;
  variant: 'teal' | 'gold' | 'leaf' | 'rose';
  icon: React.ReactNode;
}

const darkStatsData: StatBlock[] = [
  {
    value: '250+',
    label: 'Projects Delivered',
    sublabel: 'Across web, cloud, and mobile products',
    variant: 'teal',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 11 3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    value: '40+',
    label: 'Happy Clients',
    sublabel: 'In Nepal, South Asia, and worldwide',
    variant: 'gold',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: '1M+',
    label: 'Content Views',
    sublabel: 'Generated across brand campaigns',
    variant: 'leaf',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    value: '98%',
    label: 'Client Retention',
    sublabel: 'Long-term partnership satisfaction rate',
    variant: 'rose',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

export function DarkStats() {
  return (
    <DarkSection className="dark-stats-section">
      <div className="dark-stats-grid">
        {darkStatsData.map((item) => (
          <div key={item.label} className="dark-stat-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <IconBox variant={item.variant} style={{ width: '38px', height: '38px' }}>
                {item.icon}
              </IconBox>
              <div className="dark-stat-value">{item.value}</div>
            </div>
            <h4 className="dark-stat-label">{item.label}</h4>
            <p className="dark-stat-sublabel">{item.sublabel}</p>
          </div>
        ))}
      </div>
    </DarkSection>
  );
}
