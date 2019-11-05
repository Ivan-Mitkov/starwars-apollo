import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, from } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import {API_URL} from "../config";

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: API_URL
  // Additional fetch options like `credentials` or `headers`
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem("token");
    // console.log("token: ", token);
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  });

  return forward(operation);
});

  // const otherMiddleware = new ApolloLink((operation, forward) => {
  //   // add the recent-activity custom header to the headers
  //   operation.setContext(({ headers = {} }) => ({
  //     headers: {
  //       ...headers,
  //       'theme': localStorage.getItem('theme') || null,
  //     }
  //   }));

  //   return forward(operation);
  // })

const client = new ApolloClient({
  link: from([
    authMiddleware,
      // otherMiddleware,
    httpLink
  ]),
  cache
});
// console.log("client token", localStorage.getItem("token"));
cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token")
  }
});
// writeDataForLoggin(client)

export default client;
