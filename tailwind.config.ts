import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-image": "url('/background.png')",
      },
      colors: {
        "custom-green": "#143E45",
        "custom-black": "#1E1F26",
        "custom-white": "#FFEDED5E",
        "custom-blue": "#0053F7",
        "custom-light-green": "#B2E9AA",
        "custom-light-pink": "#E9AAAA",
        "custom-light-yellow": "#E9DBAA",
        "custom-light-blue": "#AAE9E5",
        "custom-light-purple": "#B2AAE9",
      },
      borderRadius: {
        large: "22px",
      },
      rotate: {
        "rotate-y-180": "rotateY(180deg)",
      },
    },
  },
  plugins: [],
};
export default config;
