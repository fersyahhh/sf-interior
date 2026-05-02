import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles =
    'font-label-tombol text-label-tombol px-6 py-3 uppercase tracking-widest transition-colors duration-300 inline-flex items-center gap-3';

  const variantStyles = {
    primary: 'bg-primary-container text-on-primary hover:bg-primary',
    secondary: 'border border-outline text-on-surface hover:bg-surface-variant',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="text-lg">{icon}</span>}
    </button>
  );
};
