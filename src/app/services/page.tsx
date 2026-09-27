import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ServicesList } from '@/components/services/ServicesList';
import { PricingSection } from '@/components/services/PricingSection';
import { ServiceIndustries } from '@/components/services/ServiceIndustries';
import { WhyWorkWithUs } from '@/components/services/WhyWorkWithUs';
import { ServicesCta } from '@/components/services/ServicesCta';

export const metadata: Metadata = {
  title: 'Our Services | Digital Chautari - Creative Technology & Engineering',
  description:
    'Explore full-stack software development, multimedia content creation, and growth marketing services engineered by Digital Chautari in Kathmandu, Nepal.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* 1. Services Hero */}
      <PageHero
        eyebrow="Comprehensive Capabilities"
        eyebrowVariant="teal"
        title={
          <>
            Services that <span className="headline-gradient">drive growth</span>
          </>
        }
        description="We combine thoughtful product design, full-stack software engineering, and performance marketing to build resilient digital solutions for ambitious brands in Nepal and worldwide."
      />

      {/* 2. Three Main Service Categories (Digital Marketing, Content Creation, Software Development) */}
      <ServicesList />

      {/* 3. Transparent Pricing Tiers (Starter, Professional [Most Popular], Enterprise) */}
      <PricingSection />

      {/* 4. Industries We Work With (Healthcare, E-Commerce, Real Estate, Education, Tourism, Media) */}
      <ServiceIndustries />

      {/* 5. Dark Navy Advantage Section (6 Checklist Items) */}
      <WhyWorkWithUs />

      {/* 6. Closing Services CTA */}
      <ServicesCta />
    </main>
  );
}
