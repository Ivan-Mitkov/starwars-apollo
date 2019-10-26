import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Login from "./Login";
import NavBar from "../components/NavBar";
import Routes from "../Routes";
import client from "../client/client";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;



const Home = ({toggleTheme}) => {
    const handleLogout = () => {
        client.isLoggedIn = false;
        localStorage.setItem("token", "");
      };
      function IsLoggedIn() {
        const { data } = useQuery(IS_LOGGED_IN);
        console.log("is logged in", data.isLoggedIn);
        return data.isLoggedIn;
      }
      const isLogged=IsLoggedIn();
      console.log(isLogged)
      
  return (
    <BrowserRouter>
      <NavBar
        toggleTheme={toggleTheme}
        isLogged={isLogged}
        handleLogout={handleLogout}
      />
      {/* <Routes /> */}
      {IsLoggedIn ? <Routes /> : <Login />}
    </BrowserRouter>
  );
};

export default Home;
