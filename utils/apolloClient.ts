import { setContext } from "@apollo/client/link/context";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
// This file is used to configure the Apollo Client, it creates a new instance of the Apollo Client and sets the URI of the GraphCMS endpoint and the authorization header with the token, it also sets the cache to an instance of InMemoryCache, it is used in the reducers to fetch data from the GraphCMS endpoint.
const httpLink = createHttpLink({
  uri: process.env.GRAPHCMS_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
