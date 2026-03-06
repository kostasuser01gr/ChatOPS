import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05050A",
        panel: "#0D0E15",
        panelBorder: "rgba(255,255,255,0.08)",
        neon: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          magenta: "#d946ef",
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        'glow-radial': 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
      }
    },
  },
  plugins: [],
};
export default config;
