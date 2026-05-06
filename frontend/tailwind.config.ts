import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-purple':  '#744D83',
        'light-purple': '#E3DBE6',
        'turquoise':    '#23BBB7',
        'light-blue':   '#D3EDEF',
        'deep-blue':    '#23627C',
        'cream':        '#F0EADF',
        primary:        '#744D83',
        accent:         '#23BBB7',
        'text-primary':   '#2D1F35',
        'text-secondary': '#6B5878',
        'text-muted':     '#9B8EA5',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body:    ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config