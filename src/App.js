import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./themes/appTheme";
import Hero from "./components/Hero";
import About from "./components/About";
import TypeOfEventContainer from "./components/TypeOfEventComponent/TypeOfEventContainer";
import HowItWorksContainer from "./components/HowItWorks/HowItWorksContainer";

function App() {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={appTheme}>
        <Hero />
        <About />
        <TypeOfEventContainer />
        <HowItWorksContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
