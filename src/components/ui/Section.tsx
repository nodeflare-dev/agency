import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'gray' | 'dark';
}

export function Section({ className, variant = 'default', children, ...props }: SectionProps) {
  const variants = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
  };

  return (
    <section
      className={cn('py-20 lg:py-28', variants[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ badge, title, description, align = 'center', className, ...props }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        className
      )}
      {...props}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-violet-700 bg-violet-50 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-lg text-gray-600 leading-relaxed',
          align === 'center' && 'max-w-2xl mx-auto'
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
