import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          50: "#FCFAF7",
          100: "#F7F1E8",
          200: "#EFE3D4",
          300: "#E3D0BC",
          400: "#CDAA84",
          900: "#4A2F1D",
        },
      },
    },
  },
} satisfies Config;