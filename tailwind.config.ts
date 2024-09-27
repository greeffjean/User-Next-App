import type { Config } from "tailwindcss";

const developmentContent =
  process.env.MODE === "dev"
    ? ["./src/stories/**/*.stories.{js,ts,jsx,tsx,mdx}"]
    : [];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ...developmentContent,
  ],
  theme: {
    colors: {
      Primary: "#4426D9",
      MajorelleBlue50: "#ECE9FB",
      MajorelleBlue700: "#361FAD",
      RedCrayola50: "#FCE8EC",
      RedCrayola700: "#B61634",
      LightBlue50: "#E5F4FF",
      LightBlue700: "#0077CC",
      MandarinOrange50: "#FDEDE7",
      MandarinOrange700: "#C03F0C",
      Turquoise50: "#E9FBFB",
      Turquoise700: "#1FADAD",
      TextPrimary: "#141C24",
      TextSecondary: "#5C6970",
    },
  },
  fontFamily: {
    sans: ["Roboto Flex", "sans-serif"],
  },
  plugins: [],
};
export default config;
