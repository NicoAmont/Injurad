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
      bgr: '#FFFFFF',
      bgr2: 'rgba(40, 225, 140, 0.1)',
      bgrS: 'rgba(232, 236, 235, 1)',
      bgrS2: '#C4C4C4',
      sl: '#E5AE35',
      gl: '#2A614D',
      bg: '#203D46',
      bg2: '#326754',
      bg3: '#7A8A7C',
      bg4: '#334F5F',
      bgf: '#072317',
      bgfva: '#8A3529',
      b: '#000000'

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








