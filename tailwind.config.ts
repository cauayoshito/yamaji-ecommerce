import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        fg: "#F3F5F7",
        muted: "#A7ADB5",
        accent: "#00FFA3",
        accent2: "#5B2DFF",
        primary: "#13ecb6",
        card: "#121216",
        surface: "#0F1014",
      },
<<<<<<< HEAD:tailwind.config.js

      // Tipografia única global
=======
>>>>>>> 858ba39 (update: aplicar page + novos serviços):tailwind.config.ts
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
        content: "1080px",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 163, 0.25)",
        glowSoft: "0 0 40px rgba(91, 45, 255, 0.18)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        yamajiPulse: {
          "0%,100%": {
            transform: "translate(-50%,0) scale(1)",
            opacity: "0.9",
          },
          "50%": {
            transform: "translate(-50%,10px) scale(1.05)",
            opacity: "1",
          },
        },
        yamajiFloat: {
          "0%,100%": { transform: "translate(0,0) scale(1)", opacity: "0.9" },
          "50%": {
            transform: "translate(-8px,-6px) scale(1.04)",
            opacity: "1",
          },
        },
        yamajiDrift: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        yamajiPulse: "yamajiPulse 9s ease-in-out infinite",
        yamajiFloat: "yamajiFloat 12s ease-in-out infinite",
        yamajiDrift: "yamajiDrift 10s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [typography, forms],
};

export default config;
