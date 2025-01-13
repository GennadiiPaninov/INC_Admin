import { gql } from '@apollo/client'

export const DELETE_USER = gql`
  mutation deleteUserById($userId: String!) {
    deleteUser(userId: $userId)
  }
`
