import React from 'react';
import { IconBox, PastelVariant } from './IconBox';

export interface StatItem {
  number: string;
  label: string;
  variant: PastelVariant;
  icon: React.ReactNode;
}

const defaultStats: StatItem[] = [
  {
    number: '3',
    label: 'Digital Products Built',
    variant: 'gold',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  {
    number: '6+',
    label: 'Core Team Members',
    variant: 'leaf',
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
    number: '100%',
    label: 'Engineering Commitment',
    variant: 'teal',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

interface StatBarProps {
  stats?: StatItem[];
  className?: string;
}

export function StatBar({ stats = defaultStats, className = '' }: StatBarProps) {
  return (
    <div className={`stat-bar-container ${className}`.trim()}>
      <div className="stat-bar-card">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="stat-segment">
              <IconBox variant={stat.variant} className="stat-icon-box">
                {stat.icon}
              </IconBox>
              <div className="stat-content">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
            {index < stats.length - 1 && <div className="stat-divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
