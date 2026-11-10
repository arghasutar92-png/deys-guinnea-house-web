import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#0D0D0D",
          900: "#1A1A1A"
        },
        champagne: "#D4AF37",
        ivory: "#F9F6F0"
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"]
      },
      letterSpacing: {
        "widest-plus": "0.28em"
      }
    }
  },
  plugins: []
};

export default config;
