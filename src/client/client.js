// import { ApolloClient } from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";
// import {writeDataForLoggin} from './writeInCache'
// // import {  useQuery } from "@apollo/react-hooks";


// const cache = new InMemoryCache();

// const client = new ApolloClient({
//   cache,
//   link: new HttpLink({
//     uri: " https://swapp.st6.io/graphql"
   
//   }),
//   request: (operation) => {
//     const token = localStorage.getItem("token");
//     console.log("token: ", token);
//     operation.setContext({
//       headers: {
//         Authorization: token ? `Bearer ${token}` : ""
//         // Authorization: token ? token : ""
//       }
//     });
//   }
//   // resolvers,
//   // typeDefs
  
// });
// client.cache.writeData({
//   data: {
//     isLoggedIn: localStorage.getItem("me")
//       ? localStorage.getItem("me")
//       : false,
//     me: false
//   }
// });
// writeDataForLoggin(client)

// export default client;
