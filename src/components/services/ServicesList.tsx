import React from 'react';
import { Container } from '@/components/ui/Container';
import { ServiceRow, ServiceRowProps } from './ServiceRow';

const servicesData: Omit<ServiceRowProps, 'index'>[] = [
  {
    id: 'digital-marketing',
    category: 'Digital Marketing',
    badgeVariant: 'teal',
    title: 'Data-Driven Growth & Acquisition',
    description:
      'We formulate high-impact digital campaigns, optimize search engine visibility, and manage paid acquisition channels to build scalable growth funnels for your business.',
    iconVariant: 'teal',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    subServices: [
      {
        title: 'SEO & SEM',
        description: 'Technical audits, keyword ranking strategies, and search engine optimization engineered to dominate high-intent search queries.',
      },
      {
        title: 'Social Media Marketing',
        description: 'Multi-platform audience growth, community engagement, and viral campaign orchestration across Meta, LinkedIn, and TikTok.',
      },
      {
        title: 'Paid Advertising',
        description: 'Precision-targeted Google Ads, Meta Ads, and programmatic advertising campaigns optimized for high ROAS and low CAC.',
      },
      {
        title: 'Analytics & Reporting',
        description: 'Comprehensive conversion tracking, Google Analytics 4 dashboards, and real-time revenue attribution reporting.',
      },
    ],
  },
  {
    id: 'content-creation',
    category: 'Content Creation',
    badgeVariant: 'gold',
    title: 'High-Impact Media & Brand Storytelling',
    description:
      'Our in-house creative studio produces cinematic video content, viral short-form media, persuasive copywriting, and podcast productions that captivate your target demographic.',
    iconVariant: 'gold',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
      </svg>
    ),
    subServices: [
      {
        title: 'Video Production & Reels',
        description: 'Cinematic corporate brand films, engaging Instagram Reels, YouTube documentaries, and commercial ad shoots.',
      },
      {
        title: 'Copywriting & Brand Voice',
        description: 'Persuasive conversion copywriting, SEO-driven long-form articles, executive ghostwriting, and brand messaging guides.',
      },
      {
        title: 'Photography & Assets',
        description: 'High-resolution product photography, studio portraits, on-location event coverage, and branded visual asset libraries.',
      },
      {
        title: 'Podcast & Audio Production',
        description: 'Studio audio engineering, multi-track podcast recording, sound mastering, and episodic audio distribution.',
      },
    ],
  },
  {
    id: 'software-development',
    category: 'Software Development',
    badgeVariant: 'leaf',
    title: 'Modern Full-Stack Engineering & Cloud',
    description:
      'We architect, build, and deploy enterprise-grade web applications, cross-platform mobile apps, and resilient cloud backends utilizing modern Next.js and TypeScript ecosystems.',
    iconVariant: 'leaf',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    subServices: [
      {
        title: 'Full-Stack Web Apps',
        description: 'Modern Next.js (App Router), React, and Node.js web applications engineered for sub-second performance and edge caching.',
      },
      {
        title: 'Mobile Applications',
        description: 'Cross-platform iOS and Android mobile solutions built with React Native for fluid, 60fps native user experiences.',
      },
      {
        title: 'Cloud & DevOps Engineering',
        description: 'Automated CI/CD pipelines, containerized Docker microservices, AWS/Vercel cloud infrastructure, and zero-downtime deployment.',
      },
      {
        title: 'API & Database Systems',
        description: 'REST and GraphQL APIs, PostgreSQL/Prisma architectures, payment gateway integrations (eSewa, Khalti, Stripe), and security audits.',
      },
    ],
  },
];

export function ServicesList() {
  return (
    <section className="section-standard services-list-section">
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {servicesData.map((service, index) => (
            <React.Fragment key={service.id}>
              <ServiceRow {...service} index={index} />
              {index < servicesData.length - 1 && (
                <div style={{ height: '1px', backgroundColor: 'var(--color-line)', width: '100%' }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
