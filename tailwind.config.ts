import { addScaleCorrector } from "framer-motion";
import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily:{
          sans: 'var(--font-sans)',
          serif: 'var(--font-serif)',
      },    

      animation: {
        'ping-large': "ping-large 1s ease-in-out infinite",
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
      },

      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
        'move-left': {
            '0%': {
              transform: 'translateX(0%)'
            },
            '100%': {
              transform: 'translateX(-50%)'

            }
        },

        'move-right': {
            '0%': {
              transform: 'translateX(-50%)'
            },
            '100%': {
              transform: 'translateX(0%)'

            }
        },
      },



      backgroundImage: {
        'button-gradient': 'linear-gradient(to right, #A855F7, #0EA5E9)', // from creative to cool-darker
      },

      colors:{
          "black-e": "#1b1b1b",
          "black-jet": "#0A0A0A",
          "black-matte": "#28282B",
         

        // 🔮 Bold & Creative (Neon Purple/Indigo)
        creative: {
          DEFAULT: '#a970ff',   // Main purple
          accent: '#d486ff',    // Accent lilac
          hover: '#f193ff',          // Creative Pink Hover
          pop: '#ff8cf9',            // Neon Pink Accent
          text: '#e5e5e5',           // Light Gray for content
        },

        // ❄️ Cool & Professional (Blues & Aquas)
        cool: {
          DEFAULT: '#50d8fd',   // Bright aqua
          accent: '#8cecff',    // Soft blue
          hover: '#36c2ff',     // Hover blue
          darker: '#0ea5e9',         // Deeper Blue for gradient
          text: '#EAEAEA',           // Soft White for text
        },

      },
    },
  },
  plugins: [],
};
export default config;
