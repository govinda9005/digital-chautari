import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface BlogPost {
  title: string;
  category: string;
  badgeVariant: 'teal' | 'gold' | 'leaf';
  date: string;
  readTime: string;
  excerpt: string;
  gradientBg: string;
  slug: string;
}

const posts: BlogPost[] = [
  {
    title: 'Why Next.js App Router is the Benchmark for Enterprise Software in Nepal',
    category: 'Engineering & Architecture',
    badgeVariant: 'teal',
    date: 'Sep 2026',
    readTime: '5 min read',
    excerpt: 'How React Server Components and edge caching drastically reduce server overhead and deliver sub-second response times across regional networks.',
    gradientBg: 'linear-gradient(135deg, #0F9488 0%, #0B6F66 100%)',
    slug: '#',
  },
  {
    title: 'Building Design Systems that Scale: From Figma Tokens to Production CSS',
    category: 'UI/UX & Design Systems',
    badgeVariant: 'gold',
    date: 'Sep 2026',
    readTime: '4 min read',
    excerpt: 'A deep dive into how we harmonize typography, color variables, and interactive states to create consistent product ecosystems.',
    gradientBg: 'linear-gradient(135deg, #E0A930 0%, #B88219 100%)',
    slug: '#',
  },
  {
    title: 'The Rise of HealthTech in South Asia: Lessons from Developing Physio@Home',
    category: 'Product Innovation',
    badgeVariant: 'leaf',
    date: 'Sep 2026',
    readTime: '6 min read',
    excerpt: 'Key technical insights and security challenges overcome when building Kathmandu’s premier at-home tele-rehabilitation platform.',
    gradientBg: 'linear-gradient(135deg, #7FAE3A 0%, #557823 100%)',
    slug: '#',
  },
];

export function BlogTeaser() {
  return (
    <section className="section-standard blog-teaser-section" style={{ borderTop: '1px solid var(--color-line)' }}>
      <Container>
        <SectionHeading
          eyebrow="Insights & Articles"
          eyebrowVariant="teal"
          title={
            <>
              Latest from <span className="headline-gradient">our blog</span>
            </>
          }
          description="Perspectives on full-stack web engineering, human-centered product design, and the evolving technology ecosystem in Kathmandu, Nepal."
          align="center"
        />

        <div className="blog-grid">
          {posts.map((post) => (
            <Card key={post.title} className="blog-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {/* Colored Placeholder Image Header */}
              <div
                style={{
                  height: '160px',
                  background: post.gradientBg,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px',
                }}
              >
                {/* Abstract tech pattern overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.15,
                    backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />
                <Badge variant={post.badgeVariant} style={{ position: 'relative', zIndex: 2, backgroundColor: '#FFFFFF', color: 'var(--color-ink)', border: 'none' }}>
                  {post.category}
                </Badge>
              </div>

              {/* Body */}
              <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '12px', color: 'var(--color-muted)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 style={{ fontSize: '18px', lineHeight: '1.35', marginBottom: '12px' }}>
                  {post.title}
                </h3>

                <p className="text-muted" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                  {post.excerpt}
                </p>

                <div style={{ borderTop: '1px solid var(--color-line)', paddingTop: '14px' }}>
                  <Link
                    href={post.slug}
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--color-primary-teal)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
