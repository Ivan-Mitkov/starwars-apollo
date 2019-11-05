// import gql from "graphql-tag";


// export const writeDataForLoggin=(client)=>{
  
//     client
//       .query({
//         query: gql`
//           query {
//             me {
//               id
//             }
//           }
//         `
//       })
//       .then(result => {
//         // console.log("then client", result);
//         localStorage.setItem("me", true);

//         client.cache.writeData({
//           data: {
//             isLoggedIn: !!localStorage.getItem("me"),
//             me: result
//           }
//         });
//         // console.log('then',(localStorage.getItem('me')))
//       })
//       .catch(err => {
//         localStorage.setItem("token", null);
//         localStorage.setItem("me", false);
//         client.cache.writeData({
//           data: {
//             isLoggedIn: false,
//             me: ""
//           }
//         });
    
//         console.log('ERRR',err)
//       })
//       .finally(() => {
//         // console.log('client finally',localStorage.getItem('me'));
//       });
//     }