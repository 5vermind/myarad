import { createTheme, PaletteColorOptions } from "@mui/material";

declare module "@mui/material" {
  interface PaletteOptions {
    tertiary: PaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#bde0fe",
      light: "#e4f3fe",
      dark: "#6bb9fc",
      contrastText: "black",
    },
    secondary: {
      main: "#fef5bd",
      light: "#fffce4",
      dark: "#fbe869",
      contrastText: "black",
    },
    tertiary: {
      main: "#febdcf",
      light: "#ffe5ec",
      dark: "#fb6791",
      contrastText: "black",
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
  },
});

export default theme;
