import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
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
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
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
