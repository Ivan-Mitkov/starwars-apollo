import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Routes from "./Routes";
import NavBar from "./components/NavBar";
import { useDarkMode } from './useDarkMode';

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <NavBar toggleTheme={toggleTheme} />
          <Routes />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
