import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Login from "./Login";
import NavBar from "../components/NavBar";
import Routes from "../Routes";
import client from "../client/client2";
import Loading from "../components/Loading";

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
  const { loading, error, data: USER } = useQuery(ME,{fetchPolicy:"network-only"});
  if (loading) return <Loading />;
  if (error) {
    // console.log(error);
    return <p>Error on getting all movies</p>;
  }
  console.log("data home: ", ISLOGGED);
  console.log("data user: ", USER);
  const handleLogout = () => {
    client.writeData({ data: { isLoggedIn: false } });
    localStorage.setItem("token", "");
  };
  return (
    <BrowserRouter>
      <NavBar
        toggleTheme={toggleTheme}
        isLogged={ISLOGGED.isLoggedIn}
        handleLogout={handleLogout}
      />
      {/* <Routes /> */}
      {(ISLOGGED && ISLOGGED.isLoggedIn)&&(USER&&USER.me.id) ? <Routes /> : <Login />}
    </BrowserRouter>
  );
};

export default Home;
