import { createTheme, responsiveFontSizes } from "@mui/material";
import { cyan, grey } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#21222c",
    },
    background: {
      default: "#282a36",
      paper: "#282a36",
    },
    text: {
      primary: "#e2e8f0",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
