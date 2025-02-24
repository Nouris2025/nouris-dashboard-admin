import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xsm": "375px",
        xsm: "425px",
        "3xl": "2000px",
      },
      fontFamily: {
        rubik: ["rubik", "lufga", "sans-serif"],
      },
      colors: {
        primary: "#FCE2CE",
        background: "#FEF6EF",
        grayInput: "#757575",
        primaryBrown: "#553922",
      },
      boxShadow: {
        "inner-custom": "inset 0px 0px 20px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
