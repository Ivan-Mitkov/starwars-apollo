import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  console.log('auth',token)
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export default authLink;