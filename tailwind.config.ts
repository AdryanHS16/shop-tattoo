import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme : {
    container: {
        center: true,
        padding: {
          xl: '10rem'
        }
    },
  },
  
  plugins: [],
};
export default config;
