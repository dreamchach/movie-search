import { ApolloClient, InMemoryCache } from "@apollo/client"
import { host } from '@/utill/const'

const client = new ApolloClient({
  uri: `${host}/api/graphql`,
  cache: new InMemoryCache(),
})

export default client
