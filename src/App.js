import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./themes/appTheme";
import Hero from "./components/Hero";
import About from "./components/About";
import TypeOfEventContainer from "./components/TypeOfEventComponent/TypeOfEventContainer";
import HowItWorksContainer from "./components/HowItWorks/HowItWorksContainer";
import ServicesContainer from "./components/ServicesComponent/ServicesContainer";

function App() {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={appTheme}>
        <Hero />
        <About />
        <TypeOfEventContainer />
        <HowItWorksContainer />
        <ServicesContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
