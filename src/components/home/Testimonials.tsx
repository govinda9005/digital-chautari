import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  location: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: 'Aarav Sharma',
    role: 'Chief Technology Officer',
    company: 'Himalayan FinTech Labs',
    location: 'Kathmandu, Nepal',
    quote:
      'Digital Chautari delivered our Next.js banking portal with exceptional technical precision. Their engineering squad understood our regulatory compliance needs from day one, completing delivery ahead of schedule.',
  },
  {
    name: 'Sunita Pradhan',
    role: 'Managing Director',
    company: 'EcoCraft Nepal',
    location: 'Lalitpur, Nepal',
    quote:
      'The creative branding and e-commerce experience designed by Digital Chautari elevated our international visibility. Our conversion rate increased significantly within the first two months post-launch.',
  },
  {
    name: 'Marcus Vance',
    role: 'Product Lead',
    company: 'Apex Health Systems',
    location: 'Sydney, Australia',
    quote:
      'Partnering with Digital Chautari for full-stack engineering provided high-velocity output without sacrificing code quality. Their communication and modern React tooling were world-class throughout.',
  },
];

export function Testimonials() {
  return (
    <section className="section-standard testimonials-section" style={{ borderTop: '1px solid var(--color-line)' }}>
      <Container>
        <SectionHeading
          eyebrow="Partner Feedback"
          eyebrowVariant="leaf"
          title={
            <>
              Trusted by leaders who <span className="headline-gradient">demand excellence</span>
            </>
          }
          description="Hear from organizations and enterprise leaders who collaborate with Digital Chautari to launch mission-critical digital products."
          align="center"
        />

        {/* Demo Disclaimer Indicator */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--color-muted)',
              backgroundColor: 'rgba(16, 24, 38, 0.04)',
              padding: '4px 12px',
              borderRadius: '12px',
              border: '1px solid var(--color-line)',
            }}
          >
            Illustrative Demo Testimonials • Standard Portfolio Showcase
          </span>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <Card key={item.name} className="testimonial-card">
              {/* 5-Star Rating */}
              <div style={{ display: 'flex', gap: '3px', color: 'var(--color-accent-gold)', fontSize: '18px', marginBottom: '14px' }}>
                {'★'.repeat(5)}
              </div>

              {/* Quote */}
              <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'var(--color-ink)', fontStyle: 'italic', marginBottom: '20px', flex: 1 }}>
                “{item.quote}”
              </p>

              {/* Author Metadata */}
              <div style={{ borderTop: '1px solid var(--color-line)', paddingTop: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-pastel-teal)',
                    color: 'var(--color-primary-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '14px',
                  }}
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-ink)' }}>{item.name}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--color-muted)' }}>
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
