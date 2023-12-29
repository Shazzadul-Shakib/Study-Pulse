import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepestBlue: "#040A2F",
        deeperBlue: "#081041",
        deepBlue: "#1B266B",
        gradientLeftBlue: "#0064FB",
        gradientRightBlue: "#1ECDF8",
        iconColor: "#7A8AD0",
        notifyColor: "#B6DE32",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities :any}) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
