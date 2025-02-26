import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      "RussoOne-Regular": ["RussoOne-Regular"],
    },
    extend: {
      keyframes: {
          "pop-blob": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        "flip-words": {
          "10%": { transform: "translateY(-112%)" },
          "25%": { transform: "translateY(-100%)" },
          "35%": { transform: "translateY(-212%)" },
          "50%": { transform: "translateY(-200%)" },
          "60%": { transform: "translateY(-312%)" },
          "75%": { transform: "translateY(-300%)" },
          "85%": { transform: "translateY(-412%)" },
          "100%": { transform: "translateY(-400%)" },
        },
      },

      boxShadow: {
        glow: "0 0 20px rgba(255, 204, 112, 0.7), 0 0 40px rgba(200, 80, 192, 0.5), 0 0 60px rgba(65, 88, 208, 0.3)",
        glow2:
          "0 0 20px rgba(50, 255, 50, 0.7), 0 0 40px rgba(20, 200, 20, 0.5), 0 0 60px rgba(5, 150, 5, 0.3)",
      },
      filter: {
        "blur-20": "blur(20px)",
        "blur-25": "blur(25px)",
      },
      brightness: {
        150: "1.5",
      },
      colors: {
        'photo-bg-Primary-color' : '#73727a',
        'primary-color': '#330A57',
        'secondary-color': '#863CCA',
        'background-primary-color': '#05060b',
        'background-secondary-color': '#17181e',
        filter: {
          "blur-20": "blur(20px)",
          "blur-25": "blur(25px)",
        },
        foreground: "hsl(var(--foreground))",
      },
      animation: {
        "pop-blob": "pop-blob 5s infinite",
        "flip-words": "flip-words 15s infinite",
        "fw-2": "flip-words 8.5s infinite",
        "fw-3": "flip-words 7s infinite",
    },
    fontFamily: {
      'RussoOne-Regular': ['RussoOne-Regular'],
      'Raleway-Regular': ['Raleway-Regular'],
    }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
