import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Login from "./Login";
import NavBar from "../components/NavBar";
import Routes from "../Routes";
import client from "../client/client2";

const ME = gql`
  query me {
    me {
      id
    }
  }
`;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const Home = ({ toggleTheme }) => {

  const { data: ISLOGGED } = useQuery(IS_LOGGED_IN);
  const { loading, error, data } = useQuery(ME, {
    fetchPolicy: "network-only"
  });
  console.log("data home: ", ISLOGGED);
  console.log("data user: ", data);

  useEffect(() => {
   if(!data){
    handleLogout()
   }
   
  }, [data]);

  useEffect(() => {
   if(!data){
     handleLogout()
   }
   
  }, []);

 

  const handleLogout = () => {
    client.writeData({ data: { isLoggedIn: false } });
    localStorage.setItem("token", "");
  };

  return (
    <BrowserRouter>
      <NavBar
        toggleTheme={toggleTheme}
        isLogged={ISLOGGED}
        handleLogout={handleLogout}
      />
      {/* <Routes /> */}
      {ISLOGGED&&ISLOGGED.isLoggedIn ? <Routes /> : <Login />}
    </BrowserRouter>
  );
};

export default Home;
