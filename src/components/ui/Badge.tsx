import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary';
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-[#323232]',
    primary: 'bg-[#323232]/10 text-[#323232]',
    secondary: 'bg-violet-100 text-violet-700',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-md',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
