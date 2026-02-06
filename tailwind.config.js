/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Cores da identidade Yamaji
      colors: {
        bg: "#0A0A0B", // fundo dark
        fg: "#F3F5F7", // texto principal
        muted: "#A7ADB5", // texto secundário
        accent: "#00FFA3", // neon green (principal)
        accent2: "#5B2DFF", // roxo profundo metálico
        card: "#121216", // fundo de cards/blocos
        surface: "#0F1014",
      },

      // Tipografias (configure no globals.css com @import das fontes)
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },

      // Larguras e container
      maxWidth: {
        container: "1200px",
        content: "1080px",
      },

      // Radius e sombras
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 163, 0.25)",
        glowSoft: "0 0 40px rgba(91, 45, 255, 0.18)",
      },

      // Animações usadas no Hero (glows)
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
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
