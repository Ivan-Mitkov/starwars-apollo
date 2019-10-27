import React, { useEffect, useState } from "react";
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

const Home = ({ toggleTheme }) => {
  const [log, setLog] = useState(false);
  const handleLogout = () => {
    client.writeData({ data: { isLoggedIn: false, me: null } });
    localStorage.setItem("token", "");
    localStorage.setItem("me",null);
  };
  function IsLoggedIn() {
    const { data } = useQuery(IS_LOGGED_IN);
    console.log("is logged in", data.isLoggedIn);
    return data.isLoggedIn;
  }
  const isLogged = IsLoggedIn();
  console.log("home", isLogged);
  useEffect(() => {
    setLog(isLogged);
  }, [isLogged]);

  return (
    <BrowserRouter>
      <NavBar
        toggleTheme={toggleTheme}
        isLogged={isLogged}
        handleLogout={handleLogout}
      />
      {/* <Routes /> */}
      {isLogged ? <Routes /> : <Login />}
    </BrowserRouter>
  );
};

export default Home;
