import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./themes/appTheme";
import { Box } from "@mui/system";
import Hero from "./components/Hero";
import About from "./components/About";
import TypeOfEventContainer from "./components/TypeOfEventContainer";

function App() {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={appTheme}>
        <Hero />
        <About />
        <TypeOfEventContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
