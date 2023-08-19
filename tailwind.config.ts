import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: [
        "-apple-system",
        "BlinkMacSystemFont",
        "avenir next",
        "avenir",
        "helvetica",
        "helvetica neue",
        "ubuntu",
        "roboto",
        "noto",
        "segoe ui",
        "arial, sans-serif",
      ],
      body: ['"Open Sans"'],
    },
    spacing: {
      0: "0",
      half: "0.25rem",
      1: "0.5rem",
      2: "1rem",
      3: "1.5rem",
      4: "2rem",
      5: "3rem",
      6: "4rem",
      7: "8rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: ["light", "lofi", "dark"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
export default config;
