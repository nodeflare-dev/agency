import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333333',
            h1: {
              fontSize: '2.25rem',
              fontWeight: '300',
              lineHeight: '1.2',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              color: '#333333',
            },
            h2: {
              fontSize: '1.75rem',
              fontWeight: '300',
              lineHeight: '1.3',
              marginTop: '2.5rem',
              marginBottom: '0.75rem',
              color: '#333333',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '0.5rem',
            },
            h3: {
              fontSize: '1.375rem',
              fontWeight: '400',
              lineHeight: '1.4',
              marginTop: '2rem',
              marginBottom: '0.5rem',
              color: '#333333',
            },
            h4: {
              fontSize: '1.125rem',
              fontWeight: '400',
              lineHeight: '1.5',
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
              color: '#333333',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              lineHeight: '1.8',
            },
            a: {
              color: '#7c3aed',
              textDecoration: 'none',
              fontWeight: '400',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            strong: {
              color: '#333333',
              fontWeight: '500',
            },
            code: {
              color: '#7c3aed',
              backgroundColor: '#f3f4f6',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '400',
              '&::before': { content: 'none' },
              '&::after': { content: 'none' },
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#e5e7eb',
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              overflowX: 'auto',
              code: {
                backgroundColor: 'transparent',
                color: 'inherit',
                padding: '0',
                fontSize: '0.875rem',
                fontWeight: '400',
              },
            },
            ul: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.5rem',
            },
            ol: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              '&::marker': {
                color: '#9ca3af',
              },
            },
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: '#7c3aed',
              backgroundColor: '#f9fafb',
              padding: '1rem 1.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              fontStyle: 'normal',
              color: '#4b5563',
              p: {
                marginTop: '0',
                marginBottom: '0',
              },
            },
            hr: {
              borderColor: '#e5e7eb',
              marginTop: '2.5rem',
              marginBottom: '2.5rem',
            },
            table: {
              width: '100%',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              borderCollapse: 'separate',
              borderSpacing: '0',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
            },
            thead: {
              backgroundColor: '#f9fafb',
            },
            th: {
              padding: '4px 20px',
              textAlign: 'left',
              fontWeight: '500',
              color: '#1f2937',
              fontSize: '1rem',
              borderBottom: '1px solid #e5e7eb',
              borderRight: '1px solid #e5e7eb',
              '&:last-child': {
                borderRight: 'none',
              },
              p: {
                margin: '0',
              },
            },
            td: {
              padding: '4px 20px',
              color: '#374151',
              fontSize: '1rem',
              borderBottom: '1px solid #e5e7eb',
              borderRight: '1px solid #e5e7eb',
              '&:last-child': {
                borderRight: 'none',
              },
              p: {
                margin: '0',
              },
            },
            'tbody tr:last-child td': {
              borderBottom: 'none',
            },
            img: {
              borderRadius: '0.75rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            figcaption: {
              color: '#6b7280',
              fontSize: '0.875rem',
              textAlign: 'center',
              marginTop: '0.75rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
