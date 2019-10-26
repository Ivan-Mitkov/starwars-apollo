import React from "react";
// import { ApolloClient } from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

import gql from "graphql-tag";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

import { useDarkMode } from "./useDarkMode";
// Set up our apollo-client to point at the server we created
// this can be local or a remote endpoint

import client from "./client/client";
import Home from "./pages/Home";

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Home toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
