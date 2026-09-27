import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/layout/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Products & Solutions', href: '/products' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Careers (Hiring)', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Web & Mobile Applications', href: '/services' },
    { label: 'Enterprise Cloud Systems', href: '/services' },
    { label: 'UI/UX & Product Design', href: '/services' },
    { label: 'AI & Data Engineering', href: '/services' },
    { label: 'Technology Consulting', href: '/services' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security & Compliance', href: '#' },
    { label: 'Cookie Preferences', href: '#' },
  ];

  return (
    <footer
      className="site-footer"
      style={{
        backgroundColor: 'var(--color-navy)',
        color: '#E2E8F0',
        paddingTop: '64px',
        paddingBottom: '32px',
        borderTop: '1px solid var(--color-navy-border)',
      }}
    >
      <Container>
        {/* 4-Column Grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Column 1: Brand Blurb & Identity */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ marginBottom: '18px' }}>
              <Logo variant="dark" />
            </div>
            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#94A3B8',
                marginBottom: '20px',
              }}
            >
              Digital Chautari is a creative technology studio based in Kathmandu, Nepal. We craft scalable software, intuitive design systems, and resilient cloud architectures for forward-thinking organizations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--color-primary-teal)' }}>📍</span>
                <span>Kathmandu, Bagmati Province, Nepal</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--color-accent-gold)' }}>✉️</span>
                <span>hello@digitalchautari.com.np</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-headings)',
                fontSize: '15px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '18px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="footer-link"
                    style={{
                      fontSize: '14px',
                      color: '#94A3B8',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                      display: 'inline-block',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-headings)',
                fontSize: '15px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '18px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              Services & Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="footer-link"
                    style={{
                      fontSize: '14px',
                      color: '#94A3B8',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                      display: 'inline-block',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-headings)',
                fontSize: '15px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '18px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              Legal & Trust
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="footer-link"
                    style={{
                      fontSize: '14px',
                      color: '#94A3B8',
                      transition: 'color 0.2s ease',
                      display: 'inline-block',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: '24px',
                padding: '12px 14px',
                borderRadius: '8px',
                backgroundColor: 'var(--color-navy-card)',
                border: '1px solid var(--color-navy-border)',
                fontSize: '12px',
                color: '#94A3B8',
              }}
            >
              <span style={{ color: 'var(--color-leaf-green)', fontWeight: 600 }}>● All Systems Operational</span>
              <div style={{ marginTop: '4px', fontSize: '11px' }}>Kathmandu Datacenter & Cloud Region</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'var(--color-navy-border)',
            width: '100%',
            marginBottom: '28px',
          }}
        />

        {/* Bottom Bar / Copyright */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            textAlign: 'center',
            fontSize: '13px',
            color: '#64748B',
          }}
        >
          <div>
            © {currentYear} <strong>Digital Chautari Pvt. Ltd.</strong> All rights reserved. Registered in Kathmandu, Nepal.
          </div>
          <div style={{ fontSize: '12px', color: '#475569' }}>
            Crafted with precision using modern Next.js architecture & centralized design tokens.
          </div>
        </div>
      </Container>
    </footer>
  );
}
