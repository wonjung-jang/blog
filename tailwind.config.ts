import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Noto Sans KR",
        "Apple SD Gothic Neo",
        "Nanum Barun Gothic",
        "Nanum Gothic",
        "Verdana",
        "Arial",
        "Malgun Gothic",
        "Dotum",
        "sans-serif",
      ],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: "0.625rem",
      px: "32px",
    },
    colors: {
      ...colors,
      "key-color": "#0e14ea",
      "clap-gray-100": "#f8f8f8",
      "clap-gray-200": "#f1f1f1",
      "clap-gray-300": "#dfdfdf",
      "clap-gray-400": "#d9e1e7",
      "clap-gray-600": "#828a95",
      "clap-gray-700": "#7b8493",
      "clap-gray-900": "#2e2a29",
      "clap-gray-1000": "#2d2a29",
      "clap-indigo-700": "#141ee1",
      "clap-teal-500": "#22c1aa",
      "clap-pale-gray": "#f1f3fa",
      "clap-pale-gray-100": "#dbe1e6",
      "clap-gray-blue": "#809fb8",
      "clap-coral": "#f7543f",
      "clap-green": "#22c1aa",
      "clap-alert-text-info": "#586068",
      // new design system
      "gray-sub": "#586068",
      gray0: "#F8F9FA",
      gray100: "#F1F3F5",
      gray200: "#E9ECEF",
      gray300: "#DEE2E6",
      gray400: "#CED4DA",
      gray500: "#ADB5BD",
      gray600: "#868E96",
      gray700: "#586068",
      gray800: "#3A4248",
      gray900: "#212529",
      lime0: "#F3FAF5	",
      lime100: "#E2F3E8",
      lime200: "#C8E8D6",
      lime300: "#A8D5BA",
      lime400: "#89C5A3",
      lime500: "#6BB58A",
      lime600: "#54A176",
      lime700: "#3E8D62",
      lime800: "#2E7A51",
      lime900: "#1F6841",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
