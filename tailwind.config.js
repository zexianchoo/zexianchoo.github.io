/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        kirimoni: ['Kirimomi Swash', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "light-blue": "#A0D9ED",
        "dark-blue": "#OA2472",
        "slate-gray": "#121212",
        "pale-blue": "#F5F6FF",
        "lime-green": "#32CD32",
        "off-white": "#FAF9F6",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
        'wavebg': "url('assets/images/wave.svg')",
      },
      screens: {
        "wide": "1440px"
      },

      clipPath: {
        custom: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)', // Example custom shape
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-custom': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 50%, 0 100%)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}