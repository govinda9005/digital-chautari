import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ProductSwitcher } from '@/components/products/ProductSwitcher';
import { PhysioSpotlight } from '@/components/products/PhysioSpotlight';
import { ProductsCta } from '@/components/products/ProductsCta';

export const metadata: Metadata = {
  title: 'Our Products & Ventures | Digital Chautari - Creative Technology Studio',
  description:
    'Discover Digital Chautari’s proprietary ventures: Eco Creative Marketing Agency, One Content Creation Studio, and Physio@Home tele-rehabilitation platform.',
};

export default function ProductsPage() {
  return (
    <main>
      {/* 1. Products Page Hero */}
      <PageHero
        eyebrow="Proprietary Ecosystem"
        eyebrowVariant="gold"
        title={
          <>
            Three ventures, <span className="headline-gradient">one vision</span>
          </>
        }
        description="We build our own products with the same rigor and passion we bring to our client partnerships. Explore our specialized agency, media studio, and health-tech platforms born in Kathmandu, Nepal."
      />

      {/* 2. Interactive Product Tab Switcher (Eco Creative, One Content, Physio@Home) */}
      <ProductSwitcher />

      {/* 3. Dark Navy Spotlight (Physio@Home — Healthcare Reimagined) */}
      <PhysioSpotlight />

      {/* 4. Venture Collaboration Closing CTA */}
      <ProductsCta />
    </main>
  );
}
