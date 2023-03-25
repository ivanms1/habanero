import * as React from 'react';
import clsx from 'clsx';

import { Spinner } from '../Spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  isLoading?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  children,
  variant = 'primary',
  className,
  isLoading,
  size = 'md',
  ...props
}: ButtonProps) => {
  if (variant === 'ghost') {
    return (
      <button className='py-4 px-7 text-lg' {...props}>
        {children}
      </button>
    );
  }

  return (
    <button
      className={clsx(
        BASE_STYLES,
        VARIANT_STYLES[variant],
        SIZE_STYLES[size],
        className
      )}
      {...props}
    >
      {isLoading ? <Spinner color={variant} /> : children}
    </button>
  );
};

const BASE_STYLES =
  'py-2 px-4 transition active:translate-y-0.5 disabled:opacity-50 text-center';

const SIZE_STYLES = {
  sm: 'py-2 px-5 text-sm',
  md: 'py-3 px-6',
  lg: 'py-4 px-7 text-lg',
};

const VARIANT_STYLES = {
  primary: 'bg-primary text-white hover:bg-primary/80 ',
  secondary:
    'bg-transparent text-primary border border-secodary hover:bg-primary/10',
};
