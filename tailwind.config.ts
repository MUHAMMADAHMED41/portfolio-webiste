import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#09090b", ember: "#ff4500", flare: "#e63946", smoke: "#a1a1aa" },
    },
  },
  plugins: [],
};

export default config;