/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        "slide-up": {
          "0%": {
            transform: "translateY(50%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 100,
          },
        },
      },
      animation: {
        "slide-up": "slide-up 0.6s ease-in-out",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
};
