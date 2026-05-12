import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-full';

    const variants = {
      primary: 'bg-gradient-to-r from-violet-600 to-violet-500 text-white hover:from-violet-700 hover:to-violet-600 active:scale-[0.98]',
      secondary: 'bg-white text-[#323232] border border-gray-200 hover:bg-gray-50 active:scale-[0.98]',
      outline: 'bg-transparent text-[#323232] border border-[#323232] hover:bg-[#323232] hover:text-white active:scale-[0.98]',
      ghost: 'bg-transparent text-[#323232] hover:bg-gray-100 active:scale-[0.98]',
    };

    const sizes = {
      sm: 'h-9 px-5 text-sm',
      md: 'h-11 px-7 text-sm',
      lg: 'h-12 px-9 text-base min-w-[160px]',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
