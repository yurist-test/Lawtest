import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060A14",
          900: "#0B1220",
          800: "#101B30",
          700: "#16223C",
          600: "#1E2D4D",
        },
        gold: {
          200: "#F7E8B8",
          300: "#F2DA9C",
          400: "#E0C266",
          500: "#D4AF37",
          600: "#B8932B",
          700: "#8F7220",
        },
        sapphire: {
          400: "#3E6CB5",
          500: "#2A5599",
          600: "#1B3B6F",
          700: "#122850",
        },
        ink: {
          100: "#ECEAE3",
          300: "#C7CAD6",
          400: "#9AA3B5",
          600: "#5B6478",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F2DA9C 0%, #D4AF37 45%, #8F7220 100%)",
        "navy-radial": "radial-gradient(circle at 50% 0%, #16223C 0%, #060A14 70%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
        "gold-glow": "0 0 24px 0 rgba(212, 175, 55, 0.35)",
        "inset-line": "inset 0 1px 0 0 rgba(212, 175, 55, 0.15)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "seal-stamp": {
          "0%": { opacity: "0", transform: "scale(1.4) rotate(-8deg)" },
          "60%": { opacity: "1", transform: "scale(0.96) rotate(2deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "seal-stamp": "seal-stamp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 3s linear infinite",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
