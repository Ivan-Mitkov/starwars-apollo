import React, { useState, useEffect } from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import LoginForm from "../components/LoginForm";
import Loading from "../components/Loading";

export const LOGIN_USER = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

export default function Login() {
  const client = useApolloClient();
  // const [loginError, setloginError] = useState(null);
  // console.log('login client',client)
  let logError = null;
 

  const [signIn, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ signIn }) {
      // console.log('on completed login',signIn.token)
      localStorage.setItem("token", signIn.token);
      // console.log('LOGIN',signIn)
      client.writeData({ data: { isLoggedIn: true } });
      // console.log('client is logged in')
      // console.log(login)
    }
  });

  if (loading) return <Loading />;
  if (error) {
    logError = "Invalid credentials";
    return <LoginForm error={logError} login={signIn} />;
  }

  return <LoginForm error={logError} login={signIn} />;
}
