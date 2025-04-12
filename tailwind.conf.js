/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin'); // Ensure plugin is imported

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom colors for light and dark modes
      colors: {
        primary: {
          light: '#3b82f6', // Blue for light mode buttons, links
          dark: '#60a5fa', // Lighter blue for dark mode
          DEFAULT: '#3b82f6', // Fallback
        },
        accent: {
          light: '#f59e0b', // Amber for highlights
          dark: '#fbbf24', // Brighter amber for dark mode
          DEFAULT: '#f59e0b',
        },
        ad: {
          background: {
            light: '#f3f4f6', // Subtle gray for ad placeholders
            dark: '#374151', // Darker gray for dark mode ads
          },
          border: {
            light: '#d1d5db',
            dark: '#4b5563',
          },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-ad': 'linear-gradient(to right, #f59e0b 0%, #ef4444 100%)',
        'gradient-dark-hero': 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
        'gradient-subtle': 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0))',
      },
      animation: {
        'pulse-ad': 'pulseAd 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'bounce-callout': 'bounceCallout 1s ease-in-out',
        'gradient-flow': 'gradientFlow 5s linear infinite',
      },
      keyframes: {
        pulseAd: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.9' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceCallout: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.primary.light'),
            },
            a: {
              color: theme('colors.accent.light'),
              '&:hover': {
                color: theme('colors.accent.dark'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.primary.dark'),
            },
            a: {
              color: theme('colors.accent.dark'),
              '&:hover': {
                color: theme('colors.accent.light'),
              },
            },
          },
        },
      }),
      spacing: {
        'ad-sm': '1.5rem',
        'ad-lg': '3rem',
      },
      screens: {
        'ad-mobile': '400px',
        'ad-tablet': '768px',
        'ad-desktop': '1024px',
      },
      zIndex: {
        'sticky-ad': 100,
        modal: 1000,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For prose styling in MDX
    // Custom plugin for dynamic gradient utilities
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        '.bg-gradient-animated': {
          backgroundImage: theme('backgroundImage.gradient-hero'),
          backgroundSize: '200% 200%',
          animation: theme('animation.gradient-flow'),
        },
        '.dark .bg-gradient-animated': {
          backgroundImage: theme('backgroundImage.gradient-dark-hero'),
        },
        '.border-ad': {
          borderColor: theme('colors.ad.border.light'),
          borderWidth: '2px',
          borderStyle: 'solid',
        },
        '.dark .border-ad': {
          borderColor: theme('colors.ad.border.dark'),
        },
      };
      addUtilities(newUtilities, ['responsive', 'dark']);
    }),
  ],
};