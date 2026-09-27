import React from 'react';

export type BadgeVariant = 'teal' | 'gold' | 'leaf';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = 'teal',
  className = '',
  children,
  ...props
}: BadgeProps) {
  const variantClass = variant === 'teal' ? '' : `badge-${variant}`;
  const combinedClasses = `badge ${variantClass} ${className}`.trim();

  return (
    <span className={combinedClasses} {...props}>
      {children}
    </span>
  );
}
