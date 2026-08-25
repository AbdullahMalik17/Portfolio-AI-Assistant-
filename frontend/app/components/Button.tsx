'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'cyber';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white font-bold shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] border border-white/10 hover:border-cyan-400/50 transition-all duration-300',
  secondary:
    'glass text-gray-200 hover:text-white hover:bg-white/[0.08] border border-white/10 hover:border-indigo-500/40 transition-all duration-300',
  ghost:
    'bg-transparent text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200',
  outline:
    'bg-transparent text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300',
  cyber:
    'bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-500 text-white font-bold shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] border border-emerald-400/30 transition-all duration-300'
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-xs rounded-xl font-medium tracking-wide',
  md: 'px-5 py-2.5 text-sm rounded-xl font-semibold tracking-wide',
  lg: 'px-7 py-3.5 text-base rounded-2xl font-bold tracking-tight',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 cursor-pointer select-none';

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.02, translateY: -1 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      aria-busy={loading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin text-current" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </motion.button>
  );
}
