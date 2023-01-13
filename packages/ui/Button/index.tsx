import * as React from 'react';
import clsx from 'clsx';

import { Spinner } from '../Spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  className,
  isLoading,
  ...props
}: ButtonProps) => {
  if (variant === 'ghost') {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  }

  return (
    <button
      className={clsx(BASE_STYLES, VARIANT_STYLES[variant], className)}
      {...props}
    >
      {isLoading ? <Spinner color={variant} /> : children}
    </button>
  );
};

const BASE_STYLES =
  'py-2 px-4 transition active:translate-y-0.5 disabled:opacity-50 text-center';

const VARIANT_STYLES = {
  primary: 'bg-primary text-white hover:bg-primary/80 ',
  secondary:
    'bg-transparent text-primary border border-secodary hover:bg-primary/10',
};
