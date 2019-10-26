import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import  LoginForm  from '../components/LoginForm';


export const LOGIN_USER = gql`
  mutation SignIn($email: String!,$password:String!) {
    signIn(email: $email, password: $password){
      token
    }
  }
`;

export default function Login() {
  const client = useApolloClient();
  
  // console.log('login client',client)
  const [signIn, { loading, error }] = useMutation(    
    LOGIN_USER,
    {
      onCompleted( {signIn} ) {
        // console.log('on completed login',signIn)
        localStorage.setItem('token', signIn);
        client.writeData({ data: { isLoggedIn: true } });
        console.log('client is logged in',client.isLoggedIn)
        // console.log(login)
      }
    }
  );

  if (loading) return "Loading";
  if (error) return <p>An error occurred</p>;
 
  return <LoginForm login={signIn} />;
}