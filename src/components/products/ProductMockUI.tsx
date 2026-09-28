import React from 'react';
import { Badge } from '@/components/ui/Badge';

interface ProductMockUIProps {
  type: 'marketing' | 'media' | 'healthtech';
}

export function ProductMockUI({ type }: ProductMockUIProps) {
  if (type === 'marketing') {
    return (
      <div className="mock-ui-window">
        {/* Window Chrome Header */}
        <div className="mock-ui-header">
          <div className="mock-ui-dots">
            <span style={{ backgroundColor: '#EF4444' }} />
            <span style={{ backgroundColor: '#F59E0B' }} />
            <span style={{ backgroundColor: '#10B981' }} />
          </div>
          <div className="mock-ui-url">ecocreative.digitalchautari.com/analytics</div>
          <Badge variant="leaf" style={{ fontSize: '11px', padding: '2px 8px' }}>
            Live Stream
          </Badge>
        </div>

        {/* Dashboard Body */}
        <div className="mock-ui-body">
          {/* Top Metric Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '14px' }}>
            <div className="mock-metric-box">
              <span className="mock-metric-label">Total Spend</span>
              <strong className="mock-metric-value">$12,450</strong>
              <span style={{ fontSize: '11px', color: 'var(--color-leaf-green)', fontWeight: 600 }}>+18.4% ROI</span>
            </div>
            <div className="mock-metric-box">
              <span className="mock-metric-label">Conversions</span>
              <strong className="mock-metric-value">1,894</strong>
              <span style={{ fontSize: '11px', color: 'var(--color-primary-teal)', fontWeight: 600 }}>4.8x ROAS</span>
            </div>
            <div className="mock-metric-box">
              <span className="mock-metric-label">Avg CPA</span>
              <strong className="mock-metric-value">$6.57</strong>
              <span style={{ fontSize: '11px', color: 'var(--color-accent-gold)', fontWeight: 600 }}>-24% Cost</span>
            </div>
          </div>

          {/* Growth Chart Simulation */}
          <div className="mock-panel-card" style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-ink)' }}>Acquisition Funnel Performance</span>
              <span style={{ fontSize: '11px', color: 'var(--color-muted)' }}>Kathmandu & Global</span>
            </div>
            {/* Simulated bar chart */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '70px', paddingTop: '10px' }}>
              <div style={{ flex: 1, height: '40%', backgroundColor: 'var(--color-pastel-teal)', borderRadius: '4px' }} />
              <div style={{ flex: 1, height: '65%', backgroundColor: 'var(--color-pastel-teal)', borderRadius: '4px' }} />
              <div style={{ flex: 1, height: '50%', backgroundColor: 'var(--color-pastel-teal)', borderRadius: '4px' }} />
              <div style={{ flex: 1, height: '85%', backgroundColor: 'var(--color-primary-teal)', borderRadius: '4px' }} />
              <div style={{ flex: 1, height: '70%', backgroundColor: 'var(--color-pastel-teal)', borderRadius: '4px' }} />
              <div style={{ flex: 1, height: '95%', backgroundColor: 'var(--color-primary-teal)', borderRadius: '4px' }} />
              <div style={{ flex: 1, height: '100%', backgroundColor: 'var(--color-primary-dark)', borderRadius: '4px' }} />
            </div>
          </div>

          {/* Channel Breakdown */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div className="mock-panel-card" style={{ padding: '10px' }}>
              <span style={{ fontSize: '11px', color: 'var(--color-muted)' }}>Meta Ads Network</span>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-ink)', marginTop: '2px' }}>62% Traffic Share</div>
            </div>
            <div className="mock-panel-card" style={{ padding: '10px' }}>
              <span style={{ fontSize: '11px', color: 'var(--color-muted)' }}>Organic Search (SEO)</span>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-ink)', marginTop: '2px' }}>38% High-Intent</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'media') {
    return (
      <div className="mock-ui-window">
        {/* Window Chrome Header */}
        <div className="mock-ui-header">
          <div className="mock-ui-dots">
            <span style={{ backgroundColor: '#EF4444' }} />
            <span style={{ backgroundColor: '#F59E0B' }} />
            <span style={{ backgroundColor: '#10B981' }} />
          </div>
          <div className="mock-ui-url">onecontent.studio/production/project_084</div>
          <Badge variant="gold" style={{ fontSize: '11px', padding: '2px 8px' }}>
            4K UHD Editing
          </Badge>
        </div>

        {/* Studio Body */}
        <div className="mock-ui-body">
          {/* Main Video Viewport Mock */}
          <div
            style={{
              height: '130px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #101D2B 0%, #1E293B 100%)',
              border: '1px solid var(--color-navy-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#FFFFFF',
              position: 'relative',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(224, 169, 48, 0.9)',
                color: '#101826',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(224, 169, 48, 0.4)',
              }}
            >
              ▶
            </div>
            <div style={{ position: 'absolute', bottom: '8px', left: '10px', fontSize: '11px', color: '#94A3B8' }}>
              Scene 04 • Kathmandu Heritage Doc
            </div>
            <div style={{ position: 'absolute', bottom: '8px', right: '10px', fontSize: '11px', color: 'var(--color-accent-gold)', fontWeight: 600 }}>
              00:03:42:18
            </div>
          </div>

          {/* Multi-Track Audio/Video Timeline */}
          <div className="mock-panel-card" style={{ padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--color-muted)', marginBottom: '6px' }}>
              <span>Multi-Track Timeline (Pro Audio & Color Grading)</span>
              <span>48 kHz 24-bit</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {/* Video Track 1 */}
              <div style={{ height: '16px', backgroundColor: 'var(--color-pastel-gold)', borderRadius: '3px', width: '85%', display: 'flex', alignItems: 'center', paddingLeft: '6px', fontSize: '10px', fontWeight: 600, color: '#996B07' }}>
                Video Layer 01 [ProRes 422 HQ]
              </div>
              {/* Audio Track 1 */}
              <div style={{ height: '14px', backgroundColor: 'var(--color-pastel-teal)', borderRadius: '3px', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '6px', fontSize: '10px', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                Master Voiceover & Sound Design
              </div>
              {/* Subtitle Track */}
              <div style={{ height: '12px', backgroundColor: 'var(--color-pastel-purple)', borderRadius: '3px', width: '70%', display: 'flex', alignItems: 'center', paddingLeft: '6px', fontSize: '9px', fontWeight: 600, color: '#7E4F9E' }}>
                Nepali / English Subtitles
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // HealthTech / Physio@Home Preview
  return (
    <div className="mock-ui-window">
      {/* Window Chrome Header */}
      <div className="mock-ui-header">
        <div className="mock-ui-dots">
          <span style={{ backgroundColor: '#EF4444' }} />
          <span style={{ backgroundColor: '#F59E0B' }} />
          <span style={{ backgroundColor: '#10B981' }} />
        </div>
        <div className="mock-ui-url">app.physioathome.com.np/patient/portal</div>
        <Badge variant="teal" style={{ fontSize: '11px', padding: '2px 8px' }}>
          Verified Therapist
        </Badge>
      </div>

      {/* Patient Portal Body */}
      <div className="mock-ui-body">
        {/* Active Consultation Banner */}
        <div
          style={{
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: 'var(--color-pastel-teal)',
            border: '1px solid rgba(15, 148, 136, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-teal)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '13px',
              }}
            >
              Dr
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-ink)' }}>
                Dr. Alisha Shrestha, BPT
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-muted)' }}>
                Home Visit • Lalitpur / Kathmandu
              </div>
            </div>
          </div>
          <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary-teal)', backgroundColor: '#FFFFFF', padding: '3px 8px', borderRadius: '6px' }}>
            Confirmed 3:00 PM
          </span>
        </div>

        {/* Recovery Tracker Progress */}
        <div className="mock-panel-card" style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-ink)' }}>Rehabilitation Progress (Knee Recovery)</span>
            <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-leaf-green)' }}>82% Complete</span>
          </div>
          <div style={{ height: '8px', width: '100%', backgroundColor: 'var(--color-line)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '82%', height: '100%', backgroundColor: 'var(--color-leaf-green)', borderRadius: '4px' }} />
          </div>
        </div>

        {/* Interactive Rehab Routines */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div className="mock-panel-card" style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--color-primary-teal)', fontWeight: 800 }}>✓</span>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600 }}>Mobility Drills</div>
              <div style={{ fontSize: '10px', color: 'var(--color-muted)' }}>3 sets • 15 reps</div>
            </div>
          </div>
          <div className="mock-panel-card" style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--color-accent-gold)', fontWeight: 800 }}>⏳</span>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600 }}>Resistance Bands</div>
              <div style={{ fontSize: '10px', color: 'var(--color-muted)' }}>Today's Session</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
