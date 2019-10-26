import React,{useState,useEffect} from "react";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

import gql from "graphql-tag";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Routes from "./Routes";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import { useDarkMode } from "./useDarkMode";
// Set up our apollo-client to point at the server we created
// this can be local or a remote endpoint
const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: " https://swapp.st6.io/graphql",
    // headers: {
    //   authorization: localStorage.getItem("token"),
    //   authorization: token ? `Bearer ${token}` : '',
    //   // "client-name": "Space Explorer [web]",
    //   // "client-version": "1.0.0"
    // }
  }),
  request: (operation) => {
    const token = localStorage.getItem('token')
    console.log('token: ',token)
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
  // resolvers,
  // typeDefs
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
    // cartItems: []
  }
});

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn  {
    isLoggedIn @client
  }
`;

function IsLoggedIn() {
  const { data  } = useQuery(IS_LOGGED_IN);
  console.log('is logged in',data)
  return  data.isLoggedIn ? <Routes /> : <Login />     
   
}

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [isLogged,setIsLogged]=useState(false)
  const isItLogged=()=>{
    const isLogged=localStorage.getItem('token')&&true
 
    setIsLogged(isLogged) 
  }
  const handleLogout = () => {
    localStorage.setItem("token", "");
    setIsLogged(false) 
  };
  useEffect(()=>{
    isItLogged()
  },[client])

  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <ApolloProvider client={client}>
            <NavBar toggleTheme={toggleTheme} isLogged={isLogged} handleLogout={handleLogout}/>
            {/* <Routes /> */}
            <IsLoggedIn />
          </ApolloProvider>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
