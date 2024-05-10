/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      standard: ['Lato'],
      heading: ['Montserrat'],
      inter: ['Inter']
    },
    extend: {
      colors: {
        primary: '#101820',
        secondary: '#e33065',
        info: '#48BEEA',
        'info-100': '#d6e7f866',
        warning: '#ECAF5A',
        success: {
          DEFAULT: '#65CD54',
          100: '#8BCC5E'
        },
        danger: '#CB3243',
        brown: '#331435',
        purple: '#723D7A',
        white: '#FFFFFF',
        gray: {
          DEFAULT: '#D9D9D9',
          50: '#C8CED5',
          100: '#F5F6F7',
          125: '#F3F3F3',
          150: '#E8E8E8',
          200: '#B8C8D8',
          250: '#BABABA',
          300: '#57697B',
          350: '#3D4859',
          400: '#344658',

          1000: '#9aa5b030'
        },
        'green-100': '#D5EFE8'
      },
      boxShadow: {
        sm: '0px 2px 12px rgba(80, 101, 122, 0.24);',
        md: '0px 2px 16px 16px rgba(16, 24, 32, 0.05);',
        select: 'inset 0px 1px 13px rgba(38, 50, 56, 0.16)'
      }
    }
  },
  plugins: []
}
