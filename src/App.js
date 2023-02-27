import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./themes/appTheme";
import { Box } from "@mui/system";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={appTheme}>
        <Box
        // sx={{
        //   width: "100%",
        //   mx: "auto",
        // }}
        >
          <Hero /> <About />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
