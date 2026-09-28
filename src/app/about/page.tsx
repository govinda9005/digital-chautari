import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { AboutStory } from '@/components/about/AboutStory';
import { MissionVision } from '@/components/about/MissionVision';
import { AboutValues } from '@/components/about/AboutValues';
import { QualityTrust } from '@/components/about/QualityTrust';
import { TeamSection } from '@/components/about/TeamSection';
import { AboutRoadmap } from '@/components/about/AboutRoadmap';
import { AboutCta } from '@/components/about/AboutCta';

export const metadata: Metadata = {
  title: 'About Us | Digital Chautari - Creative Technology Studio',
  description:
    'Learn about Digital Chautari’s history, philosophy, team organizational structure, core values, and journey from a Kathmandu idea to a digital powerhouse.',
};

export default function AboutPage() {
  return (
    <main>
      {/* 1. About Page Hero */}
      <PageHero
        eyebrow="Our Story & Team"
        eyebrowVariant="leaf"
        title={
          <>
            The people behind <span className="headline-gradient">Digital Chautari</span>
          </>
        }
        description="Rooted in Kathmandu and inspired by Nepali communal philosophy, we are a multidisciplinary collective of engineers, designers, and strategists shaping high-impact digital experiences."
      />

      {/* 2. Brand Origin Story & 2x2 Alternating Stat Tiles (Teal, Navy, White, Gold) */}
      <AboutStory />

      {/* 3. Mission & Vision Dual Cards */}
      <MissionVision />

      {/* 4. Core Values (Passion, Creativity, Excellence, Collaboration) */}
      <AboutValues />

      {/* 5. Quality & Trust Dark Navy Section (ISO 9001, Data Protection, Global Delivery, Pan-Nepal Network) */}
      <QualityTrust />

      {/* 6. Team Organizational Structure (7 Role Cards) */}
      <TeamSection />

      {/* 7. Growth Roadmap Timeline (2025 The Idea, 2025 First Products, 2026 Health-Tech, 2026 Company Reg) */}
      <AboutRoadmap />

      {/* 8. Career & Partnership Closing CTA */}
      <AboutCta />
    </main>
  );
}
