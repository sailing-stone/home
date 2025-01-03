/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#81D8D0',
          100: '#E4F7F5',
          200: '#5CCDC2',
          300: '#3ABEB0',
          400: '#2F988D',
          500: '#23726A',
          600: '#7DC3C4',
        },
        common: {
          white: '#FFFFFF',
          black: '#000000',
        },
      },
      backgroundColor: {
        header: '#c0c1c3',
      },
      backgroundImage: {
        salesforce: 'linear-gradient(90deg, #212C63, #1F346B, #009DDC)',
        contact: 'linear-gradient(90deg, #81D8D0, #6fd4de)',
      },
      fontFamily: {
        sans: [
          '"Pretendard Variable"',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"Apple SD Gothic Neo"',
          '"Noto Sans KR"',
          '"Malgun Gothic"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          'sans-serif',
        ],
      },
    },
    plugins: [],
  },
};
