import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ContactInfoCards } from '@/components/contact/ContactInfoCards';
import { DirectLines } from '@/components/contact/DirectLines';
import { ContactSection } from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: "Contact Us | Let's Start a Conversation | Digital Chautari",
  description:
    'Get in touch with Digital Chautari in Kathmandu, Nepal. Reach our marketing, content studio, software engineering, or business development teams.',
  openGraph: {
    title: 'Contact Us | Digital Chautari',
    description:
      'Connect with the Digital Chautari team in Kathmandu, Nepal for technology, design, and digital growth partnerships.',
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Get In Touch"
        eyebrowVariant="teal"
        title={
          <>
            Let's start a <span className="headline-gradient">conversation</span>
          </>
        }
        description="Whether you have an upcoming project, want to explore our ventures, or need technical consulting in Kathmandu, Nepal, our team is here to help."
      />

      {/* 2. Contact Information Cards */}
      <ContactInfoCards />

      {/* 3. Direct Department Lines */}
      <DirectLines />

      {/* 4. Contact Form + Sidebar (Map & SLA Callout) */}
      <ContactSection />
    </main>
  );
}
