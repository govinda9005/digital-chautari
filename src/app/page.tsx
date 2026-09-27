import React from 'react';
import { HomeHero } from '@/components/home/HomeHero';
import { FeatureStrip } from '@/components/home/FeatureStrip';
import { WhoWeAre } from '@/components/home/WhoWeAre';
import { DarkStats } from '@/components/home/DarkStats';
import { ProductsTeaser } from '@/components/home/ProductsTeaser';
import { Sectors } from '@/components/home/Sectors';
import { FourStepProcess } from '@/components/home/FourStepProcess';
import { Testimonials } from '@/components/home/Testimonials';
import { BlogTeaser } from '@/components/home/BlogTeaser';
import { ClosingCta } from '@/components/home/ClosingCta';

export default function Home() {
  return (
    <main>
      {/* 1. Hero Landing Section + Stat Bar */}
      <HomeHero />

      {/* 2. Feature Strip (4 Core Pillars) */}
      <FeatureStrip />

      {/* 3. Who We Are (Brand Story, 2x2 Checklist, 2x2 Service Teasers) */}
      <WhoWeAre />

      {/* 4. Dark Stats (Navy #0B1220 4-Metric Section) */}
      <DarkStats />

      {/* 5. Products Teaser (Eco Creative, One Content, Physio@Home) */}
      <ProductsTeaser />

      {/* 6. Sectors (6 Industry Capabilities) */}
      <Sectors />

      {/* 7. Four-Step Process (01 Discover, 02 Design, 03 Develop, 04 Deliver) */}
      <FourStepProcess />

      {/* 8. Testimonials (3 Partner Quotes with 5-Star Ratings & Demo Note) */}
      <Testimonials />

      {/* 9. Blog Teaser (3 Insights / Article Cards) */}
      <BlogTeaser />

      {/* 10. Closing CTA (Teal-to-Navy Rounded Gradient Banner) */}
      <ClosingCta />
    </main>
  );
}
