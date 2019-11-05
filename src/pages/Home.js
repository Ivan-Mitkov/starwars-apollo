import React from "react";
import { BrowserRouter  } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Login from "./Login";
import NavBar from "../components/NavBar";
import Routes from "../Routes";
import client from "../client/client2";



const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const Home = ({ toggleTheme }) => {
  const { data } = useQuery(IS_LOGGED_IN);
  
  console.log('data home: ',data)
  const handleLogout = () => {
    client.writeData({ data: { isLoggedIn: false} });
    localStorage.setItem("token", "");
  };
  return (
    <BrowserRouter>
      <NavBar
        toggleTheme={toggleTheme}
        isLogged={data.isLoggedIn}
        handleLogout={handleLogout}
      />
      {/* <Routes /> */}
      {data && data.isLoggedIn ? <Routes /> : <Login />}
    </BrowserRouter>
  );
};

export default Home;
