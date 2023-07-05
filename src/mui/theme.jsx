import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#121313",
    },
    secondary: {
      main: "#4982FA",
    },
    info: {
      main: "#F6F7F8",
    },
    textPrimary: {
      main: "#F4F4F4",
    },
    textSecondary: {
      main: "rgba(244, 244, 244, 0.40)",
      dark: "rgba(1, 1, 1, 0.552)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "20px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "18px",
    },
    h4: {
      fontSize: "16px",
    },
    h5: {
      fontSize: "14px",
    },
    body1: {
      fontSize: "14px",
    },
    caption: {
      fontSize: "12px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "32px",
          textTransform: "none",
          height: "50px",
          width: "200px",
        },
        outlined: {
          color: "#F4F4F4",
          border: "1px solid rgba(244, 244, 244, 0.16)",
        },
        contained: {
          background: "linear-gradient(90deg, #4C85FA 0%, #236BFE 100%)",
          // boxShadow: "1px 1px 140px 0px #387AFF",
          color: "#F4F4F4",
          boxShadow: "2px 2px 63px 6px rgba(56,122,255,0.93)",
          webkitBoxShadow: "2px 2px 63px 6px rgba(56,122,255,0.93)",
          mozBoxShadow: "2px 2px 63px 6px rgba(56,122,255,0.93)",
        },
      },
    },
  },
});

export default theme;
