import { gql } from '@apollo/client'
export const GET_USERS = gql`
  query getAllUsers($pagination: PaginationInputUsers) {
    getUsers(pagination: $pagination) {
      page
      pageSize
      pagesCount
      totalCount
      items {
        id
        username
        createdAt
        profileLink
        banInfo {
          reason
          createdAt
        }
      }
    }
  }
`
