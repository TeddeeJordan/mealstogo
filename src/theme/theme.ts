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
      caption: "12px",
      button: "14px",
      body: "16px",
      title: "20px",
      h5: "24px",
      h4: "34px",
      h3: "45px",
      h2: "56px",
      h1: "112px",
    },
    lineHeight: {
      title: "28px",
      copy: "20px",
    }
  },
};
