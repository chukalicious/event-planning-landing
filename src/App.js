import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./themes/appTheme";

function App() {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={appTheme}>
        <div className="App"></div>
      </ThemeProvider>
    </>
  );
}

export default App;
