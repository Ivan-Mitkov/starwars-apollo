import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

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
    isLoggedIn: !!localStorage.getItem("token")
    // cartItems: []
  }
});

export default client;