/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '743px' },
        tablet: { min: '744px', max: '1279px' },
        desktop: { min: '1280px' },
      },
      colors: {
        primary: {
          main: '#81D8D0',
          100: '#E4F7F5',
          200: '#5CCDC2',
          300: '#3ABEB0',
          400: '#2F988D',
          500: '#23726A',
          600: '#7DC3C4',
          700: '#1da190',
          800: '#0D8384',
        },
        common: {
          white: '#FFFFFF',
          black: '#000000',
        },
        text: {
          footer: '#8E8E8E',
          underline: '#0B132B',
          highlight: '#F9C002',
        },
        border: {
          education: '#A3A3A3',
        },
      },
      backgroundColor: {
        header: '#c0c1c3',
        contrast: {
          200: '#0B132B',
        },
        enterprisePartner: '#f3fbfb',
        submit: '#212D40',
        consulting: '#212D40',
        tab: '#8E8E8E',
      },
      backgroundImage: {
        salesforce: 'linear-gradient(90deg, #212C63, #1F346B, #009DDC)',
        contact: 'linear-gradient(90deg, #81D8D0, #6fd4de)',
        coreValue: 'linear-gradient(140deg, #B8E9E4 20%, #81D8D0 50%)',
        aiPortal:
          'linear-gradient(90deg, #81D8D0 0%, #81D8D0 33.33%, #3abeb0 33.33%, #3abeb0 66.66%, #23726A 66.66%, #23726A 100%)',
      },
      scale: {
        60: '0.6',
      },
      boxShadow: {
        button: '0 4px 10px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
    plugins: [],
  },
};
