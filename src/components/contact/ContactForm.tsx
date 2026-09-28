'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const projectTypes = [
  'Full-Stack Web App',
  'Mobile Application',
  'Digital Marketing & SEO',
  'Video & Content Studio',
  'Physio@Home Partnership',
  'General Consultation',
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  projectType?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    projectType: 'Full-Stack Web App',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a subject (minimum 3 characters).';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message description (minimum 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate async network submission delay for demo
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      projectType: 'Full-Stack Web App',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <Card style={{ padding: 'clamp(28px, 4vw, 44px)', textAlign: 'center' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-pastel-teal)',
            color: 'var(--color-primary-teal)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            margin: '0 auto 20px auto',
            boxShadow: '0 8px 20px -4px rgba(15, 148, 136, 0.3)',
          }}
        >
          ✓
        </div>

        <Badge variant="teal" style={{ marginBottom: '14px' }}>
          Message Received Successfully
        </Badge>

        <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px' }}>
          Thank you, {formData.name.split(' ')[0]}!
        </h3>

        <p className="text-muted" style={{ fontSize: '15px', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto 24px auto' }}>
          Your inquiry regarding <strong>{formData.projectType}</strong> has been logged in our demo portal. Our Kathmandu team typically responds within 24 hours.
        </p>

        {/* Demo Summary Box */}
        <div
          style={{
            backgroundColor: 'var(--color-paper)',
            border: '1px solid var(--color-line)',
            borderRadius: 'var(--radius-card)',
            padding: '16px',
            textAlign: 'left',
            maxWidth: '480px',
            margin: '0 auto 28px auto',
            fontSize: '13px',
          }}
        >
          <div style={{ color: 'var(--color-muted)', marginBottom: '4px' }}>
            <strong>Email:</strong> {formData.email}
          </div>
          <div style={{ color: 'var(--color-muted)', marginBottom: '4px' }}>
            <strong>Subject:</strong> {formData.subject}
          </div>
          <div style={{ color: 'var(--color-muted)' }}>
            <strong>Scope:</strong> {formData.projectType}
          </div>
        </div>

        <Button onClick={handleReset} variant="primary">
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <Card style={{ padding: 'clamp(24px, 4vw, 36px)' }}>
      <form onSubmit={handleSubmit} noValidate>
        {/* Row 1: Name and Email */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '8px' }}
            >
              Full Name <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Aarav Sharma"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              className={`form-input ${errors.name ? 'form-input-error' : ''}`}
            />
            {errors.name && <span className="form-error-msg">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '8px' }}
            >
              Email Address <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="aarav@company.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              className={`form-input ${errors.email ? 'form-input-error' : ''}`}
            />
            {errors.email && <span className="form-error-msg">{errors.email}</span>}
          </div>
        </div>

        {/* Row 2: Subject */}
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="subject"
            style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '8px' }}
          >
            Subject / Project Title <span style={{ color: '#EF4444' }}>*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="e.g. Next.js Enterprise Portal for HealthTech"
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              if (errors.subject) setErrors({ ...errors, subject: undefined });
            }}
            className={`form-input ${errors.subject ? 'form-input-error' : ''}`}
          />
          {errors.subject && <span className="form-error-msg">{errors.subject}</span>}
        </div>

        {/* Row 3: Project Type Clickable Pills */}
        <div style={{ marginBottom: '22px' }}>
          <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '10px' }}>
            Project Type <span style={{ color: '#EF4444' }}>*</span>
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {projectTypes.map((type) => {
              const isSelected = formData.projectType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, projectType: type });
                    if (errors.projectType) setErrors({ ...errors, projectType: undefined });
                  }}
                  className={`project-pill-btn ${isSelected ? 'project-pill-btn-active' : ''}`}
                >
                  {isSelected && <span style={{ fontSize: '12px' }}>✓</span>}
                  <span>{type}</span>
                </button>
              );
            })}
          </div>
          {errors.projectType && <span className="form-error-msg">{errors.projectType}</span>}
        </div>

        {/* Row 4: Message Textarea */}
        <div style={{ marginBottom: '28px' }}>
          <label
            htmlFor="message"
            style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '8px' }}
          >
            Project Details & Goals <span style={{ color: '#EF4444' }}>*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us about your objectives, timeline, budget range, and current infrastructure..."
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
          />
          {errors.message && <span className="form-error-msg">{errors.message}</span>}
        </div>

        {/* Submit Button & Demo Note */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            style={{ minWidth: '180px' }}
          >
            {isSubmitting ? 'Submitting Inquiry...' : 'Send Message →'}
          </Button>

          <span style={{ fontSize: '12px', color: 'var(--color-muted)' }}>
            🔒 100% Confidential • Kathmandu Studio SLA
          </span>
        </div>
      </form>
    </Card>
  );
}
