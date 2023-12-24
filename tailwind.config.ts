import type { Config } from "tailwindcss";

const config: Config = {
  safelist: ["px-8", "px-4", "py-8", "py-4"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "2rem",

      "2xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.01em",
          fontWeight: "600",
        },
      ],
      "3xl": "3rem",
      "4xl": [
        "4rem",
        {
          lineHeight: "4rem",
          letterSpacing: "-0.01em",
          fontWeight: "600",
        },
      ],
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
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        gb4: "linear-gradient( to right, hsl(var(--b1) / 1 ) 0%,rgba(255,255,255,0) 100%)",
        gaf: "linear-gradient( to right, hsl(var(--b1) / 1 ) 0%,rgba(255,255,255,0) 100%)",
        grad0:
          "radial-gradient(at 99% 21%, hsla(182, 95%, 70%, 1) 0, hsla(182, 95%, 70%, 0) 50%), radial-gradient(at 10% 32%, hsla(188, 93%, 59%, 1) 0, hsla(188, 93%, 59%, 0) 50%), radial-gradient(at 25% 37%, hsla(20, 93%, 70%, 1) 0, hsla(20, 93%, 70%, 0) 50%), radial-gradient(at 78% 47%, hsla(10, 90%, 57%, 1) 0, hsla(10, 90%, 57%, 0) 50%), radial-gradient(at 15% 3%, hsla(351, 87%, 62%, 1) 0, hsla(351, 87%, 62%, 0) 50%), radial-gradient(at 68% 53%, hsla(225, 91%, 56%, 1) 0, hsla(225, 91%, 56%, 0) 50%), radial-gradient(at 45% 0%, hsla(68, 87%, 53%, 1) 0, hsla(68, 87%, 53%, 0) 50%);",
        grad1:
          "radial-gradient(at 68% 24%, hsla(333, 95%, 58%, 1) 0, hsla(333, 95%, 58%, 0) 50%),radial-gradient(at 48% 27%, hsla(306, 87%, 67%, 1) 0, hsla(306, 87%, 67%, 0) 50%),radial-gradient(at 30% 35%, hsla(26, 89%, 59%, 1) 0, hsla(26, 89%, 59%, 0) 50%),radial-gradient(at 93% 0%, hsla(325, 92%, 59%, 1) 0, hsla(325, 92%, 59%, 0) 50%),radial-gradient(at 82% 13%, hsla(309, 93%, 68%, 1) 0, hsla(309, 93%, 68%, 0) 50%),radial-gradient(at 23% 73%, hsla(260, 86%, 65%, 1) 0, hsla(260, 86%, 65%, 0) 50%),radial-gradient(at 91% 67%, hsla(264, 94%, 50%, 1) 0, hsla(264, 94%, 50%, 0) 50%);",
        grad2:
          "radial-gradient(at 46% 28%, hsla(315, 94%, 52%, 1) 0, hsla(315, 94%, 52%, 0) 50%),radial-gradient(at 14% 84%, hsla(3, 87%, 58%, 1) 0, hsla(3, 87%, 58%, 0) 50%),radial-gradient(at 70% 82%, hsla(338, 90%, 52%, 1) 0, hsla(338, 90%, 52%, 0) 50%),radial-gradient(at 7% 84%, hsla(342, 91%, 52%, 1) 0, hsla(342, 91%, 52%, 0) 50%),radial-gradient(at 2% 88%, hsla(67, 93%, 63%, 1) 0, hsla(67, 93%, 63%, 0) 50%),radial-gradient(at 25% 28%, hsla(292, 86%, 69%, 1) 0, hsla(292, 86%, 69%, 0) 50%),radial-gradient(at 61% 18%, hsla(353, 90%, 53%, 1) 0, hsla(353, 90%, 53%, 0) 50%);",
        grad3:
          "radial-gradient(at 64% 35%, hsla(26, 92%, 68%, 1) 0, hsla(26, 92%, 68%, 0) 50%), radial-gradient(at 52% 25%, hsla(147, 92%, 62%, 1) 0, hsla(147, 92%, 62%, 0) 50%), radial-gradient(at 70% 3%, hsla(33, 87%, 61%, 1) 0, hsla(33, 87%, 61%, 0) 50%), radial-gradient(at 68% 43%, hsla(198, 90%, 59%, 1) 0, hsla(198, 90%, 59%, 0) 50%), radial-gradient(at 64% 42%, hsla(221, 92%, 57%, 1) 0, hsla(221, 92%, 57%, 0) 50%), radial-gradient(at 26% 2%, hsla(1, 89%, 59%, 1) 0, hsla(1, 89%, 59%, 0) 50%), radial-gradient(at 28% 25%, hsla(202, 94%, 60%, 1) 0, hsla(202, 94%, 60%, 0) 50%);",
        grad4:
          "radial-gradient(at 2% 17%, hsla(90, 87%, 58%, 1) 0, hsla(90, 87%, 58%, 0) 50%), radial-gradient(at 70% 26%, hsla(315, 90%, 61%, 1) 0, hsla(315, 90%, 61%, 0) 50%), radial-gradient(at 1% 75%, hsla(305, 90%, 54%, 1) 0, hsla(305, 90%, 54%, 0) 50%), radial-gradient(at 75% 58%, hsla(166, 90%, 52%, 1) 0, hsla(166, 90%, 52%, 0) 50%), radial-gradient(at 24% 55%, hsla(22, 91%, 65%, 1) 0, hsla(22, 91%, 65%, 0) 50%), radial-gradient(at 31% 48%, hsla(26, 85%, 53%, 1) 0, hsla(26, 85%, 53%, 0) 50%), radial-gradient(at 36% 18%, hsla(14, 93%, 54%, 1) 0, hsla(14, 93%, 54%, 0) 50%);",
        grad5:
          "radial-gradient(at 1% 85%, hsla(353, 91%, 62%, 1) 0, hsla(353, 91%, 62%, 0) 50%), radial-gradient(at 57% 12%, hsla(242, 88%, 51%, 1) 0, hsla(242, 88%, 51%, 0) 50%), radial-gradient(at 59% 54%, hsla(195, 92%, 50%, 1) 0, hsla(195, 92%, 50%, 0) 50%), radial-gradient(at 32% 94%, hsla(213, 87%, 53%, 1) 0, hsla(213, 87%, 53%, 0) 50%), radial-gradient(at 40% 14%, hsla(279, 85%, 54%, 1) 0, hsla(279, 85%, 54%, 0) 50%), radial-gradient(at 78% 95%, hsla(163, 91%, 54%, 1) 0, hsla(163, 91%, 54%, 0) 50%), radial-gradient(at 62% 4%, hsla(309, 92%, 60%, 1) 0, hsla(309, 92%, 60%, 0) 50%);",
        grad6:
          "radial-gradient(at 100% 61%, hsla(297, 88%, 60%, 1) 0, hsla(297, 88%, 60%, 0) 50%), radial-gradient(at 50% 64%, hsla(263, 85%, 65%, 1) 0, hsla(263, 85%, 65%, 0) 50%), radial-gradient(at 56% 66%, hsla(132, 94%, 61%, 1) 0, hsla(132, 94%, 61%, 0) 50%), radial-gradient(at 24% 76%, hsla(199, 94%, 60%, 1) 0, hsla(199, 94%, 60%, 0) 50%), radial-gradient(at 94% 56%, hsla(321, 88%, 57%, 1) 0, hsla(321, 88%, 57%, 0) 50%), radial-gradient(at 64% 92%, hsla(274, 91%, 63%, 1) 0, hsla(274, 91%, 63%, 0) 50%), radial-gradient(at 83% 92%, hsla(348, 87%, 59%, 1) 0, hsla(348, 87%, 59%, 0) 50%);",
        grad7:
          "radial-gradient(at 37% 10%, hsla(188, 87%, 56%, 1) 0, hsla(188, 87%, 56%, 0) 50%), radial-gradient(at 28% 41%, hsla(330, 90%, 51%, 1) 0, hsla(330, 90%, 51%, 0) 50%), radial-gradient(at 23% 14%, hsla(139, 93%, 59%, 1) 0, hsla(139, 93%, 59%, 0) 50%), radial-gradient(at 33% 61%, hsla(360, 92%, 57%, 1) 0, hsla(360, 92%, 57%, 0) 50%), radial-gradient(at 61% 47%, hsla(320, 90%, 66%, 1) 0, hsla(320, 90%, 66%, 0) 50%), radial-gradient(at 43% 89%, hsla(228, 85%, 66%, 1) 0, hsla(228, 85%, 66%, 0) 50%), radial-gradient(at 84% 17%, hsla(230, 92%, 69%, 1) 0, hsla(230, 92%, 69%, 0) 50%);",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "synthwave",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "lofi",
      "luxury",
      "dracula",
      "night",
      "coffee",
      "winter",
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
export default config;
