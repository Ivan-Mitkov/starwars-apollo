import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
// import {  useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: " https://swapp.st6.io/graphql"
    // headers: {
    //   authorization: localStorage.getItem("token"),
    //   authorization: token ? `Bearer ${token}` : '',
    //   // "client-name": "Space Explorer [web]",
    //   // "client-version": "1.0.0"
    // }
  }),
  request: operation => {
    const token = localStorage.getItem("token");
    console.log("token: ", token);
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  }
  // resolvers,
  // typeDefs
});

cache.writeData({
  data: {
    isLoggedIn: localStorage.getItem("me")
      ? !!localStorage.getItem("me")
      : false,
    me:false
  }
});
client
  .query({
    query: gql`
      query {
        me {
          id
        }
      }
    `
  })
  .then(result => {
    console.log('then client',result.data.me.id);
    cache.writeData({
      data: {
        isLoggedIn: !!localStorage.getItem("me"),
        me: result
      }
    });
    console.log('then',(localStorage.getItem('me')))
    
  })
  .catch(err => {
    localStorage.setItem("token", null);
    localStorage.setItem("me",null);
    cache.writeData({
      data: {
        isLoggedIn: false,
        me:''
      }
    });

    console.log('err',(localStorage.getItem('me')))
  }
  )
  .finally(() => {    
    console.log('client finally',localStorage.getItem('me'));
  });

export default client;
