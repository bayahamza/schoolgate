import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          950: "#0B2444",
          900: "#0F2F5E",
          800: "#1B4F72",
          700: "#1F5F8B",
          600: "#2E86C1",
          500: "#3498DB",
          50:  "#EBF5FB",
        },
        amber: {
          600: "#CA6F1E",
          500: "#E67E22",
          400: "#F39C12",
          50:  "#FEF9EE",
        },
        stone: {
          50: "#FAFAF8",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
