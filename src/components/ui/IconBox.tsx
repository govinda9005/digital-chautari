import React from 'react';

export type PastelVariant = 'leaf' | 'teal' | 'gold' | 'purple' | 'rose';

interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: PastelVariant;
  className?: string;
  children: React.ReactNode;
}

export function IconBox({
  variant = 'teal',
  className = '',
  children,
  ...props
}: IconBoxProps) {
  const variantClass = `icon-chip-${variant}`;
  const combinedClasses = `icon-chip ${variantClass} ${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}
