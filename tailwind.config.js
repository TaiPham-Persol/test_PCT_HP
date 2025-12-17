/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './utils/**/*.{js,ts}',
  ],
  theme: {
    // Configure the container to be centered and use 1240px at xl breakpoint
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        white: 'var(--white)',
        gray00: 'var(--gray00)',
        gray01: 'var(--gray01)',
        gray02: 'var(--gray02)',
        gray03: 'var(--gray03)',
        gray04: 'var(--gray04)',
        gray05: 'var(--gray05)',
        gray06: 'var(--gray06)',
        black: 'var(--black)',
        black01: 'rgb(var(--black01) / <alpha-value>)',
        yellow: 'var(--yellow)',
        green: 'var(--green)',
        'color-neutral-lightest': 'var(--color-neutral-lightest)',
        'color-neutral-darkest': 'var(--color-neutral-darkest)',
        'color-neutral-darker': 'var(--color-neutral-darker)',
        'color-scheme-1-foreground': 'var(--color-scheme-1-foreground)',
        'color-scheme-1-text': 'var(--color-scheme-1-text)',
        'color-scheme-1-background': 'var(--color-scheme-1-background)',
        'color-scheme-1-border': 'var(--color-scheme-1-border)',
      },
      fontFamily: {
        roboto: 'var(--roboto-font-family)',
        notosan: 'var(--notosan-font-family)',
      },
      boxShadow: {
        drop: 'var(--drop-shadow-box-shadow)',
      },
      backgroundImage: {
        linear: 'var(--linear)',
        style: 'var(--style)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        marquee2: {
          from: { transform: 'translateX(calc(100% + 150px))' },
          to: { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
      },
    },
  },
  plugins: [],
};
