import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "BMEULJIROTTF",
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
      white: "#FFFFFF",
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
  plugins: [
    ({ addUtilities, theme }: PluginAPI) => {
      addUtilities({
        /* Color Styles */
        /* Background */
        ".color-bg-0": {
          backgroundColor: theme("colors.white"),
        },
        ".color-bg-1": {
          backgroundColor: theme("colors.gray0"),
        },
        ".color-bg-2": {
          backgroundColor: theme("colors.gray100"),
        },
        ".color-bg-3": {
          backgroundColor: theme("colors.gray200"),
        },
        ".color-bg-4": {
          backgroundColor: theme("colors.gray300"),
        },
        ".color-bg-lime0": {
          backgroundColor: theme("colors.lime0"),
        },
        ".color-bg-lime200": {
          backgroundColor: theme("colors.lime200"),
        },
        ".color-bg-lime400": {
          backgroundColor: theme("colors.lime400"),
        },
        ".color-bg-lime700": {
          backgroundColor: theme("colors.lime700"),
        },
        ".color-bg-lime900": {
          backgroundColor: theme("colors.lime900"),
        },
        /* Border */
        ".color-border-white": {
          borderColor: theme("colors.white"),
        },
        ".color-border-gray100": {
          borderColor: theme("colors.gray100"),
        },
        ".color-border-gray300": {
          borderColor: theme("colors.gray300"),
        },
        ".color-border-gray500": {
          borderColor: theme("colors.gray500"),
        },
        ".color-border-gray600": {
          borderColor: theme("colors.gray600"),
        },
        /* Outline */
        ".color-outline-white": {
          outlineColor: theme("colors.white"),
        },
        ".color-outline-gray100": {
          outlineColor: theme("colors.gray100"),
        },
        ".color-outline-gray300": {
          outlineColor: theme("colors.gray300"),
        },
        ".color-outline-gray500": {
          outlineColor: theme("colors.gray500"),
        },
        ".color-outline-gray600": {
          outlineColor: theme("colors.gray600"),
        },
        ".color-outline-lime200": {
          outlineColor: theme("colors.lime200"),
        },
        ".color-outline-lime600": {
          outlineColor: theme("colors.lime600"),
        },
        /* Text */
        ".color-text-white": {
          color: theme("colors.white"),
        },
        ".color-text-gray-disabled": {
          color: theme("colors.gray500"),
        },
        ".color-text-gray-hint": {
          color: theme("colors.gray600"),
        },
        ".color-text-gray-sub": {
          color: theme("colors.gray700"),
        },
        ".color-text-gray-default": {
          color: theme("colors.gray900"),
        },
        ".color-text-lime-disabled": {
          color: theme("colors.lime300"),
        },
        ".color-text-lime-hint": {
          color: theme("colors.lime400"),
        },
        ".color-text-lime-sub": {
          color: theme("colors.lime600"),
        },
        ".color-text-lime-default": {
          color: theme("colors.lime800"),
        },
        /* Color Styles */
        /* Icon */
        ".color-icon-white": {
          color: theme("colors.white"),
        },
        ".color-icon-gray-disabled": {
          color: theme("colors.gray500"),
        },
        ".color-icon-gray-hint": {
          color: theme("colors.gray600"),
        },
        ".color-icon-gray-default": {
          color: theme("colors.gray700"),
        },
        ".color-icon-gray-accent": {
          color: theme("colors.gray800"),
        },
        ".color-icon-lime-disabled": {
          color: theme("colors.lime300"),
        },
        " .color-icon-lime-hint": {
          color: theme("colors.lime400"),
        },
        ".color-icon-lime-default": {
          color: theme("colors.lime600"),
        },
        ".color-icon-lime-accent": {
          color: theme("colors.lime800"),
        },
        /* Text Styles */
        /* title */
        ".text-title-page-base": {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.8"),
        },
        ".text-title-page-sm": {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.7"),
        },
        ".text-title-section": {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.7"),
        },
        ".header-medium": {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.8"),
        },
        ".header-large": {
          fontSize: "32px",
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "48px",
        },
        /* Text Style */
        /* Label */
        ".text-label-black": {
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.5"),
        },
        ".text-label-accent": {
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.5"),
        },
        ".text-label-default": {
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: theme("lineHeight.5"),
        },
        /* Text Style */
        /* Content */
        ".body-bold-lg": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.6"),
        },
        ".body-regular-lg": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: theme("lineHeight.6"),
        },
        ".body-regular-base": {
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: theme("lineHeight.5"),
        },
        ".body-xsmall-default": {
          fontSize: "0.625rem",
          fontWeight: theme("fontWeight.normal"),
          lineHeight: theme("lineHeight.4"),
        },
        ".body-xsmall-accent": {
          fontSize: "0.625rem",
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.4"),
        },
        ".body-small-default": {
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: theme("lineHeight.5"),
        },
        ".body-small-accent": {
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.5"),
        },
        ".body-medium-accent": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.6"),
        },
        ".body-medium-default": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: theme("lineHeight.6"),
        },
        ".body-large-accent": {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.7"),
        },
        ".text-content-accent-lg": {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.7"),
        },
        ".text-content-default-lg": {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: theme("lineHeight.7"),
        },
        ".text-content-accent-base": {
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.5"),
        },
        ".text-content-default-base": {
          fontSize: theme("fontSize.xs"),
          lineHeight: theme("lineHeight.5"),
        },
        ".text-caption-accent": {
          fontSize: theme("fontSize.xxs"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.4"),
        },
        ".text-caption-default": {
          fontSize: theme("fontSize.xxs"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: theme("lineHeight.4"),
        },
        /* Padding Style */
        /* Main */
        ".padding-main-0": {
          paddingTop: theme("padding.0"),
          paddingRight: theme("padding.0"),
          paddingBottom: theme("padding.16"),
          paddingLeft: theme("padding.0"),
        },
        ".padding-main-1": {
          paddingTop: theme("padding.10"),
          paddingRight: theme("padding.8"),
          paddingBottom: theme("padding.16"),
          paddingLeft: theme("padding.8"),
        },
        ".padding-main-2": {
          paddingTop: theme("padding.6"),
          paddingRight: theme("padding.8"),
          paddingBottom: theme("padding.16"),
          paddingLeft: theme("padding.8"),
        },
        /* Padding Style */
        /* Vertical */
        ".padding-vertical-0": {
          paddingTop: theme("padding.[2px]"),
          paddingBottom: theme("padding.[2px]"),
        },
        ".padding-vertical-1": {
          paddingTop: theme("padding.1"),
          paddingBottom: theme("padding.1"),
        },
        ".padding-vertical-2": {
          paddingTop: theme("padding.2"),
          paddingBottom: theme("padding.2"),
        },
        ".padding-vertical-3": {
          paddingTop: theme("padding.3"),
          paddingBottom: theme("padding.3"),
        },
        ".padding-vertical-4": {
          paddingTop: theme("padding.4"),
          paddingBottom: theme("padding.4"),
        },
        ".padding-vertical-5": {
          paddingTop: theme("padding.6"),
          paddingBottom: theme("padding.6"),
        },
        ".padding-vertical-6": {
          paddingTop: theme("padding.8"),
          paddingBottom: theme("padding.8"),
        },
        ".padding-vertical-7": {
          paddingTop: theme("padding.10"),
          paddingBottom: theme("padding.10"),
        },
        ".padding-vertical-8": {
          paddingTop: theme("padding.12"),
          paddingBottom: theme("padding.12"),
        },
        ".padding-vertical-9": {
          paddingTop: theme("padding.16"),
          paddingBottom: theme("padding.16"),
        },
        /* Padding Style */
        /* Horizontal */
        ".padding-horizontal-0": {
          paddingLeft: theme("padding.[2px]"),
          paddingRight: theme("padding.[2px]"),
        },
        ".padding-horizontal-1": {
          paddingLeft: theme("padding.1"),
          paddingRight: theme("padding.1"),
        },
        ".padding-horizontal-2": {
          paddingLeft: theme("padding.2"),
          paddingRight: theme("padding.2"),
        },
        ".padding-horizontal-3": {
          paddingLeft: theme("padding.3"),
          paddingRight: theme("padding.3"),
        },
        ".padding-horizontal-4": {
          paddingLeft: theme("padding.4"),
          paddingRight: theme("padding.4"),
        },
        ".padding-horizontal-5": {
          paddingLeft: theme("padding.6"),
          paddingRight: theme("padding.6"),
        },
        ".padding-horizontal-6": {
          paddingLeft: theme("padding.8"),
          paddingRight: theme("padding.8"),
        },
        ".padding-horizontal-7": {
          paddingLeft: theme("padding.10"),
          paddingRight: theme("padding.10"),
        },
        ".padding-horizontal-8": {
          paddingLeft: theme("padding.12"),
          paddingRight: theme("padding.12"),
        },
        ".padding-horizontal-9": {
          paddingLeft: theme("padding.16"),
          paddingRight: theme("padding.16"),
        },
        ".number-padding-small": {
          padding: theme("padding.4"),
        },
        /* Margin Style */
        /* Vertical */
        ".margin-vertical-0": {
          marginTop: theme("margin.[2px]"),
          marginBottom: theme("margin.[2px]"),
        },
        ".margin-vertical-1": {
          marginTop: theme("margin.1"),
          marginBottom: theme("margin.1"),
        },
        ".margin-vertical-2": {
          marginTop: theme("margin.2"),
          marginBottom: theme("margin.2"),
        },
        ".margin-vertical-3": {
          marginTop: theme("margin.3"),
          marginBottom: theme("margin.3"),
        },
        ".margin-vertical-4": {
          marginTop: theme("margin.4"),
          marginBottom: theme("margin.4"),
        },
        ".margin-vertical-5": {
          marginTop: theme("margin.6"),
          marginBottom: theme("margin.6"),
        },
        ".margin-vertical-6": {
          marginTop: theme("margin.8"),
          marginBottom: theme("margin.8"),
        },
        ".margin-vertical-7": {
          marginTop: theme("margin.10"),
          marginBottom: theme("margin.10"),
        },
        ".margin-vertical-8": {
          marginTop: theme("margin.12"),
          marginBottom: theme("margin.12"),
        },
        ".margin-vertical-9": {
          marginTop: theme("margin.16"),
          marginBottom: theme("margin.16"),
        },
        /* Margin Style */
        /* Horizontal */
        ".margin-horizontal-0": {
          marginLeft: theme("margin.[2px]"),
          marginRight: theme("margin.[2px]"),
        },
        ".margin-horizontal-1": {
          marginLeft: theme("margin.1"),
          marginRight: theme("margin.1"),
        },
        ".margin-horizontal-2": {
          marginLeft: theme("margin.2"),
          marginRight: theme("margin.2"),
        },
        ".margin-horizontal-3": {
          marginLeft: theme("margin.3"),
          marginRight: theme("margin.3"),
        },
        ".margin-horizontal-4": {
          marginLeft: theme("margin.4"),
          marginRight: theme("margin.4"),
        },
        ".margin-horizontal-5": {
          marginLeft: theme("margin.6"),
          marginRight: theme("margin.6"),
        },
        ".margin-horizontal-6": {
          marginLeft: theme("margin.8"),
          marginRight: theme("margin.8"),
        },
        ".margin-horizontal-7": {
          marginLeft: theme("margin.10"),
          marginRight: theme("margin.10"),
        },
        ".margin-horizontal-8": {
          marginLeft: theme("margin.12"),
          marginRight: theme("margin.12"),
        },
        ".margin-horizontal-9": {
          marginLeft: theme("margin.16"),
          marginRight: theme("margin.16"),
        },
        /* Base Styles */
        /* Header */
        ".header-bold-lg": {
          fontSize: "32px",
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "48px",
        },
        ".header-bold-base": {
          fontSize: "24px",
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "32px",
        },
        ".drop-shadow-xs": {
          boxShadow:
            "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 2px 1px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.07)",
        },
        ".drop-shadow-xl": {
          boxShadow:
            "0px 24px 38px rgba(0, 0, 0, 0.07), 0px 9px 46px rgba(0, 0, 0, 0.06), 0px 11px 15px rgba(0, 0, 0, 0.1)",
        },
        ".drawer-footer-shadow": {
          boxShadow: "0px -1px 4px 0px rgba(0, 0, 0, 0.10)",
        },

        /* Layout */
        ".max-w-contents": {
          width: "1070px",
        },
      });
    },
  ],
};
export default config;
