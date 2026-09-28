import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from './ContactForm';
import { ContactSidebar } from './ContactSidebar';

export function ContactSection() {
  return (
    <section className="section-standard contact-form-section" style={{ borderTop: '1px solid var(--color-line)' }}>
      <Container>
        <SectionHeading
          eyebrow="Send an Inquiry"
          eyebrowVariant="teal"
          title={
            <>
              Tell us about your <span className="headline-gradient">vision & project</span>
            </>
          }
          description="Fill out the discovery form below with your project scope and timelines. Our engineering and strategy team in Kathmandu will review and respond promptly."
        />

        <div className="contact-two-column-grid">
          {/* Left Column: Form */}
          <div className="contact-form-col">
            <ContactForm />
          </div>

          {/* Right Column: Sidebar */}
          <div className="contact-sidebar-col">
            <ContactSidebar />
          </div>
        </div>
      </Container>
    </section>
  );
}
