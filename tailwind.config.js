module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        jello: 'jello 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        jello: {        
          '0%, 100%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
        }
      }
    },
    colors: {
      bgr: '#DEE6FF',
      bl: '#6C86E0',
      bd: '#1E1F6F',
      rb: '#DC0000',
      white: '#FFFFFF',
      gwhite: '#B0C0CF',
      thome: '#E0E7FF',
      thome2:'#DEE6FF',
      explhome:'#D5E1FC',
      subs1:'#345B82',
      subs2:'#EA7911'

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
    },
    
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
