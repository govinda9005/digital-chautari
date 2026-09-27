import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className = '',
  as: Component = 'div',
  ...props
}: ContainerProps) {
  return (
    <Component className={`container ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
