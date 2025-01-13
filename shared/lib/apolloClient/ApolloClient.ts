import { authSetting } from '@/shared/assets/enum/authEnum'
import { loadFromSessionStorage } from '@/shared/assets/hooks/loadFromSessionStorage'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'https://inctagram.org/api/v1/graphql',
})

const authLink = setContext((_, { headers, hookToken }) => {
  const token = loadFromSessionStorage(authSetting.authToken)

  return {
    headers: {
      ...headers,
      Authorization: token ? token : '',
    },
  }
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})
