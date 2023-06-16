/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    minWidth: {
      '1/2': '50vw',
      '1/5': '20vw',
      '4/5': '80vw',
    },
    extend: {
      width: {
        '95vw': '95vw'
      },
      margin: {
        '30vh': '5vh',
        '15p': '15%',
        '90vh' : '90vh',
      },
      colors: {
        'transparent': 'transparent',
        "gray": {
          "100": "#f7fafc",
          "200": "#edf2f7",
          "300": "#e2e8f0",
          "400": "#cbd5e0",
          "500": "#a0aec0",
          "600": "#718096",
          "700": "#4a5568",
          "800": "#2d3748",
          "900": "#1a202c",
        },
        'primary': {
          'focused': '#3C5148',
          'dark': '#1B2727',
          'default': '#6B8E4E',
          'light': '#B2C582',
          'border': '#D5DDDF'
        },
        'text': {
          'default': '#000',
          'light': '#fff',
          'focus': '#D9AC55',
        },
        'warning': '#BC6C25',
      },
      backgroundImage: {
        'home_page': "url('/img/bgHome.png')",
        'home_shape': "url('/img/coisa.svg')",
        'home_banner': "url('/img/home_banner.png')",
        'login_page': "url('/img/test2.png')",
        'my_bg_lateral_image' : "url('/img/lateralBar.png')",
        'bg_profile' : "url('/img/bgProfile.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'playfair_regular': ['PlayfairRegular'],
        'playfair_bold': ['PlayfairDisplay-Bold'],
        'kooka_regular': ['KookaRegular'],
        'kooka_bold': ['KookaBold'],
      }
    },
  },
  plugins: [],
}
