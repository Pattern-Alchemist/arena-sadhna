import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: '#0B0B0B',
        'deep-gray': '#111827',
        'stellar-gold': '#D4AF37',
        'lunar-white': '#F5F3F0',
        ivory: 'var(--color-ivory)',
        bone: 'var(--color-bone)',
        hairline: 'var(--color-hairline)',
        ink: 'var(--color-ink)',
        obsidian: 'var(--color-obsidian)',
        gold: 'var(--color-gold)',
        'gold-bright': 'var(--color-gold-bright)',
        'gold-deep': 'var(--color-gold-deep)',
        'rose-accent': 'var(--color-rose-accent)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: 'var(--font-mono)',
      },
      fontSize: {
        monumental: 'clamp(6rem, 24vw, 22rem)',
        'editorial-xl': 'clamp(3rem, 12vw, 8rem)',
        'editorial-lg': 'clamp(2rem, 8vw, 5rem)',
      },
      backgroundColor: {
        base: 'var(--color-background)',
      },
      textColor: {
        base: 'var(--color-foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
