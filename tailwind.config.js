module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{},
    colors: {
      bgr: '#DEE6FF',
      bl: '#6C86E0',
      bd: '#1E1F6F',
      rb: '#DC0000',
      white: '#FFFFFF',
      gwhite: '#B0C0CF'
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      heads:['Montserrat'],
      body:['Nunito']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
