import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const variantClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  const combinedClasses = `btn ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
