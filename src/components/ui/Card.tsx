import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'navy';
  className?: string;
  children: React.ReactNode;
}

export function Card({
  variant = 'standard',
  className = '',
  children,
  ...props
}: CardProps) {
  const variantClass = variant === 'navy' ? 'card-navy' : '';
  const combinedClasses = `card ${variantClass} ${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}
