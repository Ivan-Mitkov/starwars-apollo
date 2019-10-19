import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Routes from "./Routes";
import NavBar from "./components/NavBar";

function App() {
  const [theme, setTheme] = useState("lightTheme");
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "lightTheme") {
      setTheme("darkTheme");
      // otherwise, it should be light
    } else {
      setTheme("lightTheme");
    }
  };
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
