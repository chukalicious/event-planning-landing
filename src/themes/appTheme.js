import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2e424f",
    },
    secondary: {
      main: "#e2cca4",
    },
    warning: {
      main: "#f98b01",
    },
  },
  typography: {
    fontFamily: "Lora",
    fontWeightLight: 200,
    h6: {
      fontFamily: "Montserrat",
    },
    subtitle1: {
      fontFamily: "Montserrat",
    },
    subtitle2: {
      fontFamily: "Montserrat",
    },
    body1: {
      fontFamily: "Montserrat",
    },
    body2: {
      fontFamily: "Montserrat",
    },
    button: {
      fontFamily: "Montserrat",
    },
  },
});
