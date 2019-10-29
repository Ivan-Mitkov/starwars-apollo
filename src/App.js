import React, { useEffect } from "react";
// import { ApolloClient } from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

import { useDarkMode } from "./useDarkMode";
// Set up our apollo-client to point at the server we created
// this can be local or a remote endpoint

import client from "./client/client2";
import Home from "./pages/Home";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  useEffect(() => {
    const logOut = () => localStorage.setItem("token", "");
    return () => logOut();
  });
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Home toggleTheme={toggleTheme} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
