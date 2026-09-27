/**
 * Digital Chautari Design System Tokens
 * Creative Technology Studio in Kathmandu, Nepal
 */

export const colors = {
  primaryTeal: '#0F9488',
  primaryDark: '#0B6F66',
  accentGold: '#E0A930',
  leafGreen: '#7FAE3A',
  ink: '#101826',
  navy: '#0B1220',
  navyCard: '#101D2B',
  navyBorder: '#223140',
  paper: '#FBFBF9',
  line: '#E7E5DF',
  muted: '#5B6472',
  white: '#FFFFFF',
} as const;

export const pastelIconColors = {
  leaf: '#E7F5EA',
  teal: '#E7F2F4',
  gold: '#FDF1DE',
  purple: '#F4E9F6',
  rose: '#FDEEF0',
} as const;

export const gradients = {
  headline: 'linear-gradient(90deg, #0F9488, #E0A930, #7FAE3A)',
} as const;

export const typography = {
  headings: {
    fontFamily: 'Sora',
    weights: [600, 700, 800] as const,
  },
  body: {
    fontFamily: 'Inter',
    weights: [400, 500, 600] as const,
    baseSize: '16px',
    lineHeight: 1.5,
    color: '#101826',
  },
} as const;

export const layout = {
  maxContentWidth: 1120,
  desktopSidePadding: 40,
  mobileSidePadding: 22,
  mobileBreakpoint: 760,
  sectionPadding: {
    hero: { top: 84, bottom: 48 },
    standard: 64,
    tight: 48,
  },
  gridGap: 20,
} as const;

export const radius = {
  iconChips: '10px',
  cardsAndInputs: '12px',
  pillsBadges: '16px',
  primaryButtons: '8px',
} as const;

export const cardStyles = {
  border: '1px solid #E7E5DF',
  padding: '22px',
  borderRadius: '12px',
  hoverTranslate: 'translateY(-4.5px)',
  hoverShadow: '0 16px 30px -18px rgba(16, 24, 38, 0.2)',
} as const;

export const buttonStyles = {
  primary: {
    background: '#0F9488',
    color: '#FFFFFF',
    padding: '13px 24px',
    borderRadius: '8px',
  },
  secondary: {
    background: '#FFFFFF',
    color: '#101826',
    border: '1px solid #E7E5DF',
    padding: '13px 24px',
    borderRadius: '8px',
  },
} as const;
