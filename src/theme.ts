import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
    fontSize: 16,
  },
  palette: {
    text: {
      primary: "#1a2135",
    },
    primary: {
      main: "#845194",
    },
    background: {
      default: "#c4bad6",
    },
  },
});

export default theme;
