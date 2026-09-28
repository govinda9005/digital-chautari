import React from 'react';
import { BadgeVariant } from '@/components/ui/Badge';
import { PastelVariant } from '@/components/ui/IconBox';

export interface ProductData {
  id: 'eco-creative' | 'one-content' | 'physio-at-home';
  tabName: string;
  category: string;
  badgeVariant: BadgeVariant;
  iconVariant: PastelVariant;
  title: string;
  tagline: string;
  description: string;
  highlightStats: { label: string; value: string }[];
  features: string[];
  ctaText: string;
  ctaHref: string;
  previewType: 'marketing' | 'media' | 'healthtech';
}

export const productsData: ProductData[] = [
  {
    id: 'eco-creative',
    tabName: 'Eco Creative Marketing',
    category: 'Growth & Brand Agency',
    badgeVariant: 'leaf',
    iconVariant: 'leaf',
    title: 'Eco Creative Marketing Agency',
    tagline: 'Sustainable, Data-Backed Digital Growth for Modern Brands',
    description:
      'Eco Creative is Digital Chautari’s dedicated marketing arm in Kathmandu. We blend sustainability-conscious storytelling with precision multi-channel paid acquisition, technical SEO audits, and conversion rate optimization to scale ambitious businesses.',
    highlightStats: [
      { label: 'Avg ROAS Delivered', value: '4.8x' },
      { label: 'Campaign Reach', value: '2.5M+' },
      { label: 'Retention Rate', value: '96%' },
    ],
    features: [
      'Full-funnel digital strategy & customer acquisition',
      'Meta & Google Ads programmatic campaign management',
      'Technical SEO architecture & continuous ranking audits',
      'Custom GA4 attribution dashboards & weekly insights',
    ],
    ctaText: 'Partner with Eco Creative →',
    ctaHref: '/contact',
    previewType: 'marketing',
  },
  {
    id: 'one-content',
    tabName: 'One Content Studio',
    category: 'Multimedia & Production',
    badgeVariant: 'gold',
    iconVariant: 'gold',
    title: 'One Content Creation Studio',
    tagline: 'Cinematic Storytelling, Viral Short-Form Video & Audio Production',
    description:
      'One Content Studio is our high-capacity creative powerhouse. From 4K commercial documentaries and podcast series to high-velocity social reels, our production squad produces visual narratives that capture audience attention across Nepal and global digital platforms.',
    highlightStats: [
      { label: 'Videos Produced', value: '450+' },
      { label: 'Organic Views', value: '15M+' },
      { label: 'Studio Episodes', value: '80+' },
    ],
    features: [
      'Full-service 4K cinematic video production & editing',
      'High-velocity viral short-form video (Reels & TikTok)',
      'Multi-microphone audio podcast recording & mastering',
      'Brand messaging guidelines & editorial copywriting',
    ],
    ctaText: 'Explore One Content Studio →',
    ctaHref: '/contact',
    previewType: 'media',
  },
  {
    id: 'physio-at-home',
    tabName: 'Physio@Home',
    category: 'Health-Tech Digital Platform',
    badgeVariant: 'teal',
    iconVariant: 'teal',
    title: 'Physio@Home',
    tagline: "Nepal's Premier Tele-Physiotherapy & At-Home Rehabilitation Platform",
    description:
      'Physio@Home bridges the gap in specialized physical therapy across the Kathmandu Valley. Our health-tech platform connects verified, licensed physiotherapists directly with patients for at-home visits and interactive remote rehabilitation tracking.',
    highlightStats: [
      { label: 'Licensed Therapists', value: '35+' },
      { label: 'Patients Treated', value: '1,800+' },
      { label: 'Patient Satisfaction', value: '99%' },
    ],
    features: [
      'Instant booking of licensed therapists for home visits',
      'Tele-rehabilitation video consultations & live guidance',
      'Digital exercise tracker with clinical progress logs',
      'Secure health records & automated doctor follow-ups',
    ],
    ctaText: 'Launch Physio@Home Experience →',
    ctaHref: '/contact',
    previewType: 'healthtech',
  },
];
