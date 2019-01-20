import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  headers: { authorization: `Bearer 974fd375547827f876c7c9e4739478514f4c3811` },
  uri: 'https://api.github.com/graphql'
})

export default client;
