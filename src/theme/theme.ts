import { MD3LightTheme as DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    brand: {
      primary: "#2182BD",
      secondary: "#5282BD",
      muted: "#C6DAF7",
    },
    ui: {
      primary: "#262626",
      secondary: "#757575",
      tertiary: "#F1F1F1",
      quaternary: "#FFFFFF",
      disabled: "#DEDEDE",
      error: "#D0421B",
      success: "#138000",
    },
    bg: {
      primary: "#FFFFFF",
      secondary: "#F1F1F1",
    },
    text: {
      primary: "#262626",
      secondary: "#757575",
      disabled: "#9C9C9C",
      inverse: "#FFFFFF",
      error: "#D0421B",
      success: "#138000",
    },
  },
  fonts: {
    ...DefaultTheme.fonts,
    fontFamily: {
      body: "Oswald_400Regular",
      heading: "Lato_400Regular",
      monospace: "Oswald_400Regular",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    fontSize: {
      caption: 12,
      button: 14,
      body: 16,
      title: 20,
      h5: 24,
      h4: 34,
      h3: 45,
      h2: 56,
      h1: 112,
    },
    lineHeight: {
      title: "28px",
      copy: "20px",
    }
  },
  spacing: {
    xs: 0,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
    xx: 64,
  },
  sizes: {
    xs: 8,
    sm: 16,
    md: 32,
    lg: 64,
    xl: 128,
  },
};
