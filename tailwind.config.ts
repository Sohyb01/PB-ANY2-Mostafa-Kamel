import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xs: ".625rem",
        sm: ".813rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.563rem",
        "2xl": "1.938rem",
        "3xl": "2.438rem",
        "4xl": "3.063rem",
        "5xl": "3.813rem",
        "6xl": "4.75rem",
        "7xl": "5.938rem",
        "8xl": "7.438rem",
        "9xl": "9.313rem",
        "10xl": "11.625rem",
        "11xl": "14.563rem",
        "12xl": "18.188rem",
      },
      screens: {
        sm: "360px",
        md: "744px",
        lg: "1080px",
        xl: "1440px",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
